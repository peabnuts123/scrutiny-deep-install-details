const execAsync = require('./lib/execAsync');
const processInstallInformation = require('./processInstallInformation');
const setupNewPackage = require('./setupNewPackage');
const Logger = require('./lib/Logger');
const Timer = require('./lib/Timer');

function getPackagesInstalled(packageSpecifications) {
  // Validate
  if (!Array.isArray(packageSpecifications)) {
    throw new Error("`packageSpecifications` must be an array of Package Specifications");
  }

  // Map to a guaranteed well-formed package specification
  let packageDefinitions = packageSpecifications
    .map((packageArg) => {
      if (packageArg.type === 'git') {
        return `${packageArg.rawSpec}`;
      } else {
        return `${packageArg.name}@${packageArg.fetchSpec}`;
      }
    })

  Logger.log("Determining installed packages for `" + packageDefinitions.join(', ') + "`… ");

  // Execute `npm install` 
  //  --dry-run specifies that packages are NOT actually installed
  //  --json makes `install` output the changes in a json parseable format
  let shellCommand = `npm install --dry-run --json ${packageDefinitions.join(' ')}`;

  // @TODO support configurable project environments e.g. "If installed into _THIS_ project"
  // @TODO make this async dammit!!
  // Set up new package folder first
  return setupNewPackage()
    //@TODO should validate these versions
    .then(() => {
      return execAsync(`node -v`).then((nodeVersionString) => Logger.log(`Node Version: ${nodeVersionString.trim()}`, Logger.level.debug));
    })
    //@TODO should validate these versions
    .then(() => {
      return execAsync(`npm -v`).then((npmVersionString) => Logger.log(`NPM Version: ${npmVersionString.trim()}`, Logger.level.debug));
    })
    .then(() => {
      Logger.log(`Executing shell command: '${shellCommand}'`, Logger.level.debug);
      Timer.start('PackageInstall');
      return execAsync(shellCommand);
    })
    .then((json) => {
      let elapsedTimeMs = Timer.stop('PackageInstall');
      let elapsesTimeSeconds = elapsedTimeMs / 1000;
      Logger.log(`Finished determining installed packages (${elapsesTimeSeconds.toFixed(2)}s)`);

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