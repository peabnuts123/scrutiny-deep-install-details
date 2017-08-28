const expect = require('chai').expect;
const Package = require('../src/lib/Package');
const processInstallInformation = require('../src/processInstallInformation');


let sampleInput, sampleOutput;
beforeEach(function () {
  sampleInput = JSON.parse(`{
    "added": [
      {
        "action": "add",
        "name": "array-differ",
        "version": "1.0.0",
        "path": "/Users/jeff/Documents/Projects/_misc/deep-install-details/node_modules/array-differ"
      },
      {
        "action": "add",
        "name": "beeper",
        "version": "1.1.1",
        "path": "/Users/jeff/Documents/Projects/_misc/deep-install-details/node_modules/beeper"
      },
      {
        "action": "add",
        "name": "clone",
        "version": "1.0.2",
        "path": "/Users/jeff/Documents/Projects/_misc/deep-install-details/node_modules/clone"
      },
      {
        "action": "add",
        "name": "clone-stats",
        "version": "0.0.1",
        "path": "/Users/jeff/Documents/Projects/_misc/deep-install-details/node_modules/clone-stats"
      },
      {
        "action": "add",
        "name": "dateformat",
        "version": "2.0.0",
        "path": "/Users/jeff/Documents/Projects/_misc/deep-install-details/node_modules/dateformat"
      }
    ],
    "removed": [],
    "updated": [],
    "moved": [],
    "failed": [],
    "warnings": [
      "gulp-babel@7.0.0 requires a peer of babel-core@6 || 7 || ^7.0.0-alpha || ^7.0.0-beta || ^7.0.0-rc but none was installed."
    ],
    "elapsed": 2642
  }`);

  let arrayDiffer = new Package('array-differ', '1.0.0');
  arrayDiffer.path = "/Users/jeff/Documents/Projects/_misc/deep-install-details/node_modules/array-differ";
  let beeper = new Package('beeper', '1.1.1');
  beeper.path = "/Users/jeff/Documents/Projects/_misc/deep-install-details/node_modules/beeper";
  let clone = new Package('clone', '1.0.2');
  clone.path = "/Users/jeff/Documents/Projects/_misc/deep-install-details/node_modules/clone";
  let cloneStats = new Package('clone-stats', '0.0.1');
  cloneStats.path = "/Users/jeff/Documents/Projects/_misc/deep-install-details/node_modules/clone-stats";
  let dateformat = new Package('dateformat', '2.0.0');
  dateformat.path = "/Users/jeff/Documents/Projects/_misc/deep-install-details/node_modules/dateformat";

  sampleOutput = [
    arrayDiffer,
    beeper,
    clone,
    cloneStats,
    dateformat,
  ];
});

describe("processInstallInformation", function () {
  it("correctly parses mock input", function () {
    // Test
    //  - process data
    let packageInfo = processInstallInformation(sampleInput);

    // Assert
    expect(packageInfo).to.deep.equal(sampleOutput);
  });
});