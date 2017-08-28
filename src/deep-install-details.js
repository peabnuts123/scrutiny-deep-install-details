const packageArg = require('npm-package-arg');
const getPackagesInstalled = require('./getPackagesInstalled');
const getPackageDetails = require('./populatePackageDetails');

function deepInstallDetails(userPackageSpecifiers) {
  // Map user-input into safe, parsed objects
  let packageSpecifiers = userPackageSpecifiers.map(packageArg);

  // NOTE: if any of the supplied arguments are invalid, an error will have been thrown
  //  by this point. So now we are sure that every arguments is sane, safe, and mapped.

  return getPackagesInstalled(packageSpecifiers)
    .then((allPackageInfo) => {
      return getPackageDetails(allPackageInfo);
    });
} 

module.exports = deepInstallDetails;