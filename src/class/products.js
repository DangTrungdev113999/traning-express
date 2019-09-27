class Products {
  constructor(name, price,image) {
    this.name = name;
    this.image = image;
    this.price = price;
  };
};

let data = [];

for(let i = 0; i<=10000; i ++) {
  let products = new Products(`product${i}`, i+100, "https://loremflickr.com/320/240");
  data.push(products);
};

module.exports = data;