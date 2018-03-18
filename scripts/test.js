const execCommand = require('./util/execCommand');
const buildConstants = require('./util/buildConstants');

// Build project
execCommand('npm run build');

// Run mocha
try {
  execCommand(`mocha "${buildConstants.babelBuildFolder}/test/**/*.test.js"`);
} catch (err) {
  process.exit(1);
}