const Package = require('./lib/Package');
const _ = require('lodash');

function processInstallInformation(installInformation) {
  return _.chain(installInformation.added)
    .map((addedPackage) => {
      return new Package(addedPackage.name, addedPackage.version);
    })
    .orderBy(['name', 'version'])
    .sortedUniqBy((pkg) => pkg.packageSpecifier)
    .value();
}

module.exports = processInstallInformation;