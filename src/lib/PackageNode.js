module.exports = class PackageNode {
  constructor(packageSpecifier, indentLevel) {
    this.packageSpecifier = packageSpecifier;
    this.indentLevel = indentLevel;
    this.children = [];
  }

  addChild(node) {
    this.children.push(node);
    node.parent = this;
  }
}