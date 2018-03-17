import _ from 'lodash';
import Package from '@app/lib/Package';
import BuilderHelper from '@app/lib/BuilderHelper';

export default function processInstallInformation(installInformation: NpmInstallOutput): Partial<Package>[] {
  return _.chain(installInformation.added)
    .map((addedPackage: NpmInstallPackage) => {
      return BuilderHelper.New<Package>({
        name: addedPackage.name,
        version: addedPackage.version
      });
    })
    .orderBy(['name', 'version'])
    .sortedUniqBy((pkg: Partial<Package>) => `${pkg.name}@${pkg.version}`)
    .value();
}