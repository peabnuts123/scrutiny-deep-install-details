const exec = require('child_process').exec;

function execAsync(shellCommand) {
  return new Promise(function (resolve, reject) {
    exec(shellCommand, (error, stdout) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
}

module.exports = execAsync;