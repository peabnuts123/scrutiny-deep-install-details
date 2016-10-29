var _ = require('underscore');
var Registry = require('npm-registry');

String.prototype.dodgeyPad = function (paddingString) {
    return String(this + paddingString.slice(-(paddingString.length) + this.length));
};

var npm = new Registry({
    registry: 'https://registry.npmjs.org'
});

module.exports = function getDeepDependenciesForPackage(package, options) {
    //Default version to latest
    package.version = package.version || 'latest';

    //TODO move persistent data to a third param

    //Persistent data
    options = options || {};

    //Increase or default recursionLevel
    options._currentRecursionLevel = options._currentRecursionLevel || 1;
    options._currentRecursionStack = options._currentRecursionStack || [];

    options._allDependencies = options._allDependencies || [];

    var packageString =  package.name + "@" + package.version;
    var fullyQualifiedIterationString = ("(" + options._currentRecursionLevel + ")[" + packageString + "]").dodgeyPad('                                                                ');

    //TODO verification
    var mainPromise = new Promise(function(mainResolve, mainReject) {
        DEBUG(fullyQualifiedIterationString + "Getting dependencies of package");

        //Result data
        var dependencyTree = [];
        
        //If a maxDepth is specified and we are above it, just resolve immediately
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
        var getPackageDetailsPromise = new Promise(function(resolve, reject) {
            npm.packages.get(package.name + '@' + package.version, function (error, data) {
                DEBUG(fullyQualifiedIterationString + "Got dependencies of package");

                if (error) {
                    DEBUG(fullyQualifiedIterationString + "ERROR: Package Details Promise rejected!");
                    reject(error);
                } else {
                    var packageDetails = {
                        name: data[0].name,
                        version: data[0].version,
                        dependencies: _.reduce(data[0].dependencies, function(current, value, key){
                            current.push({version: value, name: key});
                            return current;
                        }, [])
                    };

                    resolve(packageDetails);
                }
            });
        });

        //Get dependencies of dependencies of package
        getPackageDetailsPromise.then(function(packageDetails) {
            //DEBUG remove
            options._currentRecursionStack.forEach(function(item, index) {
                var delim = " >";
                var output = "";
                for(var i=0; i<index; i++) {
                    output += delim;
                }

                output+= " " + item.name + "@" + item.version;
                console.log(output);
            });
            console.log('');

            ////////////////////////////////////////////////////////////////////////////////
            // CIRCULAR DEPENDENCY CHECK                                                  //
            ////////////////////////////////////////////////////////////////////////////////
            var previousStackRequest = _.find(options._currentRecursionStack, function(previousStackRequest) {
                return previousStackRequest.name === packageDetails.name &&
                    previousStackRequest.version === packageDetails.version;
            });

            if (!_.isUndefined(previousStackRequest)) {
                //Circular Dependency detected!
                DEBUG(fullyQualifiedIterationString + "WARNING: Circular dependency detected: " + packageDetails.name + "@" + packageDetails.version);
                DEBUG(fullyQualifiedIterationString + "\tTruncating dependency tree");
                console.log(JSON.stringify(options._currentRecursionStack, null, '  '));    

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

            //create promises for the dependencies of these dependencies
            var subDependencyPromises = [];
            var currentSubDependencyPromise;

            //IF THE CURRENT PACKAGE HAS NO DEPENDENCIES, THEN THIS WILL DO NOTHING!
            packageDetails.dependencies.forEach(function(dependency) {
                DEBUG(fullyQualifiedIterationString + "Getting deep dependency information of '" + dependency.name + "@" + dependency.version + "'");
                
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
                currentSubDependencyPromise = getDeepDependenciesForPackage(dependency, subOptions);

                subDependencyPromises.push(currentSubDependencyPromise);
            });

            //subDependencies contains the list of all the resolve()'d objects (the dependency objects)
            Promise.all(subDependencyPromises).then(function(subDependencies) {
                //If this package has no dependencies, then subDependencies will be an empty array
                DEBUG(fullyQualifiedIterationString + "All dependencies have resolved: " + subDependencies.length + " dependencies");

                //Combine all the subDependency `allDependencies` arrays (aggregate total)
                subDependencies.forEach(function(subDependency) {
                    var subDependencyChoice = subDependency;

                    //Add the subdependency to the list of all dependencies (only if it is naturally resolved)
                    if (!subDependencyChoice.circular) {
                        var existingEntry = _.find(options._allDependencies, function(existingEntry) {
                            return existingEntry.name === subDependencyChoice.name &&
                                existingEntry.version === subDependencyChoice.version;
                        });

                        if (!existingEntry) {
                            DEBUG(fullyQualifiedIterationString + "Adding '" + subDependencyChoice.name + "@" + subDependencyChoice.version + "' to all dependencies");
                            //TODO debug remove
                            var debugCopy = _.clone(subDependencyChoice);
                            delete debugCopy.dependencyTree;
                            options._allDependencies.push(debugCopy);
                        }

                    }

                    dependencyTree.push(subDependencyChoice);
                });

                DEBUG(fullyQualifiedIterationString + "Resolving package");

                var resolveObject = {
                    name: packageDetails.name,
                    version: packageDetails.version,
                    dependencyTree: dependencyTree,
                    truncated: false
                };
                
                if (options._currentRecursionLevel === 1) {
                    //This is the final return, include allDependencies
                    resolveObject.allDependencies = options._allDependencies;
                }

                mainResolve(resolveObject);
            }).catch(function(error) {
                console.error("ALL PROMISE HAD A BAD TIME");
                console.error(error.stack);
                mainReject(error);
                return;
            });
        }).catch(function(error) {
            console.error("GET DETAILS HAD A BAD TIME");
            console.error(error.stack);
            mainReject(error);
            return;
        });
    });

    return mainPromise;
};


function DEBUG(s) {
    console.log("DEBUG: " + s);
}