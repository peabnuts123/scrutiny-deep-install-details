var argv = require('yargs').argv;
var _ = require('underscore');

var Registry = require('npm-registry');

var npm = new Registry({
    registry: 'https://registry.npmjs.org'
});


var packageNames = argv._;

var completedModules = 0;


packageNames.forEach(function(packageName) {
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
                    dependencies: _.reduce(details.latest.dependencies, function(current, value, key){
                        current.push({version: value, name: key});
                        return current;
                    }, []),
                    devDependencies: _.reduce(details.latest.devDependencies, function(current, value, key){
                        current.push({version: value, name: key});
                        return current;
                    }, [])
                });
            }
        });
    });

    Promise.all([dependentsPromise, newDetailsPromise]).then(function onResolve(resolveObjects) {
        var dependents = resolveObjects[0];
        var detailsObject = resolveObjects[1];

        detailsObject.dependents = dependents;

        summarisePackage(undefined, detailsObject);
    }, function onReject(error) {
        summarisePackage(error);
    }).catch(function(error) {
        console.error(error.stack);
    });
});

function summarisePackage(error, pkgInfo) {
    var progressString = "(" + (++completedModules) + "/" + packageNames.length + ")";

    console.log("========================= " + pkgInfo.name + " =========================");
    if (error) {
        console.log(progressString + " FAILURE");
        console.error(error);
        return;
    } 

    console.log(progressString + " SUCCESS ");
    with (pkgInfo) {
        console.log(`
Last Published: ${publishDate} by ${publishAuthor}
Latest Version: ${latestVersion}
Repository URL: ${repositoryURL}
Homepage: ${homepage}
License: ${license}
# Dependencies (Direct): ${dependencies.length}
# DevDependencies (Direct): ${devDependencies.length}
# Dependents (Direct): ${dependents.length}
`.trim() + '\n');
    }
}

function DEBUG(s) {
    console.log("DEBUG: " + s);
}