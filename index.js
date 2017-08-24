const argv = require('yargs').argv;
const getPackagesInstalled = require('./src/getPackagesInstalled');
const populatePackageDetails = require('./src/populatePackageDetails');


getPackagesInstalled(argv._)
  .then(function (packageInfo) {
    return populatePackageDetails(packageInfo.allPackages)
      .then(function () {
        // packageInfo.packageTree.forEach((packageNode, index, array) => {
        //   summarisePackage(packageNode, index + 1, array.length);
        // });
        summarisePackage(packageInfo);
      });
  });


function summarisePackage(packageInfo) {
  console.log(`Summary of installing ${packageInfo.packageTree.length} package${packageInfo.packageTree.length > 1 ? 's' : ''}:`);
  packageInfo.packageTree.forEach((packageNode, index, array) => {
    console.log(`
========================= ${packageNode.details.name} (${index + 1}/${array.length}) =========================
Name: ${packageNode.details.name}
Version: ${packageNode.details.version}
Published: ${packageNode.details.publishDate} by ${packageNode.details.publishAuthor}
Repository URL: ${packageNode.details.repositoryURL}
Homepage: ${packageNode.details.homepage}
License: ${packageNode.details.license}
`);
});

  console.log("DEPENDENCY INFORMATION:"); 
  console.log(`
Dependencies (Indirect, total): ${packageInfo.allPackages.length}
`);
}