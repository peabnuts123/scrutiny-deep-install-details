const _ = require('underscore');
const getPackagePropertiesRecursively = require('./getPackagePropertiesRecursively.js');
const Registry = require('npm-registry');
const packageArgs = require('npm-package-arg');

const npm = new Registry({
  registry: 'https://registry.npmjs.org'
});

module.exports = function getPackageInformation(packageSpecifier) {
  let packageInfo = packageArgs(packageSpecifier);

  let packageName = packageInfo.name;
  let packageType = packageInfo.type;
  let packageVersion = packageInfo.fetchSpec;
  let packageSpec = `${packageName}@${packageVersion}`;

  //Kick off a bunch of requests to the npm registry API 

  //Get Dependents of a Package
  var dependentsPromise = new Promise(function (resolve, reject) {
    npm.packages.depended(packageSpec, function (err, dependents) {
      if (err) {
        reject(err);
      } else {
        resolve(dependents);
      }
    });
  });

  //Get Details of Package (name, author, dependencies etc)
  var newDetailsPromise = new Promise(function (resolve, reject) {
    if (packageType === 'range') {
      npm.packages.range(packageName, packageVersion, function (error, data) {
        if (error) { return reject(error); }

        resolve(parsePackageDetails(data));
      });
    } else if (packageType === 'version') {
      npm.packages.details(packageName, function (error, data) {
        if (error) { return reject(error); }

        resolve(parsePackageDetails(data[0], packageVersion));
      });
    } else if (packageType === 'tag') {
      npm.packages.details(packageName, function (error, data) {
        if (error) { return reject(error); }

        resolve(parsePackageDetails(data[0]));
      });
    }
  });

  function parsePackageDetails(details, version) {
    // Default to details.version, if none specified
    version = version || details.version;

    return {
      name: details.versions[version].name,
      publishDate: details.time[version] ? new Date(details.time[version]) : undefined,
      publishAuthor: details.releases[version] ? details.releases[version].name : details.author,
      version: version,
      repositoryURL: details.repository.url,
      homepage: details.versions[version].url,
      license: details.license,
      dependencies: _.reduce(details.versions[version].dependencies, function (current, value, key) {
        current.push({ version: value, name: key });
        return current;
      }, []),
      devDependencies: _.reduce(details.versions[version].devDependencies, function (current, value, key) {
        current.push({ version: value, name: key });
        return current;
      }, [])
    };
  }

  var deepDependencyInfoPromise = getPackagePropertiesRecursively({
    name: packageName
  }, {
      includeDevDependencies: true
    });

  var everythingPromise = Promise.all([
    dependentsPromise,
    newDetailsPromise,
    deepDependencyInfoPromise
  ]);

  return new Promise(function (resolve, reject) {
    everythingPromise.then(function onResolve(resolveObjects) {
      var dependents = resolveObjects[0];
      var detailsObject = resolveObjects[1];
      var deepDependencyInfo = resolveObjects[2];

      detailsObject.dependents = dependents;


      _.extend(detailsObject, {
        dependencyInformation: {
          tree: deepDependencyInfo.dependencyTree,
          truncated: deepDependencyInfo.truncated,
          regular: _.filter(deepDependencyInfo.allDependencies, (dep) => !dep.isDev),
          dev: deepDependencyInfo.allDependencies,
        }
      });

      resolve(detailsObject);
    }).catch(reject);
  });
};