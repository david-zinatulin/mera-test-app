var faker = require('faker');

<<<<<<< Updated upstream
var database = { products: [] };

for (var i=1; i<=1000; i++) {
  database.products.push({
    id: i,
    name: faker.internet.userName(),
    password: faker.internet.password()  
=======
var database = { users: [] };

for (var i=1; i<=10; i++) {
  database.users.push({
    id: i,
    username: faker.internet.userName(),
    password: faker.internet.password()
>>>>>>> Stashed changes
  });
}

console.log(JSON.stringify(database));