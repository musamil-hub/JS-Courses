'use strict';

// Constructor Functions and the new Operator
const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
  
    // Never to this!
    // this.calcAge = function () {
    //   console.log(2037 - this.birthYear);
    // };
  };
  
  const User= function(name,password){
    this.name=name;
    this.password=pass;
  };
  
  const mohan=new User()


  const jonas = new Person('Jonas', 1991);
  console.log(jonas);
  
  // 1. New {} empty objectis created
  // 2. function is called, this = {}
  // 3. {} linked to prototype
  // 4. function automatically return {}
  
  const matilda = new Person('Matilda', 2017);
  const jack = new Person('Jack', 1975);
  console.log(matilda,jack);
  
  console.log(jonas instanceof Person);
  
  Person.hey = function () {
    console.log('Hey there 👋');
    // console.log(this);
  };
  Person.hey();

// Prototypes
console.log('------prototype------');
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));


// .prototyeOfLinkedObjects
console.log('------prototyeOfLinkedObjects------');
Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));