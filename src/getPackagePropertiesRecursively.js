var _ = require('underscore');
var Registry = require('npm-registry');

String.prototype.dodgyPad = function (paddingString) {
    return String(this + paddingString.slice(-(paddingString.length) + this.length));
};

var npm = new Registry({
    registry: 'https://registry.npmjs.org'
});

/* SUPPORTED subOptions
    - maxDepth          Limit the recursion to a certain depth, for performance reasons
*/
module.exports = function getPackagePropertiesRecursively(package, options) {
    //Default version to latest
    package.version = package.version || 'latest';

    //TODO move persistent data to a third param

    //Persistent data
    options = options || {};

    //Increase or default recursionLevel
    options._currentRecursionLevel = options._currentRecursionLevel || 1;
    options._currentRecursionStack = options._currentRecursionStack || [];

    options._allDependencies = options._allDependencies || [];

    //TODO verification
    var mainPromise = new Promise(function (mainResolve, mainReject) {
        //Result data
        var dependencyTree = [];

        //If a maxDepth is specified and we are deeper than it, just resolve immediately
        if (options.maxDepth && options._currentRecursionLevel > options.maxDepth) {
            mainResolve({
                name: package.name,
                version: package.version,
                dependencyTree: dependencyTree,
                truncated: true
            });

            return;
        }

        //Await getDependencies for package
        var getPackageDetailsPromise = new Promise(function (resolve, reject) {
            npm.packages.get(package.name + '@' + package.version, function (error, data) {

                if (error) {
                    reject(error);
                } else {
                    var packageDetails = {
                        name: data[0].name,
                        version: data[0].version,
                        dependencies: _.reduce(data[0].dependencies, function (current, value, key) {
                            current.push({
                                name: key,
                                version: value,
                                isDev: package.isDev === true
                            });
                            return current;
                        }, []),
                        devDependencies: _.reduce(data[0].devDependencies, function (current, value, key) {
                            current.push({
                                name: key,
                                version: value,
                                isDev: true
                            });
                            return current;
                        }, [])
                    };

                    resolve(packageDetails);
                }
            });
        });

        //Get dependencies of dependencies of package
        getPackageDetailsPromise.then(function (packageDetails) {
            ////////////////////////////////////////////////////////////////////////////////
            // CIRCULAR DEPENDENCY CHECK                                                  //
            ////////////////////////////////////////////////////////////////////////////////
            var previousStackRequest = _.find(options._currentRecursionStack, function (previousStackRequest) {
                return previousStackRequest.name === packageDetails.name &&
                    previousStackRequest.version === packageDetails.version;
            });

            if (!_.isUndefined(previousStackRequest)) {
                //Circular Dependency detected!
                //Stub a dependency well enough to not crash but highlight that it is a circular stub
                mainResolve({
                    name: packageDetails.name,
                    version: packageDetails.version,
                    truncated: true,
                    circular: true
                });

                return;
            }


            ////////////////////////////////////////////////////////////////////////////////
            // GET SUB-DEPENDENCIES                                                       //
            ////////////////////////////////////////////////////////////////////////////////

            function processSubDependency(dependency) {
                //Override some data to pass into the recursive call
                var subOptions = _.chain(options)
                    .clone()
                    .extend({
                        //TODO should probably derive this from _currentRecursionStack.length
                        _currentRecursionLevel: options._currentRecursionLevel + 1,
                        //Keep a record of where we're at recursively
                        _currentRecursionStack: _.clone(options._currentRecursionStack).concat([{
                            name: packageDetails.name,
                            version: packageDetails.version
                        }])
                    })
                    .value();

                //!!! NOTE: RECURSIVE CALL !!!
                return getPackagePropertiesRecursively(dependency, subOptions);
            }

            // Process general and dev dependencies
            var subDependencyPromise;
            var regularDependenciesPromise = Promise.all(packageDetails.dependencies.map(processSubDependency));

            // include dev dependencies if the option is specified (only for top-level package)
            if (options.includeDevDependencies === true && options._currentRecursionLevel === 1) {
                subDependencyPromise = new Promise(function(resolve) {
                    regularDependenciesPromise.then(function(regularDependencies) {
                        Promise.all(packageDetails.devDependencies.map(processSubDependency)).then(function(devDependencies) {
                            resolve(regularDependencies.concat(devDependencies));
                        })
                    });
                });
            } else {
                subDependencyPromise = regularDependenciesPromise;
            }

            //subDependencies contains the list of all the resolve()'d objects (the dependency objects)
            //If this package has no dependencies, then subDependencies will be an empty array
            subDependencyPromise.then(function (subDependencies) {
                //Combine all the subDependency `allDependencies` arrays (aggregate total)
                subDependencies.forEach(function (subDependency) {
                    //Add the sub-dependency to the list of all dependencies (only if it is naturally resolved)
                    if (!subDependency.circular) {
                        var existingEntry = _.find(options._allDependencies, function (existingEntry) {
                            return existingEntry.name === subDependency.name &&
                                existingEntry.version === subDependency.version;
                        });

                        if (!existingEntry) {
                            var subDependencyCopy = _.clone(subDependency);
                            delete subDependencyCopy.dependencyTree;
                            options._allDependencies.push(subDependencyCopy);
                        }
                    }

                    dependencyTree.push(subDependency);
                });

                var resolveObject = {
                    name: packageDetails.name,
                    version: packageDetails.version,
                    dependencyTree: dependencyTree,
                    truncated: false,
                    isDev: package.isDev
                };

                if (options._currentRecursionLevel === 1) {
                    //This is the final return, include allDependencies
                    resolveObject.allDependencies = options._allDependencies;
                }

                mainResolve(resolveObject);
            }).catch(function (error) {
                // TODO better error handling
                console.error("ALL PROMISE HAD A BAD TIME");
                console.error(error.stack);
                mainReject(error);
                return;
            });
        }).catch(function (error) {
            // TODO better error handling
            console.error("GET DETAILS HAD A BAD TIME");
            console.error(error.stack);
            mainReject(error);
            return;
        });
    });

    return mainPromise;
};