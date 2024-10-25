`Use strict`;

const product = {
  _name: '',
  _price: 0,
  _quantity: 0,
};

Object.defineProperty(product, `name`, {
  get() {
    return this._name;
  },
  set(name) {
    if (typeof name !== 'string' || name.trim() === "") {
      console.error(`Product name should be a string`);
      return;
    }
    this._name = name;
  },
  enumerable: true,
  configurable: false,
});

Object.defineProperty(product, `price`, {
  get() {
    return `${this._price} UAH`;
  },
  set(price) {
    if (typeof price !== 'number' || price < 0) {
      console.error(`Product price should be a number and be greater than 0.`);
      return;
    }
    this._price = price;
  },
  enumerable: true,
  configurable: false,
});

Object.defineProperty(product, 'quantity', {
  get() {
    return this._quantity;
  },
  set(quantity) {
    if (typeof quantity !== 'number' || quantity < 0) {
      console.error('Product quantity should be a non-negative number.');
      return;
    }
    this._quantity = quantity;
  },
  enumerable: true,
  configurable: false,
});

Object.defineProperty(product, `totalValue`, {
  get() {
    return `${this._price * this._quantity} UAH`;
  },
  enumerable: true,
  configurable: false,
});

product.name = `phone`;
product.price = 3400;
product.quantity = 14;

console.log(product);
console.log(product.totalValue);
