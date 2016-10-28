var _ = require('underscore');
var Registry = require('npm-registry');

String.prototype.dodgeyPad = function (paddingString) {
    return String(this + paddingString.slice(-(paddingString.length) + this.length))
};

var npm = new Registry({
    registry: 'https://registry.npmjs.org'
});

//TODO make this version-sensitive :(
module.exports = function getDeepDependenciesForPackage(package, options) {
    //Default version to latest
    package.version = package.version || 'latest';

    //TODO move persistent data to a third param

    //Persistent data
    options = options || {};
    //Request cache for not duplication requests
    options._requestCache = options._requestCache || [];

    //Increase or default recursionLevel
    options._currentRecursionLevel = options._currentRecursionLevel || 1;
    options._currentRecursionStack = options._currentRecursionStack || [];
    options._currentRecursionStack = _.clone(options._currentRecursionStack).concat([{
        name: package.name,
        version: package.version
    }]);

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
                    //TODO verify this goes somewhere
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
            //packageDetails.dependencies is an array of name,version key:value pairs of the dependencies for this package
            var subDependencyPromises = [];
            //create promises for the dependencies of these dependencies
            var currentSubDependencyPromise;

            //IF THE CURRENT PACKAGE HAS NO DEPENDENCIES, THEN THIS WILL DO NOTHING!
            packageDetails.dependencies.forEach(function(dependency) {
                DEBUG(fullyQualifiedIterationString + "Getting deep dependency information of '" + dependency.name + "@" + dependency.version + "'");
                //Detect Circular dependency
                
                options._currentRecursionStack.forEach(function(item, index) {
                    var delim = " >";
                    var output = "";
                    for(var i=0; i<index; i++) {
                        output += delim;
                    }

                    output+= " " + item.name + "@" + item.version;
                    console.log(output);
                    console.log('');
                })

                var previousStackRequest = _.find(options._currentRecursionStack, function(previousStackRequest) {
                    return previousStackRequest.name === dependency.name &&
                        previousStackRequest.version === dependency.version;
                });


                if (!_.isUndefined(previousStackRequest)) {
                    //Circular Dependency detected!!
                    DEBUG(fullyQualifiedIterationString + "WARNING: Circular dependency detected: " + dependency.name + "@" + dependency.version);
                    DEBUG(fullyQualifiedIterationString + "\tTruncating dependency tree");
                    console.log(JSON.stringify(options._currentRecursionStack, null, '  '));    

                    //Stub a dependency well enough to not crash but highlight that it is a circular stub
                    // subDependencyPromises.push(Promise.resolve({
                    //     name: dependency.name,
                    //     truncated: true,
                    //     circular: true
                    // }));

                    return;
                }

                //look for a cached request
                var cachedRequest = _.find(options._requestCache, function(cachedRequest) {
                        return cachedRequest.name === dependency.name &&
                            cachedRequest.version === dependency.version;
                    });

                //Use cached request if a possibility, do not duplicate identical requests
                if (_.isUndefined(cachedRequest)) {
                    //Override some data to pass into the recursive call
                    var subOptions = _.chain(options)
                        .clone()
                        .extend({
                            _currentRecursionLevel: options._currentRecursionLevel + 1
                        })
                        .value();

                    //!!! NOTE: RECURSIVE CALL !!!
                    currentSubDependencyPromise = getDeepDependenciesForPackage(dependency, subOptions);

                    // currentSubDependencyPromise.then(function(subDependency) {
                    //     //cache this request so it is not made again
                    //     options._requestCache.push({
                    //         name: subDependency.name,
                    //         version: subDependency.version,
                    //         promise: Promise.resolve({
                    //             name: subDependency.name,
                    //             version: subDependency.version,
                    //             truncated: true,
                    //             cached: true
                    //         })
                    //     });
                    // })
                } else {
                    DEBUG(fullyQualifiedIterationString + "Reading package '" + cachedRequest.name +  "@" + cachedRequest.version + "' from cache");
                    currentSubDependencyPromise = cachedRequest.promise;
                }

                subDependencyPromises.push(currentSubDependencyPromise);
            });

            //subDependencies contains the list of all the resolve()'d objects (the dependency objects)
            Promise.all(subDependencyPromises).then(function(subDependencies) {
                //If this package has no dependencies, then subDependencies will be an empty array
                DEBUG(fullyQualifiedIterationString + "All dependencies have resolved: " + subDependencies.length + " dependencies");

                //Combine all the subDependency `allDependencies` arrays (aggregate total)
                subDependencies.forEach(function(subDependency) {
                    if (!subDependency.circular) {
                        var debugCopy = _.clone(subDependency);
                        delete debugCopy.dependencyTree;
                        options._allDependencies.push(debugCopy);
                    }

                    //Add the subDependency's tree to this dependency's tree (this dependency's tree is an array of trees)
                    dependencyTree.push(subDependency);
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