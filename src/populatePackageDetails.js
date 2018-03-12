const Registry = require('npm-registry');
const _ = require('lodash');
const Logger = require('./lib/Logger');
const ProgressBar = require('progress');

const npm = new Registry({
  registry: 'https://registry.npmjs.org'
});

const QUERY_INTERVAL_MS = 100;

function populatePackageDetails(packages) {
  let packageIndex = 0;
  let totalPackages = packages.length;
  let progressBar = new ProgressBar('[:bar] :percent (:etas remaining…)', {
    total: totalPackages,
    width: 20,
    clear: true,
    callback() {
      Logger.log("Finished!");
    }
  });

  Logger.log(`Fetching details for ${totalPackages} package${totalPackages > 1 ? 's' : ''}…`);


  // Return a promise that will resolve once ALL details of every package has been fetched
  return new Promise(function (mainResolve, mainReject) {
    let allPromises = [];

    // Perform 1 request every QUERY_INTERVAL_MS milliseconds
    let intervalKey = setInterval(function () {
      // Clone the package and resolve anew
      let newPackage = packages[packageIndex].clone();

      // Enqueue a promise for this package's details
      allPromises.push(new Promise(function (resolve) {
        // Query the NPM registry for this package
        npm.packages.details(newPackage.name, function (error, data) {
          if (Logger.testLevel(Logger.level.normal)) {
            progressBar.tick();
          }

          if (error) {
            // Oh noes, the npm registry had problems :(
            newPackage.hasError = true;
            newPackage.error = error;
          } else {
            // Map / parse package details into something useful
            newPackage.details = parsePackageDetails(data[0], newPackage.version);
            newPackage.hasError = false;
          }

          // Resolve promise with the current package
          resolve(newPackage);
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

  // Get raw details from object, things that are relatively certain
  let packageDetails = {
    publishDate: details.time[version] ? new Date(details.time[version]) : undefined,
    publishAuthor: (() => {
      let releaseInfo = details.releases[version];
      if (_.isObject(releaseInfo)) {
        return `${releaseInfo.name} (${releaseInfo.email})`
      } else {
        return '(Unknown)'
      }
    })(),
    version: version,
    // @TODO do something with dependencies
    // dependencies: _.reduce(details.versions[version].dependencies, function (current, value, key) {
    //   current.push({ version: value, name: key });
    //   return current;
    // }, []),
    // devDependencies: _.reduce(details.versions[version].devDependencies, function (current, value, key) {
    //   current.push({ version: value, name: key });
    //   return current;
    // }, [])
  };

  // Attempt to pull version specific information
  let versionData = details.versions[version];

  if (versionData) {
    // There is version data for this version

    // Mark information as not missing version data
    packageDetails.isVersionDataMissing = false;

    packageDetails.name = versionData.name;
    packageDetails.repositoryURL = (() => {
      if (versionData.repository) {
        return versionData.repository.url;
      } else if (details.repository) {
        return details.repository.url;
      } else {
        return null;
      }
    })();
    packageDetails.homepage = versionData.homepage;
    packageDetails.license = versionData.license;
  } else {
    // There is no version specific data for this version
    //  Attempt to pull out some rough defaults from latest details

    // Mark information as missing version data
    packageDetails.isVersionDataMissing = true;

    packageDetails.name = details.name;
    packageDetails.repositoryURL = (() => {
      if (details.repository) {
        return details.repository.url;
      } else {
        return null;
      }
    })();
    // @TODO is everything .homepage.url ?
    packageDetails.homepage = details.homepage.url;
    packageDetails.license = details.license;
  }

  return packageDetails;
}

module.exports = populatePackageDetails;