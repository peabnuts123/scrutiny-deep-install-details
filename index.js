const argv = require('yargs').argv;
const getPackagesInstalled = require('./src/getPackagesInstalled');
const populatePackageDetails = require('./src/populatePackageDetails');


getPackagesInstalled(argv._)
  .then(function (packageInfo) {
    return populatePackageDetails(packageInfo.allPackages)
      .then(function () {
        // Finished populating all data!
        console.log(JSON.stringify(packageInfo, null, 2));
      });
  });