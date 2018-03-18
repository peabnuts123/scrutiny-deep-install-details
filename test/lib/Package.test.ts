import { expect } from 'chai';
import _ from 'lodash';

import BuilderHelper from '@app/lib/BuilderHelper';
import Package, { IPackageDetails } from '@app/lib/Package';

describe("Package", () => {
  describe("construction", () => {
    it("is successful given correct data", () => {
      // Setup
      let packageBuilder = CreateMockPackageBuilder();

      // Test
      let pkg = BuilderHelper.Assemble(packageBuilder, Package);
      expect(pkg).to.be.an.instanceOf(Package);
    });
    it("fails when missing `name` parameter", () => {
      // Setup
      let packageBuilder = CreateMockPackageBuilder({
        name: undefined,
      });

      // Test
      let testFunc = () => {
        BuilderHelper.Assemble(packageBuilder, Package);
      };

      // Assert
      expect(testFunc).to.throw();
    });
    it("fails when missing `version` parameter", () => {
      // Setup
      let packageBuilder = CreateMockPackageBuilder({
        version: undefined,
      });

      // Test
      let testFunc = () => {
        BuilderHelper.Assemble(packageBuilder, Package);
      };

      // Assert
      expect(testFunc).to.throw();
    });
    it("fails when missing `details` parameter", () => {
      // Setup
      let packageBuilder = CreateMockPackageBuilder({
        details: undefined,
      });

      // Test
      let testFunc = () => {
        BuilderHelper.Assemble(packageBuilder, Package);
      };

      // Assert
      expect(testFunc).to.throw();
    });
    it("without hasError parameter defaults to false", () => {
      // Setup
      let packageBuilder = CreateMockPackageBuilder({
        hasError: undefined,
      });

      // Test
      let pkg = BuilderHelper.Assemble(packageBuilder, Package);

      // Assert
      expect(pkg.hasError).to.be.false;
    });
    it("with an error is allowed to have no `details` property", () => {
      // Setup
      let packageBuilder = CreateMockPackageBuilder({
        details: undefined,
        error: "MOCK ERROR",
        hasError: true,
      });

      // Test
      let pkg = BuilderHelper.Assemble(packageBuilder, Package);

      // Assert
      expect(pkg).to.be.an.instanceOf(Package);
    });
  });
});

function CreateMockPackageBuilder(overrides: Partial<Package> = {}, detailsOverrides: Partial<IPackageDetails> = {}): Partial<Package> {
  let packageDetailsBuilder: Partial<IPackageDetails> = BuilderHelper.New<IPackageDetails>({
    homepage: "https://github.com/peabnuts123/mock-package",
    isVersionDataMissing: false,
    license: "UNLICENSED",
    name: "mock-package",
    publishAuthor: "peabnuts123",
    publishDate: new Date(2018, 3, 18),
    repositoryUrl: "https://github.com/peabnuts123/mock-package.git",
    version: "0.1.0",
  });
  packageDetailsBuilder = _.assign(packageDetailsBuilder, detailsOverrides);

  let packageBuilder: Partial<Package> = BuilderHelper.New<Package>({
    details: BuilderHelper.Assemble(packageDetailsBuilder),
    hasError: false,
    name: "mock-package",
    version: "0.1.0",
  });

  return _.assign(packageBuilder, overrides);
}