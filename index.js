const { argv } = require('yargs');
const deepInstallDetails = require('./src/deep-install-details');
const Logger = require('./src/lib/Logger');
const _ = require('underscore');

// Configure logger verbosity
Logger.setLogLevel(Logger.level.normal);

deepInstallDetails(argv._)
  .then((allPackages) => {
    printSummary(allPackages);
    console.log("Successfully finished processing.");
  });

function printSummary(allPackages) {
  console.log(`Summary of installing ${argv._.length} package${argv._.length > 1 ? 's' : ''}: ${argv._.join(', ')}`);

  let numUniquePublishAuthors = _.chain(allPackages)
    .countBy((x) => {
      return x.details.publishAuthor}
    )
    .keys()
    .value()
    .length;

  let numAlphaPackages = _.reduce(allPackages, (curr, next) => {
    if (next.details.version.startsWith('0.0.')) {
      return curr + 1;
    } else {
      return curr;
    }
  }, 0);

  let numBetaPackages = _.reduce(allPackages, (curr, next) => {
    if (next.details.version.startsWith('0.') && !next.details.version.startsWith('0.0.')) {
      return curr + 1;
    } else {
      return curr;
    }
  }, 0);

  console.log(`
   - Number of packages requested: ${argv._.length}
   - Number of packages installed: ${allPackages.length}
   - Number of unique publish authors: ${numUniquePublishAuthors}
   - Number of packages with version < 0.1.0: ${numAlphaPackages}
   - Number of packages with version < 1.0.0: ${numBetaPackages}
`);
}