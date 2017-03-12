var Registry = require('npm-registry');
var _ = require('underscore');
var getPackagePropertiesRecursiveley = require('./getPackagePropertiesRecursiveley.js');

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

    var deepDependencyInfoPromise = getPackagePropertiesRecursiveley({
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

            var dev = _.filter(deepDependencyInfo.allDependencies, (dep) => dep.isDev)
                .map(x=>x.name+'@'+x.version)
                .sort();
            var regular = _.filter(deepDependencyInfo.allDependencies, (dep) => !dep.isDev)
                .map(x=>x.name+'@'+x.version)
                .sort();

            console.log('Dev: ');
            console.log(dev.join('\n'));

            console.log('\nRegular:');
            console.log(regular.join('\n'));
            console.log();


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