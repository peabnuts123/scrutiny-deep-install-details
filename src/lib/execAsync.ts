import { exec } from 'child_process';

export default async function execAsync(shellCommand: string): Promise<string> {
  return new Promise<string>(function (resolve, reject) {
    exec(shellCommand, (error: Error | null, stdout: string) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
}
