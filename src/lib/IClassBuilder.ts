// import Package from "lib/Package";

// interface IClassBuilder<T> {
//   finalise(): T;
// }

// let a: Partial<number>;

// // type Something<T> = {
// //   [s in (Partial<T> & { finalise: () => T })]?: T[s];
// // }

// interface Something<T> {
//   // [k: keyof T]: T[k],
//   finalise(): T,
// }
// type ClassBuilder<T> = Partial<T> & { finalise: () => T };


// interface B {
//   name: string,
//   value: number,
// };

// let b: B = {
//   name: "Hello",
//   value: 15,
// };

// abstract class Blah<T> implements Something<T>{
// }


// let test: ClassBuildr<Package> = {
//   something: 'asda',

//   finalise(): Package {
//     // return new Package(this);
//     throw new Error("Not implemented");
//   }
// };


