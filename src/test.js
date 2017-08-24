const argv = require('yargs').argv;
const getPackagesInstalled = require('./getPackagesInstalled');

getPackagesInstalled(argv._).then(function(packageInfo) {
  let a = 2;
});
