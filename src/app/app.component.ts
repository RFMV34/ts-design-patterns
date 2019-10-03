import {Component} from '@angular/core';
import {Singleton} from './singleton/singleton';
import {Prototype} from './prototype/prototype';
import {HouseBuilder} from './builder/builder';
import {Chair, ModernFurnitureFactory, OldFurnitureFactory, Table} from './abstract-factory/abstract-factory';
import {AirTransportationCompany, GroundTransportationCompany, TransportationCompany} from './factory-method/factory-method';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ts-design-patterns';

  constructor() {
    //this.showSingleton();
    //this.showPrototype();
    //this.showBuilder();
    //this.showAbstractFactory();
    this.showFactoryMethod();
  }

  showSingleton(): void {
    const singleton = Singleton.getInstance();
    console.log(singleton.name);
    singleton.name = 'Name updated';
    console.log(singleton.name);
    const singleton2 = Singleton.getInstance();
    console.log(singleton2.name);
  }

  showPrototype(): void {
    const prototype = new Prototype('Filip', 25);
    prototype.status = 'single';
    console.log(prototype);
    const clonedPrototype = prototype.clone();
    console.log(clonedPrototype);
  }

  showBuilder(): void {
    const builder = new HouseBuilder();
    builder.buildWalls();
    builder.buildWindows();
    builder.buildDoors();
    const product = builder.getProduct();
    console.log(product);
  }

  showAbstractFactory(): void {
    const oldFurnitureFactory = new OldFurnitureFactory();
    const modernFurnitureFactory = new ModernFurnitureFactory();
    let chair: Chair = oldFurnitureFactory.createChair();
    let table: Table = oldFurnitureFactory.createTable();
    chair.sit();
    table.putOn();
    chair = modernFurnitureFactory.createChair();
    table = modernFurnitureFactory.createTable();
    chair.sit();
    table.putOn();
  }

  showFactoryMethod(): void {
    let transportation: TransportationCompany = new AirTransportationCompany();
    transportation.deliver();
    transportation = new GroundTransportationCompany();
    transportation.deliver();
  }

}
