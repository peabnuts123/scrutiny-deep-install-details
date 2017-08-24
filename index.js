const argv = require('yargs').argv;
const getPackagesInstalled = require('./src/getPackagesInstalled');
const populatePackageDetails = require('./src/populatePackageDetails');


getPackagesInstalled(argv._)
  .then(function (packageInfo) {
    return populatePackageDetails(packageInfo.allPackages)
      .then(function () {
        // Finished populating all data!
        let a = packageInfo;
        let b = 2;
      });
  });