const expect = require('chai').expect;
const processAsciiPackageTree = require('../src/processAsciiPackageTree');
const PackageNode = require('../src/lib/PackageNode');


/* cSpell:disable */
let sampleInput, sampleOutput;
beforeEach(function () {
  // Mock response
  sampleInput = `npm-dep-analyser@1.0.0 /Users/jeff/Documents/Projects/_misc/npm-dep-analyser
\`-- gulp-babel@7.0.0 
  +-- gulp-util@3.0.8 
  | \`-- multipipe@0.1.2 
  |   \`-- duplexer2@0.0.2 
  |     \`-- readable-stream@1.1.14 
  +-- replace-ext@0.0.1`;


  // Hand-assemble correct mocked result
  let gulpBabel = new PackageNode('gulp-babel@7.0.0', 1);
  let gulpUtil = new PackageNode('gulp-util@3.0.8', 2);
  let multipipe = new PackageNode('multipipe@0.1.2', 3);
  let duplexer2 = new PackageNode('duplexer2@0.0.2', 4);
  let readableStream = new PackageNode('readable-stream@1.1.14', 5);
  let replaceExt = new PackageNode('replace-ext@0.0.1', 2);

  gulpBabel.addChild(gulpUtil);
  gulpBabel.addChild(replaceExt);
  gulpUtil.addChild(multipipe);
  multipipe.addChild(duplexer2);
  duplexer2.addChild(readableStream);

  sampleOutput = {
    packageTree: [
      gulpBabel
    ],
    allPackages: [
      gulpBabel,
      gulpUtil,
      multipipe,
      duplexer2,
      readableStream,
      replaceExt
    ]
  };
});

// NOTE: Manipulates parameter
function mangleParents(packageNodeArray) {
  packageNodeArray.forEach((pkg) => {
    if (pkg.parent) {
      pkg.parent = pkg.parent.packageSpecifier;
    }
  });
}
/* cSpell:enable */

describe('processAsciiPackageTree', function () {
  it("correctly parses mock input", function () {
    // Test
    //  - process data
    let packageInfo = processAsciiPackageTree(sampleInput);
    //  - remove circular references
    mangleParents(packageInfo.allPackages);
    mangleParents(sampleOutput.allPackages);
    //  - convert to JSON strings for comparison
    let resultString = JSON.stringify(packageInfo);
    let sampleOutputString = JSON.stringify(sampleOutput);

    // Assert
    expect(resultString).to.equal(sampleOutputString);
  });
});