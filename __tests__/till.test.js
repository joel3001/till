const Till = require('../src/till.js');

describe('scan', () => {
  it('scan finds an item by its barcode', () => {
    const till = new Till();
    expect(till.scan(456)).toEqual('banana');
  });
});

describe('addToBasket', () => {
  it('adds an item to the basket', () => {
  const till = new Till();
  till.addToBasket('orange');
  expect(till.basket).toEqual(['orange']);
  });
});


describe('removeFromBasket', () => {
it('removes the item with the given barcode from the basket', () => {
  const till = new Till();
  till.addToBasket('apple')
  till.addToBasket('orange')
  till.addToBasket('apple') 
  till.addToBasket('banana')
  expect(till.removeFromBasket(123)).toEqual(['orange','apple','banana']);
  });
});

describe('totalPrice', () => {
it(' gets the total price of items in the basket', () => {
  const till = new Till();
  till.basket = ['orange', 'orange', 'pineapple'];
  expect(till.totalPrice()).toEqual(94);
  });
});
