const { argv } = require('yargs');
const deepInstallDetails = require('./src/deep-install-details');
const Logger = require('./src/lib/Logger');
const Timer = require('./src/lib/Timer');
// @TODO Lodash instead of underscore
const _ = require('underscore');

// Configure logger verbosity
Logger.setLogLevel(Logger.level.debug);

// Start timer for deep install details
Timer.start('DeepInstallDetails');
deepInstallDetails(argv._)
  .then((allPackages) => {
    printSummary(allPackages);
    console.log("Successfully finished processing.");
  });

function printSummary(allPackages) {
  let elapsedTimeMs = Timer.stop('DeepInstallDetails');
  let elapsedTimeSeconds = elapsedTimeMs / 1000;
  Logger.log(`Total processing time: ${elapsedTimeSeconds.toFixed(2)}s`);

  let successfullyInstalledPackages = allPackages.filter((pkg) => !pkg.hasError);
  let erroredPackages = allPackages.filter((pkg) => pkg.hasError);


  let publishAuthorCounts = _.chain(successfullyInstalledPackages)
    .filter((x) => !!x.details.publishAuthor)
    .countBy((x) => x.details.publishAuthor)
    .pairs()
    .map((pairArray) => ({ name: pairArray[0], count: pairArray[1] }))
    .sortBy('count')
    .value()
    .reverse();

  let failureToInstallCounts = _.chain(erroredPackages)
    .countBy((x) => x.error)
    .pairs()
    .map((pairArray) => ({ error: pairArray[0], count: pairArray[1] }))
    .sortBy('count')
    .value()
    .reverse();

  let failureToInstallReasons = _.chain(erroredPackages)
    .map((pkg) => _.pick(pkg, 'name', 'error'))
    .value();

  let installedAlphaPackages = _.chain(successfullyInstalledPackages)
    .filter((pkg) => pkg.details.version.startsWith('0.0.'))
    .value();

  let installedBetaPackages = _.chain(successfullyInstalledPackages)
    .filter((pkg) => pkg.details.version.startsWith('0.') && !pkg.details.version.startsWith('0.0.'))
    .value();

  console.log();
  console.log(`Summary of installing ${argv._.length} package${argv._.length > 1 ? 's' : ''}: ${argv._.join(', ')}`);
  const INDENT = '   -';
  const LIST_INDENT = '         ';
  console.log(`${INDENT} Number of packages requested: ${argv._.length}`);
  console.log();
  console.log(`${INDENT} Number of packages installed (total): ${allPackages.length}`);
  console.log();
  console.log(`${INDENT} Number of packages installed successfully: ${successfullyInstalledPackages.length}`);
  console.log();
  console.log(`${INDENT} Number of packages with version < 0.1.0: ${installedAlphaPackages.length}`);
  if (installedAlphaPackages.length > 0) {
    console.log(`${installedAlphaPackages.map((pkg) => LIST_INDENT + pkg.packageSpecifier).join('\n')}`);
  }
  console.log();
  console.log(`${INDENT} Number of packages with version < 1.0.0: ${installedBetaPackages.length}`);
  if (installedBetaPackages.length > 0) {
    console.log(`${installedBetaPackages.map((pkg) => LIST_INDENT + pkg.packageSpecifier).join('\n')}`);
  }
  console.log();
  console.log(`${INDENT} Number of packages that failed to install: ${erroredPackages.length}`);
  console.log();
  if (erroredPackages.length > 0) {
    console.log(`${INDENT} Reasons why packages failed to install:`);
    console.log(`${failureToInstallReasons.map((pkg) => LIST_INDENT + pkg.name + ': ' + pkg.error).join('\n')}`);
    console.log();
    console.log(`${INDENT} Count of reasons why packages failed to install:`);
    console.log(`${failureToInstallCounts.map((reason) => LIST_INDENT + reason.error + ': ' + reason.count).join('\n')}`);
    console.log();
  }
  console.log(`${INDENT} Number of unique publish authors: ${publishAuthorCounts.length}`);
  console.log();
  console.log(`${INDENT} Count of authors by number of packages published(relative to this install):`);
  console.log(`${publishAuthorCounts.map((author) => LIST_INDENT + author.name + ': ' + author.count).join('\n')}`);
  console.log();
}