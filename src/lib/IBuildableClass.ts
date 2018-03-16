// type ClassBuilder<T> = Partial<T> & { get: <K extends keyof T>(k: K) => T[K] };

// let myThingBuilder: ClassBuilder<MyThing> = {
//   get<K extends keyof MyThing>(key: K): MyThing[K] {
//     return <K>this[key];
//   }
// };


// class MyThing {
//   public name: string;
//   public version: string;

//   constructor(source: ClassBuilder<MyThing>) {
//     this.name = <string>source.name;
//     this.version = <string>source.version;
//   }
// }

// class MyThingBuilder implements ClassBuilder<MyThing> {
//   private partial: Partial<MyThing> = {};
//   // constructor() {

//   set<K extends keyof MyThing, V>(key: K, value: MyThing[K]) {
//     this.partial[key] = value;
//   }

//   finalise(): MyThing {
//     return new MyThing(this);
//   }
// }

