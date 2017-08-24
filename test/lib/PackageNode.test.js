const expect = require('chai').expect;
const PackageNode = require('../../src/lib/PackageNode');

let mockNode1, mockNode2;
beforeEach(function() {
  mockNode1 = new PackageNode('yarn@latest', 1);
  mockNode2 = new PackageNode('underscore@latest', 2);
});

describe("PackageNode", function () {
  it("tests are not interfering", function() {
    // Assert
    expect(mockNode1.children.length).to.equal(0);
    expect(mockNode2.parent).to.not.exist;
  });
  it("constructs correctly", function () {
    // Setup
    let node = mockNode1;

    // Assert
    expect(node).to.exist;
    expect(node).to.be.instanceOf(PackageNode);
  });

  it("can add child", function () {
    // Setup
    let node = mockNode1;
    let originalNumberOfChildren = node.children.length;

    // Test
    node.addChild(mockNode2);

    // Assert
    expect(node.children.length, "Number of children should have increased by 1").to.equal(originalNumberOfChildren + 1);
  });

  it("child gets correct parent", function () {
    // Setup
    let node = mockNode1;
    let child = mockNode2;

    // Test
    node.addChild(child);

    // Assert
    expect(child.parent).to.equal(node);
  });
});