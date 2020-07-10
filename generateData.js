var faker = require('faker');

var database = { products: [] };

for (var i=1; i<=1000; i++) {
  database.products.push({
    id: i,
    name: faker.internet.userName(),
    password: faker.internet.password()  
  });
}

console.log(JSON.stringify(database));