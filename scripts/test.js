const execCommand = require('./util/execCommand');

// Run mocha
try {
  execCommand(`mocha -r ts-node/register -r tsconfig-paths/register "test/**/*.test.ts"`);
} catch (err) {
  process.exit(1);
}