import Package from "lib/Package";

import _ from 'lodash';
// import Package from 'lib/Package';

// export interface PackageDetails {
//   publishDate: Date | null,
//   publishAuthor: string | null,
//   version: string,
//   isVersionDataMissing: boolean,
//   name: string,
//   repositoryUrl: string | null,
//   homepage: string,
//   license: string,
//   // @TODO remove
//   someShit: boolean,
// }

// export default class PackageBuilder implements IClassBuilder<Package> {
//   public name: string;
//   public version: string;
//   public hasError?: boolean;
//   public error?: string;
//   public details?: PackageDetails;


//   constructor(name: string, version: string) {
//     this.name = name;
//     this.version = version;
//   }

//   finalise(): Package {
//     return new Package(this);
//   }


//   // @TODO This may need to be a bit more sophisticated
//   public get PackageSpecifier(): string {
//     return `${this.name}@${this.version}`;
//   }
// }

// const PackageBuilder: ClassBuilder<Package> = {
//   finalise(): Package {
//     return new Package(this);
//   }
// }

// export default class PackageBuilder extends ClassBuilder<Package> {
//   finalise(): Package {
//     return new Package(this);
//   }
// // }

// let a = new PackageBuilder();

// a.name = "raaa";

// const PackageBuilder: ClassBuilder<Package> = {
//   finalise(): Package {
//     return new Package(this);
//   }
// };

// type Something<T> = Partial<T>;

// abstract class ClassBuilder<T> implements Something<T> {

// }
// interface BuildableClass<T> {
//   constructor(source: ClassBuilder<T>): T;
// }

// function CreateClassBuilder<T extends BuildableClass<T>>(type: (new (source: ClassBuilder<T>) => T)): ClassBuilder<T> {
//   // let a = new type();
//   let something: ClassBuilder<T> = {
//     finalise() {
//       let a = new type(this);
//       return a;
//     }
//   };

//   return something;
// }

// // Package extends BuildableClass<Package>
// // Package = new (source: ClassBuilder<Package>) => Package
// let packageBuilder = CreateClassBuilder(Package);
// let pkg: Package = packageBuilder.finalise();

// // export default PackageBuilder;

// class MyThing {

//   public name: string;
//   public version: string;

//   constructor(source: Partial<MyThing>) {
//     this.name = _.defaults(source.name, '');
//     this.version = _.defaults(source.version, '');
//   }

//   public Log(s: string): void {
//     console.log(s);
//   }
// }

// class SomethingElse {
//   public value: number;

//   constructor(source: Partial<SomethingElse>) {
//     this.value = 2;
//   }
// }

// interface ThingConstructor<T> {
//   constructor(source: Partial<T>): T;
// }

// @TODO refactor to camelCase… I guess =/
// @TODO document the subtlty of this class
export default class BuilderHelper {
  static New<T>(initialValues: Partial<T> = {}): Partial<T> {
    return initialValues;
  }

  //constructor(source: Partial<MyThing>)
  static Assemble<T>(Ctor: (new (source: Partial<T>) => T), source: Partial<T>): T {
    return new Ctor(source);
  }
}

// let a = Thingerizer.CreateThinger<MyThing>();
// a.name = "blah";
// a.version = "0.2.0";

// let b = Thingerizer.CompileThing(MyThing, a);