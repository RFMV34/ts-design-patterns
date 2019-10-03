/**
 * Abstract factory
 * Key concepts:
 *    abstract interface for all related objects with defined methods and properties
 *    abstract interface for Abstract factory define methods to create objects
 *    concrete implementation of objects using object interface with implementation of methods and properties
 *    concrete implementation of Abstract factory using abstract factory interface, methods should create concrete objects but with interface type
 */
export interface Chair {
  sit(): void;
}

export interface Table {
  putOn(): void;
}

export interface FurnitureFactory {
  createChair(): Chair;
  createTable(): Table;
}

/////////////////////////////////////////

export class OldChair implements Chair {
  sit(): void {
    console.log('Sit like knight!');
  }
}

export class OldTable implements  Table {
  putOn(): void {
    console.log('Put like knight!');
  }
}

export class OldFurnitureFactory implements  FurnitureFactory {
  createChair(): Chair { // abstract interface return type
    return new OldChair();
  }

  createTable(): Table { // abstract interface return type
    return new OldTable();
  }
}

/////////////////////////////////////////

export class ModernChair implements Chair {
  sit(): void {
    console.log('Sit like salesman!');
  }
}

export class ModernTable implements  Table {
  putOn(): void {
    console.log('Put like salesman!');
  }
}

export class ModernFurnitureFactory implements  FurnitureFactory {
  createChair(): Chair { // abstract interface return type
    return new ModernChair();
  }

  createTable(): Table { // abstract interface return type
    return new ModernTable();
  }
}




