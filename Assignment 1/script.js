//******* 1 : ARRAY OPERATIONS ********

// 1
let fruits = [];

// 2
fruits = ['apple', 'banana', 'orange'];

// 3
fruits.splice(0, 1);

// 4
fruits.push('grape');

// 5
fruits.splice(1, 1, 'pear');

// 6
console.log(fruits);

//******* 2 : Object OPERATIONS ********

// 1
let person = {};

// 2
person = {
  name: 'john',
  age: 30,
  city: 'New York',
};

// 3
delete person.age;

// 4
person.job = 'Engineer';

// 5
person.city = 'San Francisco';

// 6
console.log(person);

//******* 3 : ARRAY OF Object OPERATIONS ********

// 1
let cars = [];

// 2
cars = [
  {
    make: 'Toyota',
    model: 'Camry',
    year: 2018,
  },
  {
    make: 'Toyota',
    model: 'Camry',
    year: 2018,
  },
  {
    make: 'Toyota',
    model: 'Camry',
    year: 2018,
  },
];

// 3
cars.splice(0, 1);

// 4
cars.push({ make: 'Honda', model: 'Civic', year: 2020 });

// 5
cars[1].model = 'Accord';

// 6
console.log(cars);
