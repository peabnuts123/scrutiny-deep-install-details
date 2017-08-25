const fs = require('fs');
const expect = require('chai').expect;
const setupNewPackage = require('../src/setupNewPackage');
const execAsync = require('../src/lib/execAsync');

describe('setupNewPackage', function () {
  it('[INTEGRATION] [ASYNC] correctly sets up a new package', function () {
    // Setup
    let packageName = `test-package`;
    let removePackageAsync = function () {
      return execAsync(`rm -rf ${packageName}`);
    };

    // Test (ASYNC)
    // Set up package
    return setupNewPackage(packageName)
      .then(() => {
        // Package is set up
        expect(process.cwd().endsWith(packageName)).to.be.true;
        expect(fs.existsSync('./package.json')).to.be.true;

        process.chdir('../');
      })
      // Clean up
      .then(removePackageAsync)
      .then(() => {
        // Assert clean-up succeeded
        expect(fs.existsSync(packageName)).to.be.false;
      })
      .catch(function () {
        console.error("Test FAiled");
        // Something failed, attempt to clean up
        return removePackageAsync().then(() => {
          // Fail test
          return Promise.reject();
        });
      });
  });
});