const execCommand = require('./util/execCommand');

const foldersToClean = [
  'dist/',
  '_build/',
  'processing-package',
];

// @TODO use `rimraf` instead of native unix command `rm` (won't run on windows)
execCommand(`rm -rf ${foldersToClean.join(' ')}`);