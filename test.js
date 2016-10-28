var getDeepDependenciesForPackage = require('./getDeepDependenciesForPackage.js');

getDeepDependenciesForPackage({
    name: 'es6-symbol',
    version: '~3.1'
}).then(function(dependencyInfo) {
    console.log("GOT DEPENDENCY INFO!");
    console.log(JSON.stringify(dependencyInfo, null, '  '));

    console.log("FINISHED PROCESSING");
}).catch(function(error) {
    console.error(error);
    console.error("MAIN PROMISE HAD A BAD TIME");
});