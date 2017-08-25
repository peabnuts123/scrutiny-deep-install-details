const execAsync = require('./lib/execAsync');

function setupNewPackage(packageName = `processing-package`) {
  // Remove existing directory
  return execAsync(`rm -rf ${packageName}`)
    .then(() => {
      // Make directory
      return execAsync(`mkdir ${packageName}`)
    })
    .then(() => {
      // Enter newly-created directory
      process.chdir(packageName);

      // Initialise new package
      return execAsync(`npm init --force`);
    });
}

module.exports = setupNewPackage;