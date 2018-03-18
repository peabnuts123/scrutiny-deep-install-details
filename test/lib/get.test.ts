import { expect } from 'chai';

import get from '@app/lib/get';


describe("get", () => {
  it("gets a real path", () => {
    // Setup
    let value = 'working!';
    let testObject = {
      path: {
        to: {
          something: value,
        },
      },
    };

    // Test
    let resultValue = get(testObject, 'path.to.something');

    // Assert
    expect(resultValue).to.equal(value);
  });

  it("throws an error when called with an empty path", () => {
    // Setup
    let testObject = {
      something: 2,
    };
    let assertFunction = () => {
      return get(testObject, '');
    };

    // Assert
    expect(assertFunction).to.throw();
  });

  it("returns null with a non-existant path", () => {
    // Setup
    let testObject = {
      something: 2,
    };

    // Test
    let resultValue = get(testObject, 'path.to.something');

    // Assert
    expect(resultValue).to.be.null;
  });

  it("returns null on an empty object", () => {
    // Test
    let resultValue1 = get(undefined, 'path.to.something');
    let resultValue2 = get(null, 'path.to.something');

    // Assert
    expect(resultValue1).to.be.null;
    expect(resultValue2).to.be.null;
  });

  it("throws an error when called on a non-object value", () => {
    // Assert
    expect(() => { get(2, 'path.to.something'); }).to.throw();
    expect(() => { get('hello', 'path.to.something'); }).to.throw();
  });
});