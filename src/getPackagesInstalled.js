const packageArg = require('npm-package-arg');
const exec = require('child_process').exec;
const processAsciiPackageTree = require('./processAsciiPackageTree');


function getPackagesInstalled(packageSpecifications) {
  // Validate
  if (!Array.isArray(packageSpecifications)) {
    throw new Error("`packageSpecifications` must be an array of Package Specifications");
  }

  // Parse / Verify package specification strings
  let packageDefinitions = packageSpecifications
    .map((arg) => {
      // Map each one to a set of package args
      try {
        return packageArg(arg);
      } catch (e) {
        // Invalid package specification strings will end up here / be mapped to null
        console.error(e.message);
        console.error("ERROR: Package definition `" + arg + "` will be excluded.");
        console.error('');
        return null;
      }
    })
    .filter((packageArg) => {
      // Remove invalid specifications
      return packageArg !== null;
    })
    .map((packageArg) => {
      // Map to a guaranteed well-formed package specification
      return `${packageArg.name}@${packageArg.fetchSpec}`;
    })
    // Join into a space-separated string
    .join(' ');

  // Execute `npm install` with `--dry-run` specified so that 
  //  packages are NOT actually installed
  let shellCommand = `npm install --dry-run ${packageDefinitions}`;

  // This is obviously an async operation
  return new Promise(function (resolve, reject) {
    exec(shellCommand, (error, asciiTree) => {
      // TODO better error handling
      if (error) {
        reject(error);
      }

      // Parse the ASCII result into usable data
      let packageInformation = processAsciiPackageTree(asciiTree);
      resolve(packageInformation);
    });
  });
}

// TODO remove me when comfortable
// function summarisePackageTree(packageTree) {
//   if (packageTree.length === 0) {
//     console.log(" - Package tree is empty - ");
//     return;
//   }

//   let nodeStack = [];
//   nodeStack.push(...packageTree.reverse());

//   while (nodeStack.length > 0) {
//     let currentNode = nodeStack.pop();

//     let indentString = '';
//     for (let i = 1; i < currentNode.indentLevel; i++) {
//       indentString += '  ';
//     }
//     indentString += '- ';
//     let outputString = indentString += currentNode.packageSpecifier;
//     if (currentNode.children.length > 0) {
//       outputString += ":";
//     }

//     console.log(outputString);

//     nodeStack.push(...currentNode.children.reverse());
//   }
//   console.log("---");
// }

module.exports = getPackagesInstalled;