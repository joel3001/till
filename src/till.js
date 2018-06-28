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

Till.prototype.addToBasket = function (product) {
  return this.basket.push(this.items.find((item => item.fruit === product)));
};

Till.prototype.removeFromBasket = function (barcode) {
  const fruitName = this.items.find((item => item.barcode === barcode));
    if (this.basket.includes(fruitName)) {
      this.basket.splice(fruitName, 1)
    };
  return this.basket;
}

Till.prototype.totalPrice = function () {
  return this.basket.reduce((total, item) => {
    return total + item.price;
 }, 0);
 
}

module.exports = Till