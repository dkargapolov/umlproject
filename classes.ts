class Product {
  constructor(
    public id: string,
    public name: string,
    public price: number,
    public description: string
  ) {}
}

class Cart {
  public items: Product[] = [];

  addItem(product: Product): void {
    this.items.push(product);
  }

  removeItem(productId: string): void {
    this.items = this.items.filter(item => item.id !== productId);
  }
}

class Order {
  constructor(
    public id: string,
    public products: Product[],
    public totalAmount: number
  ) {}

  checkout(): void {
    console.log(`Order ${this.id} is being processed.`);
  }
}

class User {
  constructor(
    public id: string,
    public name: string,
    public email: string
  ) {}

  register(): void {
    console.log(`User ${this.name} registered.`);
  }

  login(): void {
    console.log(`User ${this.name} logged in.`);
  }
}
