const { execSync } = require('child_process');

/* 
  Purpose:
    Execute and log a shell command

  Parameters:
    shellCommand      - Command to be run on shell

  Returns:
    Nothing.
*/
module.exports = function execCommand(shellCommand) {
  console.log(`Running shell command '${shellCommand}'`);
  try {
    let stdout = execSync(shellCommand);
    console.log(stdout.toString());
  } catch (err) {
    console.error(err.stdout.toString());
    throw err;
  }
}