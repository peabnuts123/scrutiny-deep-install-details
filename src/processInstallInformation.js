const Package = require('./lib/Package');

function processInstallInformation(installInformation) {
  return installInformation.added.map((addedPackage) => {
    let pkg = new Package(addedPackage.name, addedPackage.version);
    pkg.path = addedPackage.path;
    return pkg;
  });
}

module.exports = processInstallInformation;