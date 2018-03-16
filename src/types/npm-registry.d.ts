declare module "npm-registry" {
  interface RegistryOptions {
    registry?: string,
    stats?: string,
    mirrors?: string[],
    maxdelay?: number,
    mindelay?: number,
    // @TODO this uses GitHulk types
    githulk?: any,
    retries?: number,
    factor?: number,
    // @TODO confirm
    authorization?: string,
    user?: string,
    password?: string,
  }

  export default class Registry {
    constructor(options: RegistryOptions);

    packages: {
      // get(packageIdentifier: string, callbackFn: (error: string, packageData: any[]) => void): void,
      // @TODO type out more stuff
      details(packageIdentifier: string, callbackFn: (error: string, packageData: any[]) => void): void,
      // depended(packageIdentifier: string, callbackFn: (error: string, packageData: any[]) => void): void,
      // starred(packageIdentifier: string, callbackFn: (error: string, packageData: any[]) => void): void,
      // keyword(packageIdentifier: string, callbackFn: (error: string, packageData: any[]) => void): void,
      // releases(packageIdentifier: string, callbackFn: (error: string, releaseData: any[]) => void): void,
      // release(packageIdentifier: string, callbackFn: (error: string, packageData: any[]) => void): void,
      // range(): void,
    }
  }
}