import _ from 'lodash';

export interface IPackageDetails {
  publishDate: Date | null;
  publishAuthor: string | null;
  version: string;
  isVersionDataMissing: boolean;
  name: string;
  repositoryUrl: string;
  homepage: string;
  license: string;
}

export default class Package {
  public name: string;
  public version: string;
  public hasError: boolean = false;
  public error: any;
  public details: IPackageDetails | null;

  constructor(source: Partial<Package>) {
    this.name = ValidateAsRequired(source, 'name');
    this.version = ValidateAsRequired(source, 'version');
    this.hasError = _.defaultTo(source.hasError, false);
    this.error = source.error;
    this.details = ValidateAsRequiredIfFalsy(source, 'details', 'hasError');
  }

  // @TODO This may need to be a bit more sophisticated
  public get PackageSpecifier(): string {
    return `${this.name}@${this.version}`;
  }
}

// @TODO put somewhere!
// @TODO ValidateAsRequiredIfTruthy
function ValidateAsRequiredIfFalsy<T, K extends keyof T, K2 extends keyof T>(source: Partial<T>, propertyName: K, dependentPropertyName: K2): T[K] | null {
  // If required
  if (!source[dependentPropertyName]) {
    return ValidateAsRequired(source, propertyName);
  } else {
    // Not required but may still have a value
    if (!_.isNil(source[propertyName])) {
      return source[propertyName] as T[K];
    } else {
      return null;
    }
  }
}

function ValidateAsRequired<T, K extends keyof T>(source: Partial<T>, propertyName: K): T[K] {
  if (_.isNil(source[propertyName])) {
    throw new Error(`Property '${propertyName}' is undefined, but marked as required`);
  } else {
    return source[propertyName] as T[K];
  }
}
