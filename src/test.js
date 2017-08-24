const argv = require('yargs').argv;
const getAllPackageInformation = require('./getAllPackageInformation');

getAllPackageInformation(argv._).then(function(packageInfo) {
  let a = 2;
});
