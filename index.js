var argv = require('yargs').argv;
var getPackageInformation = require('./getPackageInformation');


var packageNames = argv._;
var completedModules = 0;

console.log(`Fetching details for ${packageNames.length} packages...`);

packageNames.forEach(function (packageName) {
    var packagePromise = getPackageInformation(packageName);

    packagePromise.then(function onResolve(detailsObject) {
        summarisePackage(detailsObject);
    }, function onReject(error) {
        summarisePackage({ name: packageName }, error);
    }).catch(function (error) {
        console.error(error.stack);
    });
});

function displayHeader(options, isError) {
    console.log("========================= " + options.name + " =========================");
    console.log("(" + (++completedModules) + "/" + packageNames.length + ") " + (isError ? "FAILURE" : "SUCCESS"));
}

function summarisePackage(pkgInfo, error) {
    if (error) {
        displayHeader(pkgInfo, true);
        console.error(error);
        return;
    } else {
        displayHeader(pkgInfo, false);
    }

    with (pkgInfo) {
        console.log(`
Last Published: ${publishDate} by ${publishAuthor}
Latest Version: ${latestVersion}
Repository URL: ${repositoryURL}
Homepage: ${homepage}
License: ${license}
# (DIRECT)
Dependencies: ${dependencies.length}
DevDependencies: ${devDependencies.length}
Dependents: ${dependents.length}
# (INDIRECT, TOTAL)
Dependencies: ${dependencyInformation.all.length}
`.trim() + '\n');
    }
}
function DEBUG(s) {
    console.log("DEBUG: " + s);
}