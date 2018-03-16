import { argv } from 'yargs';
import deepInstallDetails from 'src/index';
import Logger, { LogLevel } from 'src/lib/Logger';
import Timer from 'src/lib/Timer';
import _ from 'lodash';
import Package from 'src/lib/Package';

// Configure logger verbosity
Logger.setLogLevel(LogLevel.debug);

// Start timer for deep install details
Timer.start('DeepInstallDetails');

// Faux async block
(async () => {
  let allPackages: Package[] = await deepInstallDetails(argv._);

  printSummary(allPackages);
  console.log("Successfully finished processing.");
})();

function printSummary(allPackages: Package[]) {
  let elapsedTimeSeconds: number = Timer.stop('DeepInstallDetails');
  Logger.log(`Total processing time: ${elapsedTimeSeconds.toFixed(2)}s`);

  let successfullyInstalledPackages: Package[] = allPackages.filter((pkg: Package) => !pkg.hasError);
  let erroredPackages: Package[] = allPackages.filter((pkg: Package) => pkg.hasError);

  let publishAuthorCounts = _.chain(successfullyInstalledPackages)
    // Get packages that have a publishAuthor (presumably everything, but…)
    .filter((pkg: Package) => pkg.details.publishAuthor)
    // Map them into `publishAuthor: count` keyValue pairs
    .countBy((pkg: Package) => pkg.details.publishAuthor)
    .toPairs()
    .map(([name, count]: [string, number]) => ({ name, count }))
    // Sort by count:desc, then by name:asc
    .orderBy(['count', 'name'], ['desc', 'asc'])
    .value()

  let failureToInstallCounts = _.chain(erroredPackages)
    // Map them into `error: count` keyValue pairs
    .countBy((pkg: Package) => pkg.error)
    .toPairs()
    .map(([error, count]: [string, number]) => ({ error, count }))
    // Order by
    .orderBy('count', 'desc')
    .value()

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
    console.log(`${installedAlphaPackages.map((pkg) => LIST_INDENT + pkg.PackageSpecifier).join('\n')}`);
  }
  console.log();
  console.log(`${INDENT} Number of packages with version < 1.0.0: ${installedBetaPackages.length}`);
  if (installedBetaPackages.length > 0) {
    console.log(`${installedBetaPackages.map((pkg) => LIST_INDENT + pkg.PackageSpecifier).join('\n')}`);
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