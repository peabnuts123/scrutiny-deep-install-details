import { expect } from 'chai';

import BuilderHelper from '@app/lib/BuilderHelper';
import Package from '@app/lib/Package';
import processInstallInformation from '@app/processInstallInformation';

let sampleInput: NpmInstallOutput;
let sampleOutput: Partial<Package>[];

beforeEach(() => {
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
      },
      {
        "action": "add",
        "name": "dateformat",
        "version": "2.0.0",
        "path": "/Users/jeff/Documents/Projects/_misc/deep-install-details/node_modules/dateformat"
      },
      {
        "action": "add",
        "name": "clone",
        "version": "1.0.2",
        "path": "/Users/jeff/Documents/Projects/_misc/deep-install-details/node_modules/clone"
      },
      {
        "action": "add",
        "name": "clone",
        "version": "1.0.0",
        "path": "/Users/jeff/Documents/Projects/_misc/deep-install-details/node_modules/clone"
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

  let arrayDiffer = BuilderHelper.New<Package>({
    name: 'array-differ',
    version: '1.0.0',
  });
  let beeper = BuilderHelper.New<Package>({
    name: 'beeper',
    version: '1.1.1',
  });
  let clone102 = BuilderHelper.New<Package>({
    name: 'clone',
    version: '1.0.2',
  });
  let clone100 = BuilderHelper.New<Package>({
    name: 'clone',
    version: '1.0.0',
  });
  let cloneStats = BuilderHelper.New<Package>({
    name: 'clone-stats',
    version: '0.0.1',
  });
  let dateformat = BuilderHelper.New<Package>({
    name: 'dateformat',
    version: '2.0.0',
  });

  sampleOutput = [
    arrayDiffer,
    beeper,
    clone100,
    clone102,
    cloneStats,
    dateformat,
  ];
});

describe("processInstallInformation", () => {
  it("correctly parses mock input (dedupe, ordering, parsing)", () => {
    // Test
    //  - process data
    let packageInfo: Partial<Package>[] = processInstallInformation(sampleInput);

    // Assert
    expect(packageInfo).to.deep.equal(sampleOutput);
  });
});
