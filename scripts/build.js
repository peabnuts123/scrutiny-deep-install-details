const execCommand = require('./util/execCommand');
const buildConstants = require('./util/buildConstants');

// Subscribe to SIGINT for this process
process.on('SIGINT', cleanUp);
process.on('exit', cleanUp);

// Clean previous build before building
execCommand(`npm run build--clean`);

// Compile typescript
execCommand(`tsc --project .`);

// Run babel
execCommand(`babel ${buildConstants.tsBuildFolder} --out-dir ${buildConstants.babelBuildFolder}`);


function cleanUp() {
  // Clean up typescript build folder
  execCommand(`rm -rf ${buildConstants.tsBuildFolder}`);

  // Exit
  process.exit();
}