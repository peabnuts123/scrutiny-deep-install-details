/*
  Purpose:
    Offer a workflow for constructing typesafe classes in the form of:
      1. Create empty object
      2. Populate details
      3. Return complete object

    Using this workflow means that you can avoid making every member of your
    type optional, having to check against null for every property access
    forever onward.

    @NOTE it is required that your class constructor parameter to `assemble()`
    have the following signature:

      constructor(source: Partial<T>)

    You will not be able to pass it as a constructor to `assemble()`, otherwise.

  Usage:
    let myThingBuilder: Partial<MyThing> = ClassBuilder.create<MyThing>();
    myThingBuilder.name = "Thing";
    myThingBuilder.value = 10;

    let myThing: MyThing = ClassBuilder.assemble(myThingBuilder, MyThing);

    // Can access the value of myThing.value now, it is guaranteed to be not-null
    console.log("Value times 10: " + (myThing.value * 10));
 */
export default class ClassBuilder {
  public static create<T>(initialValues: Partial<T> = {}): Partial<T> {
    return initialValues;
  }

  public static assemble<T>(source: Partial<T>): T;
  public static assemble<T>(source: Partial<T>, Ctor: (new (source: Partial<T>) => T)): T;
  public static assemble<T>(source: Partial<T>, Ctor?: (new (source: Partial<T>) => T)): T {
    if (Ctor) {
      return new Ctor(source);
    } else {
      return source as T;
    }
  }
}