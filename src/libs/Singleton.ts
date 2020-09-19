export default class Singleton {
  private static instance: any = null;

  static getInstance<T>(Newalble: { new (): T }): T {
    if (this.instance === null) {
      this.instance = new Newalble();
    }
    return this.instance;
  }
}
