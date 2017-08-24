const argv = require('yargs').argv;
const packageArgs = require('npm-package-arg');
const child_process = require('child_process');
const PackageNode = require('./lib/PackageNode');

const {
  exec,
} = child_process;

let packageDefinitions = argv._
  .map((arg) => {
    try {
      return packageArgs(arg);
    } catch (e) {
      console.error(e.message);
      console.error("ERROR: Package definition `" + arg + "` will be excluded.");
      console.error('');
      return null;
    }
  })
  .filter((packageArg) => {
    return packageArg !== null;
  })
  .map((packageArg) => {
    return `${packageArg.name}@${packageArg.fetchSpec}`;
  })
  .join(' ');

let shellCommand = `npm install --dry-run ${packageDefinitions}`;
console.log(`Executing command: \`${shellCommand}\``);

exec(shellCommand, (error, asciiTree) => {
  if (error) {
    throw new Error(error);
  }

  let packageInformation = processAsciiTree(asciiTree);

  summarisePackageTree(packageInformation.packageTree);
  console.log("Total dependencies: " + packageInformation.allPackages.length);
});

function summarisePackageTree(packageTree) {
  if (packageTree.length === 0) {
    console.log(" - Package tree is empty - ");
    return;
  }

  let nodeStack = [];
  nodeStack.push(...packageTree.reverse());

  while (nodeStack.length > 0) {
    let currentNode = nodeStack.pop();

    let indentString = '';
    for (let i = 1; i < currentNode.indentLevel; i++) {
      indentString += '  ';
    }
    indentString += '- ';
    let outputString = indentString += currentNode.packageSpecifier;
    if (currentNode.children.length > 0) {
      outputString += ":";
    }

    console.log(outputString);

    nodeStack.push(...currentNode.children.reverse());
  }
  console.log("---");
}


function processAsciiTree(asciiTree) {
  let asciiList = asciiTree.trim().split(/[\r\n]+/g);


  let indentRegExp = new RegExp(/^\W* ?/g);
  let allPackages = [];
  let rootNode = new PackageNode(null, -1)
  let nodeStack = [];
  // `lastNode` is the root node to begin with
  //  it will always be less indented than any real node
  let lastNode = rootNode;

  asciiList.splice(1).forEach((line) => {
    // Process each node line string once

    // Ignore peer dependencies 
    if (line.includes('UNMET PEER DEPENDENCY')) {
      return;
    }

    // Calculate `indentLevel` by counting amount of garbage before the package name
    let indentLevel = (line.match(indentRegExp)[0].length / 2) - 1;
    // Parse the package specifier removing the garbage from the start
    let packageSpecifier = line.replace(indentRegExp, '').trim();

    // Create node representing this package
    let node = new PackageNode(packageSpecifier, indentLevel);
    allPackages.push(node);

    if (node.indentLevel > lastNode.indentLevel) {
      // This node is more indented than the previous one
      push(lastNode);
    } else if (node.indentLevel < lastNode.indentLevel) {
      // This node is less indented than the previous one,
      //  we need to pop back to the correct level
      do {
        pop();
      } while (peek().indentLevel > (node.indentLevel - 1));
    }

    // Add the current node as a child to the top of the stack
    peek().addChild(node);

    // Record this node as the "last processed node"
    lastNode = node;
  });

  function push(element) {
    nodeStack.push(element);
  }

  function pop() {
    return nodeStack.pop();
  }

  function peek() {
    return nodeStack[nodeStack.length - 1];
  }

  return {
    // children of the rootNode are the real "roots"
    packageTree: rootNode.children,
    allPackages,
  };
}