const packageArg = require('npm-package-arg');

module.exports = class PackageNode {
  constructor(packageSpecifier, indentLevel) {
    // Establish package name, version, full specifier
    //  Note that it can be null
    if (packageSpecifier !== null) {
      try {
        let packageNameInfo = packageArg(packageSpecifier);
        this.packageName = packageNameInfo.name;
        this.packageVersion = packageNameInfo.fetchSpec;
        this.packageSpecifier = `${this.packageName}@${this.packageVersion}`;
      } catch (e) {
        throw new Error("Cannot construct PackageNode with package");
      }
    } else {
      this.packageName = null;
      this.packageVersion = null;
      this.packageSpecifier = null;
    }
    
    this.indentLevel = indentLevel;
    this.children = [];
    this.parent = null;
  }

  addChild(node) {
    this.children.push(node);
    node.parent = this;
  }
}