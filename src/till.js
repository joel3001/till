function Till () {

  this.items = [

  { fruit: 'apple',
    barcode: 123,
    price: 5
  },

  { fruit: 'banana',
    barcode: 456,
    price: 6
  },
  
  { fruit: 'orange',
    barcode: 789,
    price: 7,
  },
  
  { fruit: 'pineapple',
    barcode: 5367,
    price: 80,
  },
  
  { fruit: 'kiwi',
    barcode: 765,
    price: 25,
  }

  ];

  this.basket = [];

};

Till.prototype.scan = function (barcode) {
  return this.items.find((item => item.barcode === barcode)).fruit;
};

Till.prototype.addToBasket = function (item) {
  return this.basket.push(item);
};

Till.prototype.removeFromBasket = function (barcode) {
  const a = this.items.find((item => item.barcode === barcode)).fruit;
    if (this.basket.includes(a)) {
      this.basket.splice(a, 1)
    };
  return this.basket;
}

Till.prototype.totalPrice = function () {
  return this.basket.forEach()
};

module.exports = Till