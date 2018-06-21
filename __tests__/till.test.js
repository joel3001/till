const Till = require('../src/till.js');

describe('scan', () => {
  it('scan finds an item by its barcode', () => {
    const till = new Till();
    expect(till.scan(456)).toEqual('banana');
  });
});

describe('addToBasket', () => {
  it('addToBasket adds an item to the basket', () => {
  const till = new Till();
  till.addToBasket('orange')
  expect(till.basket).toEqual(['orange']);
});
});