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
  expect(till.basket).toEqual([{'barcode': 789, 'fruit': 'orange', 'price': 7}]);
  });
});


describe('removeFromBasket', () => {
it('removes the item with the given barcode from the basket', () => {
  const till = new Till();
  till.addToBasket('apple')
  till.addToBasket('orange')
  till.addToBasket('apple') 
  till.addToBasket('banana')
  expect(till.removeFromBasket(123)).toEqual([{'barcode': 789, 'fruit': 'orange', 'price': 7},
                                              {'barcode': 123, 'fruit': 'apple', 'price': 5},
                                              {'barcode': 456, 'fruit': 'banana', 'price': 6}]);
  });
});

describe('totalPrice', () => {
it(' gets the total price of items in the basket', () => {
  const till = new Till();
  till.addToBasket('apple')
  till.addToBasket('orange')
  till.addToBasket('apple') 
  expect(till.totalPrice()).toEqual(17);
  });
});
