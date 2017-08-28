const Package = require('./lib/Package');

function processInstallInformation(installInformation) {
  return installInformation.added.map((addedPackage) => {
    return new Package(addedPackage.name, addedPackage.version);
  });
}

module.exports = processInstallInformation;