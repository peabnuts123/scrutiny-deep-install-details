import _ from 'lodash';

import { Package } from '@scrutiny/core';
import { ClassBuilder } from '@scrutiny/core/util';

export default function processInstallInformation(installInformation: NpmInstallOutput): Partial<Package>[] {
  return _.chain(installInformation.added)
    .map((addedPackage: NpmInstallPackage) => {
      return ClassBuilder.create<Package>({
        name: addedPackage.name,
        version: addedPackage.version,
      });
    })
    .orderBy(['name', 'version'])
    .sortedUniqBy((pkg: Partial<Package>) => `${pkg.name}@${pkg.version}`)
    .value();
}