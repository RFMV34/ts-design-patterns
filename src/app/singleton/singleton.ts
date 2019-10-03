/**
 * Singleton
 * Key concepts:
 *    private constuctor
 *    static getInstance() method that instantiate object instead of constuctor, if instance is empty
 */
export class Singleton { // should be static, but TS do not have static on class level

  private static instance: Singleton;
  name = 'Default';

  private constructor() {
  }

  static getInstance(): Singleton {
    if (!this.instance) {
      this.instance = new Singleton();
    }
    return this.instance;
  }
}
