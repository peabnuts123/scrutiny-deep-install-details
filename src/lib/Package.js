const _ = require('lodash');

class Package {
  constructor (name, version) {
    if (!_.isString(name)) {
      throw new Error("Package name must be a string");
    }
    if (!_.isString(version)) {
      throw new Error("Package version must be a string");
    }
    this.name = name;
    this.version = version;
    this.packageSpecifier = `${name}@${version}`;
  }

  clone() {
    return new Package(this.name, this.version);
  }
}

module.exports = Package;