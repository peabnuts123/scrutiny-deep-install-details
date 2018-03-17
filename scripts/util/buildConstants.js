const getJson = require('./getJson');

// Build folder constants
const tsconfig = getJson(__dirname + '/../../tsconfig.json');

module.exports = {
  tsBuildFolder: tsconfig.compilerOptions.outDir,        // Folder tsconfig is set to build into
  babelBuildFolder: './dist',                               // Folder for babel to output into
};