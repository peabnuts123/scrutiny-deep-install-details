const get = require('../../src/lib/get');
const expect = require('chai').expect;

describe("get", function () {
  it("gets a real path", function () {
    // Setup
    let value = 'working!';
    let testObject = {
      path: {
        to: {
          something: value
        }
      }
    };

    // Test
    let resultValue = get(testObject, 'path.to.something');

    // Assert
    expect(resultValue).to.equal(value);
  });

  it("throws an exception when called with an empty path", function () {
    // Setup
    let testObject = {
      something: 2,
    };
    let assertFunction = function() {
      return get(testObject, '');
    };

    // Assert
    expect(assertFunction).to.throw();
  });

  it ("throws an exception when called without a path argument", function() {
    // Setup
    let testObject = {
      something: 2,
    };
    let assertFunction = function() {
      return get(testObject);
    };

    // Assert
    expect(assertFunction).to.throw();
  });

  it ("throws an exception when called without any arguments", function() {
    // Setup
    let assertFunction = function() {
      return get();
    };

    // Assert
    expect(assertFunction).to.throw();
  });

  it("returns null with a non-existant path", function () {
    // Setup
    let testObject = {
      something: 2,
    };

    // Test
    let resultValue = get(testObject, 'path.to.something');

    // Assert
    expect(resultValue).to.be.null;
  });

  it("returns null on an empty object", function () {
    // Test
    let resultValue1 = get(undefined, 'path.to.something');
    let resultValue2 = get(null, 'path.to.something');

    // Assert
    expect(resultValue1).to.be.null;
    expect(resultValue2).to.be.null;
  });

  it("throws an exception when called on a non-object value", function () {
    // Assert
    expect(function() { get(2, 'path.to.something'); }).to.throw();
    expect(function() { get('hello', 'path.to.something'); }).to.throw();
  });
});