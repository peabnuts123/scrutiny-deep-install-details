const packageArg = require('npm-package-arg');
const exec = require('child_process').exec;
const processInstallInformation = require('./processInstallInformation');
const setupNewPackage = require('./setupNewPackage');
const Logger = require('./lib/Logger');

function getPackagesInstalled(packageSpecifications) {
  // Validate
  if (!Array.isArray(packageSpecifications)) {
    throw new Error("`packageSpecifications` must be an array of Package Specifications");
  }

  // Parse / Verify package specification strings
  let packageArgs = packageSpecifications
    .map((arg) => {
      // Map each one to a set of package args
      try {
        return packageArg(arg);
      } catch (e) {
        // Invalid package specification strings will end up here / be mapped to null
        console.error(e.message);
        console.error("ERROR: Package definition `" + arg + "` will be excluded.");
        console.error('');
        return null;
      }
    })
    .filter((packageArg) => {
      // Remove invalid specifications
      return packageArg !== null;
    });

  let packageDefinitionsString = packageArgs
    .map((packageArg) => {
      // Map to a guaranteed well-formed package specification
      return `${packageArg.name}@${packageArg.fetchSpec}`;
    })
    // Join into a space-separated string
    .join(' ');


  Logger.log("Getting installed packages for `" + packageDefinitionsString + "`… ");


  // Execute `npm install` with `--dry-run` specified so that 
  //  packages are NOT actually installed
  //  --json makes `install` output the changes in a json parseable format
  let shellCommand = `npm install --dry-run --json ${packageDefinitionsString}`;

  Logger.log(`Executing shell command: '${shellCommand}'`, Logger.level.debug);

  // Set up new package folder first
  return setupNewPackage()
    .then(() => {
      return new Promise(function (resolve, reject) {
        exec(shellCommand, (error, json) => {
          // TODO better error handling
          if (error) {
            reject(error);
          }

          Logger.log('Processing results…');

          // Parse the ASCII result into usable data
          let installInformation = JSON.parse(json);
          let packageInformation = processInstallInformation(installInformation);

          // Lookup the resolved versions of the packages we actually requested
          //  @ASSUMPTION: Directly depended packages will always be the least-nested copy
          //    of a package with that name
          let requestedPackages = packageArgs.map((packageArgInfo) => {
            let resolvedPackages = packageInformation.filter((x) => x.name === packageArgInfo.name);

            // Find least-nested copy of this package
            let resolvedPackage = null;
            resolvedPackages.forEach((pkg) => {
              if (!resolvedPackage || pkg.path.lastIndexOf('node_modules') < resolvedPackage.path.lastIndexOf('node_modules')) {
                resolvedPackage = pkg;
              }
            });
            if (!resolvedPackage) {
              throw new Error(`Requested package '${packageArgInfo.name}' was not found in the set of resolved packages for some reason!`);
            }

            return resolvedPackage;
          });

          resolve({
            packages: requestedPackages,
            allPackages: packageInformation,
          })
        });
      });
    });
}

module.exports = getPackagesInstalled;