const { spawn } = require('child_process');

/* 
  Purpose: 
    Spawn a child process and optionally listen to its output.

  Parameters:
    fullCommand     - A full shell command e.g. "grep hello"
    options           - Options object (see `defaultOptions` for information)

  Returns:
    ChildProcess object (see https://nodejs.org/api/child_process.html#child_process_class_childprocess)
 */
const defaultOptions = {
  listen: true,   // Whether the output from the child process should be logged to console
};

function spawnProcess(fullCommand, options = defaultOptions) {
  // Split up args by space
  let [shellCommand, ...args] = fullCommand.split(/\s/);

  // Create process
  let childProcess = spawn(shellCommand, args);

  // Subscribe to stdout, stderr if listen = true
  if (options.listen) {
    childProcess.stdout.pipe(process.stdout);
    childProcess.stderr.pipe(process.stderr);
  }

  return childProcess;
}

module.exports = spawnProcess;