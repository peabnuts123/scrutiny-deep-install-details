import { expect } from 'chai';
import Package, { PackageDetails } from '@app/lib/Package';
import BuilderHelper from '@app/lib/BuilderHelper';
import _ from 'lodash';

describe("Package", function () {
  describe("construction", function () {
    it("is successful given correct data", function () {
      // Setup
      let packageBuilder = CreateMockPackageBuilder();

      // Test
      let pkg = BuilderHelper.Assemble(packageBuilder, Package);
      expect(pkg).is.instanceOf(Package);
    });
    it("fails when missing `name` parameter", function () {
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
    it("fails when missing `version` parameter", function () {
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
    it("fails when missing `details` parameter", function () {
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
    it("without hasError parameter defaults to false", function () {
      // Setup
      let packageBuilder = CreateMockPackageBuilder({
        hasError: undefined,
      });

      // Test
      let pkg = BuilderHelper.Assemble(packageBuilder, Package);

      // Assert
      expect(pkg.hasError).to.be.false;
    });
  });
});

function CreateMockPackageBuilder(overrides: Partial<Package> = {}, detailsOverrides: Partial<PackageDetails> = {}): Partial<Package> {
  let packageDetailsBuilder: Partial<PackageDetails> = BuilderHelper.New<PackageDetails>({
    publishDate: new Date(2018, 3, 18),
    publishAuthor: "peabnuts123",
    version: "0.1.0",
    isVersionDataMissing: false,
    name: "mock-package",
    repositoryUrl: "https://github.com/peabnuts123/mock-package.git",
    homepage: "https://github.com/peabnuts123/mock-package",
    license: "UNLICENSED",
  });
  packageDetailsBuilder = _.assign(packageDetailsBuilder, detailsOverrides);

  let packageBuilder: Partial<Package> = BuilderHelper.New<Package>({
    name: "mock-package",
    version: "0.1.0",
    hasError: false,
    details: BuilderHelper.Assemble(packageDetailsBuilder),
  });

  return _.assign(packageBuilder, overrides);
}