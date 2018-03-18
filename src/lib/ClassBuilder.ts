// @TODO document the subtlty of this class
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