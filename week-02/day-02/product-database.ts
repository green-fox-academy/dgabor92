let product: { [key: string]: any } = {
  product1: {
    name: 'Egg',
    price: 200,
  },
  product2: {
    name: 'Milk',
    price: 200,
  },
  product3: {
    name: 'Fish',
    price: 400,
  },
  product4: {
    name: 'Apples',
    price: 150,
  },
  product5: {
    name: 'Bread',
    price: 50,
  },
  product6: {
    name: 'Chicken',
    price: 550,
  },
};

console.log(product.product3.price);

console.log(Object.values(product.product1));

// const keys = Object.keys(product);
// console.log(keys);

// for in el megkapom a kulcsot amivel kitudom irattatni a value-t

function biggestNumber(product: {}): number {
  let biggest: number = 0;
  for (const property in product) {
    if (product[property].price > biggest) {
      biggest = product[property].price;
    }
  }
  return biggest;
}

console.log(biggestNumber(product));

function productBelow(product: {}): number {
  let below: number = 0;
  for (const property in product) {
    if (product[property].price < 300) {
      below += 1;
    }
  }
  return below;
}

console.log(productBelow(product));

function isThere(product: {}): boolean {
  let result = false;
  for (const property in product) {
    if (product[property].price === 125) {
      result = true;
      //break ha nagy adatokkal dolgozok mert felesleges végigmenni a tömb többi részén
      break;
    }
  }
  return result;
}

console.log(isThere(product));

function cheapest(product: {}): string {
  let min: number = Number.MAX_SAFE_INTEGER;
  let productName = '';
  for (const property in product) {
    if (product[property].price < min) {
      min = product[property].price;
      productName = product[property].name;
    }
  }
  return productName;
}

console.log(cheapest(product));
