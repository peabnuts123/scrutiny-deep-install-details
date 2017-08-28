const execAsync = require('./lib/execAsync');
const processInstallInformation = require('./processInstallInformation');
const setupNewPackage = require('./setupNewPackage');
const Logger = require('./lib/Logger');

function getPackagesInstalled(packageSpecifications) {
  // Validate
  if (!Array.isArray(packageSpecifications)) {
    throw new Error("`packageSpecifications` must be an array of Package Specifications");
  }

  // Map to a guaranteed well-formed package specification
  let packageDefinitions = packageSpecifications
    .map((packageArg) => {
      return `${packageArg.name}@${packageArg.fetchSpec}`;
    })

  Logger.log("Getting installed packages for `" + packageDefinitions.join(', ') + "`… ");

  // Execute `npm install` 
  //  --dry-run specifies that packages are NOT actually installed
  //  --json makes `install` output the changes in a json parseable format
  let shellCommand = `npm install --dry-run --json ${packageDefinitions.join(' ')}`;

  Logger.log(`Executing shell command: '${shellCommand}'`, Logger.level.debug);

  // TODO support configurable project environments
  // Set up new package folder first
  return setupNewPackage()
    .then(() => {
      return execAsync(shellCommand);
    })
    .then((json) => {
      Logger.log('Processing results…');

      // Parse the ASCII result into usable data
      let installInformation = JSON.parse(json);
      let packageInformation = processInstallInformation(installInformation);

      return packageInformation;
    })
    .catch((error) => {
      // TODO better error handling
      throw error;
    });
}

module.exports = getPackagesInstalled;