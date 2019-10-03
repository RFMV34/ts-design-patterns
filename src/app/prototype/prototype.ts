/**
 * Prototype
 * Key concepts:
 *    Overloaded constructor that accept whole prototype object and copy properties of source into actual object attributes
 *    clone() method to call overloaded constructor and return new object
 */
export class Prototype {

  status: string;
  private children: boolean;

  constructor(private name: string, private age) {
  }

  static prototypeConstructor(source: Prototype): Prototype { // prototype constructor, should be real constructor, but TS does not support expected overloading
    const dest = new Prototype(source.name, source.age);
    dest.children = source.children;
    dest.status = source.status;
    return dest;
  }

  clone(): Prototype { // Can be declared in some interface
    return Prototype.prototypeConstructor(this);
  }

}
