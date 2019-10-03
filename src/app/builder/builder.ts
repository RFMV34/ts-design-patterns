/**
 * Builder
 * Key concepts:
 *    reset() method to create new blank instance of object
 *    build<SOMETHING>() methods to modify object
 *    getProduct() to return created product with properties created trought build<SOMETHING>() methods
 */
export class HouseBuilder {

  private house: House;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.house = new House();
  }

  getProduct(): House {
    const product = this.house;
    this.reset();
    return product;
  }

  buildWalls(): void {
    for (let i = 0; i < 4; i++) {
      this.house.addWall(new Wall('blue', 200, 200));
    }
  }

  buildDoors(): void {
    this.house.addDoor(new Door('brown', 60, 150));
  }

  buildWindows(): void {
    this.house.addWindow(new Window(60, 60));
    this.house.addWindow(new Window(120, 60));
    this.house.addWindow(new Window(60, 120));
  }

}

//////////////////////////////////////////////////////////

class House {

  windows: Window[] = [];
  doors: Door[] = [];
  walls: Wall[] = [];

  constructor() {
  }

  addWindow(value: Window): void {
    this.windows.push(value);
  }

  addDoor(value: Door): void {
    this.doors.push(value);
  }

  addWall(value: Wall): void {
    this.walls.push(value);
  }

}

class Window {

  constructor(private width: number, private height: number) {
  }

  open(): void {
  }

}

class Door {

  constructor(private color: string, private width: number, private height: number) {
  }

  open(): void {
  }

}

class Wall {

  constructor(private color: string, private width: number, private height: number) {
  }

  repaint(color: string) {
    this.color = color;
  }

}
