import execAsync from '@app/lib/execAsync';

export default async function setupNewPackage(packageName: string = `processing-package`) {
  // Remove existing directory
  await execAsync(`rm -rf ${packageName}`);
  // Make directory
  await execAsync(`mkdir ${packageName}`);
  // Enter newly-created directory
  process.chdir(packageName);
  // Initialise new package
  await execAsync(`npm init --force`);
}