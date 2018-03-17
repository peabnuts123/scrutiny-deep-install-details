const spawnProcess = require('./util/spawnProcess');
const execCommand = require('./util/execCommand');
const buildConstants = require('./util/buildConstants');


// Clean previous build before building
execCommand('npm run build--clean');

// Ensure `tsBuildFolder` exists for babel to monitor
execCommand(`mkdir -p ${buildConstants.tsBuildFolder}`);

// Spawn processes
const typescriptProcess = spawnProcess(`tsc --project . --watch`);
const babelProcess = spawnProcess(`babel ${buildConstants.tsBuildFolder} --out-dir ${buildConstants.babelBuildFolder} --watch`, { listen: false });

// Subscribe to SIGINT for this process
process.on('SIGINT', function () {
  // Kill processes
  typescriptProcess.kill('SIGINT');
  babelProcess.kill('SIGINT');

  // Clean up typescript build folder
  execCommand(`rm -rf ${buildConstants.tsBuildFolder}`);

  // Exit
  process.exit();
});
