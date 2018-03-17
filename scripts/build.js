const execCommand = require('./util/execCommand');
const buildConstants = require('./util/buildConstants');


// Clean previous build before building
execCommand(`npm run build--clean`);

// Compile typescript
execCommand(`tsc --project .`);

// Run babel
execCommand(`babel ${buildConstants.tsBuildFolder} --out-dir ${buildConstants.babelBuildFolder}`);

// Clean up typescript build folder
execCommand(`rm -rf ${buildConstants.tsBuildFolder}`);