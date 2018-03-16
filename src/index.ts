import packageArg, { Result as PackageArg } from 'npm-package-arg';
import getPackagesInstalled from 'getPackagesInstalled';
import populatePackageDetails from 'populatePackageDetails';
import Package from 'lib/Package';

export default async function deepInstallDetails(userPackageSpecifiers: string[]): Promise<Package[]> {
  // Map user-input into safe, parsed objects
  let packageSpecifiers: PackageArg[] = userPackageSpecifiers.map((s) => packageArg(s));

  // Get info about what packages will be installed
  let allPackageInfo: Partial<Package>[] = await getPackagesInstalled(packageSpecifiers)

  // Get full information for each package
  return await populatePackageDetails(allPackageInfo);
} 