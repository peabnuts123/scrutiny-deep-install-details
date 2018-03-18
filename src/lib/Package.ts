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
  public details: IPackageDetails;

  constructor(source: Partial<Package>) {
    this.name = ValidateAsRequired(source.name);
    this.version = ValidateAsRequired(source.version);
    this.hasError = _.defaultTo(source.hasError, false);
    this.error = source.error;
    this.details = ValidateAsRequired(source.details);
  }

  // @TODO This may need to be a bit more sophisticated
  public get PackageSpecifier(): string {
    return `${this.name}@${this.version}`;
  }
}

// @TODO put somewhere!
function ValidateAsRequired<T>(value: T | undefined): T {
  if (_.isNil(value)) {
    throw new Error("something");
  } else {
    return value;
  }
}