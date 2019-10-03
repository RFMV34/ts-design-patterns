/**
 * Factory method
 * Key concepts:
 *    abstract interface for product
 *    concrete implementation of product using product interface
 *    abstract class of creator with abstract method of product creating and other methods already implemented
 *    concrete classes of creators, with implementation of abstract method of product creating
 */

interface Transport { // product interface
  deliver(): void;
}

class AirTransport implements Transport {

  deliver(): void {
    console.log('Delivered by air');
  }

}

class GroundTransport implements Transport {

  deliver(): void {
    console.log('Delivered by ground');
  }

}

/////////////////////////////////////////

export abstract class TransportationCompany { // abstract Creator, can be also interface if ne do not need implemented methods

  protected abstract createTransport(): Transport;

  deliver(): void {
    return this.createTransport().deliver();
  }

  // Here should be another methods, primary task of Creator is not creating Products, but all other logic

}

export class AirTransportationCompany extends TransportationCompany {

  createTransport(): Transport {
    return new AirTransport();
  }

}

export class GroundTransportationCompany extends TransportationCompany {

  createTransport(): Transport {
    return new GroundTransport();
  }

}

