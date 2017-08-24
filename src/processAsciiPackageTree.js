const PackageNode = require('./lib/PackageNode');

// Parse the ASCII-represented tree structure outputted by npm
function processAsciiPackageTree(asciiTree) {
  // Split tree string into lines
  let asciiList = asciiTree.trim().split(/[\r\n]+/g);

  // This regex will be used to match garbage at the start of each line
  let indentRegExp = new RegExp(/^\W* ?/g);
  // Manifest of all packages processed so far
  let allPackages = [];
  // Virtual node to group root-level siblings
  let rootNode = new PackageNode(null, -1)
  // Stack to keep current context
  let nodeStack = [];
  // `lastNode` is the root node to begin with
  //  it will always be less indented than any real node
  let lastNode = rootNode;

  // Process each node line string once
  asciiList.splice(1).forEach((line) => {
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

module.exports = processAsciiPackageTree;