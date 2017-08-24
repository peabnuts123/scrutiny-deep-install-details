const Registry = require('npm-registry');

const npm = new Registry({
  registry: 'https://registry.npmjs.org'
});

const QUERY_INTERVAL_MS = 100;

function populatePackageDetails(packages) {
  let packageIndex = 0;

  // Return a promise that will resolve once ALL details of every package has been fetched
  return new Promise(function (mainResolve, mainReject) {
    let allPromises = [];

    // Perform 1 request every QUERY_INTERVAL_MS milliseconds
    let intervalKey = setInterval(function () {
      // Pick up the current package
      let currentPackage = packages[packageIndex];

      // Enqueue a promise for this package's details
      allPromises.push(new Promise(function (resolve, reject) {
        // Query the NPM registry for this package
        npm.packages.details(currentPackage.packageName, function (error, data) {
          // Oh noes, the npm registry had problems :(
          //  TODO more specific error handling
          if (error) {
            return reject(error);
          }

          // Map / parse package details into something useful
          currentPackage.details = parsePackageDetails(data[0], currentPackage.packageVersion);

          // Resolve promise with the current package
          resolve(currentPackage);
        });
      }));

      packageIndex++;

      // Check if we've processed all of the packages
      if (packageIndex >= packages.length) {
        clearInterval(intervalKey);

        // this promise is done when all of these promises are done
        //  this has to be done with 2 promises because the task of
        //  collating the promises is async in itself (using setInterval)
        Promise.all(allPromises)
          .then(mainResolve)
          .catch(mainReject);
      }
    }, QUERY_INTERVAL_MS);
  });
}

function parsePackageDetails(details, version) {
  // Default to details.version, if none specified
  version = version || details.version;

  let versionData = details.versions[version];

  return {
    name: versionData.name,
    publishDate: details.time[version] ? new Date(details.time[version]) : undefined,
    publishAuthor: `${details.releases[version].name} (${details.releases[version].email})`,
    version: version,
    repositoryURL: versionData.repository.url,
    homepage: versionData.homepage,
    license: versionData.license,
    // TODO do something with dependencies
    // dependencies: _.reduce(details.versions[version].dependencies, function (current, value, key) {
    //   current.push({ version: value, name: key });
    //   return current;
    // }, []),
    // devDependencies: _.reduce(details.versions[version].devDependencies, function (current, value, key) {
    //   current.push({ version: value, name: key });
    //   return current;
    // }, [])
  };
}

module.exports = populatePackageDetails;