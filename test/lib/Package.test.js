const Package = require('../../src/lib/Package');
const expect = require('chai').expect;

describe("Package", function () {
  it("constructs correctly, given realistic input", function () {
    // Setup
    let pkg = new Package('yarn', '0.15.0');

    // Assert
    expect(pkg).to.exist;
    expect(pkg).to.be.instanceOf(Package);
  });

  it("throws an error when constructed without a version number", function () {
    // Setup
    let assertFunc = function () {
      new Package('yarn');
    };

    // Assert
    expect(assertFunc).to.throw();
  });

  it("throws an error when constructed with version number that is not a string", function () {
    // Setup
    let assertFunc = function () {
      new Package('yarn', 0.15);
    };

    // Assert
    expect(assertFunc).to.throw();
  });

  it("throws an error when constructed without a version number or a package name", function () {
    // Setup
    let assertFunc = function () {
      new Package();
    };

    // Assert
    expect(assertFunc).to.throw();
  });

  it("throws an error when constructed with a package name that is not a string", function () {
    // Setup
    let assertFunc = function () {
      new Package(2, '1.0.0');
    };

    // Assert
    expect(assertFunc).to.throw();
  });
});