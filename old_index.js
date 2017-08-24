var argv = require('yargs').argv;
var getPackageInformation = require('./src/getPackageInformation');


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

  console.log(`
Last Published: ${pkgInfo.publishDate} by ${pkgInfo.publishAuthor}
Latest Version: ${pkgInfo.version}
Repository URL: ${pkgInfo.repositoryURL}
Homepage: ${pkgInfo.homepage}
License: ${pkgInfo.license}
# (DIRECT)
Dependencies: ${pkgInfo.dependencies.length}
DevDependencies: ${pkgInfo.devDependencies.length}
Dependents: ${pkgInfo.dependents.length}
# (INDIRECT, TOTAL)
Dependencies: ${pkgInfo.dependencyInformation.regular.length}
Dependencies (including dev): ${pkgInfo.dependencyInformation.dev.length}
`.trim() + '\n');
}
function DEBUG(s) {
  console.log("DEBUG: " + s);
}