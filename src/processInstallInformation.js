const Package = require('./lib/Package');

function processInstallInformation(installInformation) {
  return installInformation.added.map((addedPackage) => {
    return new Package(addedPackage.name, addedPackage.version);
  })
    .sort((a, b) => {
      return a.packageSpecifier.localeCompare(b.packageSpecifier)
    })
    .filter((pkg, index, array) => {
      if (!array[index + 1]) {
        return true;
      } else {
        return array[index + 1].packageSpecifier !== pkg.packageSpecifier;
      }
    });
}

module.exports = processInstallInformation;