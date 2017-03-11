var getDeepDependenciesForPackage = require('./getDeepDependenciesForPackage.js');
var argv = require('yargs').argv;

getDeepDependenciesForPackage({
    name: argv._[0]
}).then(function(dependencyInfo) {
    console.log("GOT DEPENDENCY INFO!");
    console.log(JSON.stringify(dependencyInfo, null, '  '));

    console.log("FINISHED PROCESSING");
}).catch(function(error) {
    console.error(error);
    console.error("MAIN PROMISE HAD A BAD TIME");
});