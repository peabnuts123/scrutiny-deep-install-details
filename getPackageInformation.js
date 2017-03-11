var Registry = require('npm-registry');
var _ = require('underscore');
var getDeepDependenciesForPackage = require('./getDeepDependenciesForPackage.js');

var npm = new Registry({
    registry: 'https://registry.npmjs.org'
});

module.exports = function getPackageInformation(packageName) {
    //Kick off a bunch of requests to the npm registry API 

    //Get Dependents of a Package
    var dependentsPromise = new Promise(function (resolve, reject) {
        npm.packages.depended(packageName, function (err, dependents) {
            if (err) {
                reject(err);
            } else {
                resolve(dependents);
            }
        });
    });

    //Get Details of Package (name, author, dependencies etc)
    var newDetailsPromise = new Promise(function (resolve, reject) {
        npm.packages.details(packageName, function (error, data) {
            if (error) {
                reject(error);
            } else {
                var details = data[0];

                //Pluck / parse the details we want from the JSON return by the API
                resolve({
                    name: details.latest.name,
                    publishDate: details.time[details.latest.version] ? new Date(details.time[details.latest.version]) : undefined,
                    publishAuthor: details.releases[details.latest.version].name,
                    latestVersion: details.latest.version,
                    repositoryURL: details.latest.repository.url,
                    homepage: details.latest.homepage,
                    license: details.license,
                    dependencies: _.reduce(details.latest.dependencies, function (current, value, key) {
                        current.push({ version: value, name: key });
                        return current;
                    }, []),
                    devDependencies: _.reduce(details.latest.devDependencies, function (current, value, key) {
                        current.push({ version: value, name: key });
                        return current;
                    }, [])
                });
            }
        });
    });

    var deepDependencyInfoPromise = getDeepDependenciesForPackage({
        name: packageName
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
                    all: deepDependencyInfo.allDependencies
                }
            });

            resolve(detailsObject);
        }).catch(reject);
    });
};