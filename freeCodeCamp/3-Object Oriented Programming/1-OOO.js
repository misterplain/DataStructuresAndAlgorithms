//a property within an object can be a function

let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function () {
    return "The name of this duck is " + duck.name + ".";
  },
};
duck.sayName();

//perform the same action with the this keyword

let duck1 = {
  name: "Aflac",
  numLegs: 2,
  sayName: function () {
    return "The name of this duck is " + this.name + ".";
  },
};

//properties of a constructor function
// This constructor defines a Bird object with properties name, color, and numLegs set to Albert, blue, and 2, respectively. Constructors follow a few conventions:

// Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
// Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
// Constructors define properties and behaviors instead of returning a value as other functions might.

function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird();
blueBird.name = "Blueberry";

//pass properties

function Bird2(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let cardinal = new Bird2("Bruce", "red");

//use instance of to verify if that object was created with the constructor

let Bird3 = function (name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
};

let crow = new Bird3("Alexis", "black");
// console.log(crow instanceof Bird3); //true

//check if the instance has the properties

function Bird4(name) {
  this.name = name;
  this.numLegs = 2;
}

let duckk = new Bird4("Donald");
let canaryy = new Bird4("Tweety");

let ownProps = [];

for (let property in duckk) {
  if (duckk.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

//use prototype to add a property to all instances of an oject
Bird4.prototype.numFingers = 6;
// console.log(duckk.numFingers);

//check prototype props
let ownProps2 = [];
let prototypeProps2 = [];

for (let property in duckk) {
  if (duck.hasOwnProperty(property)) {
    ownProps2.push(property);
  } else {
    prototypeProps2.push(property);
  }
}

//use constructor property to determine what kind of instance this is

function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird4) {
    return true;
  } else {
    return false;
  }
}

// console.log(duckk.constructor === Bird4); //true

// a prototype can be added as an object to avoid repetition

Bird4.prototype = {
  numLegs: 2,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  },
};

//a prototype will erase the constructor property, so you must remember to add it to the prototype manually

Bird4.prototype = {
  constructor: Bird4,
  numLegs: 2,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  },
};

//check if the prototype from the constructor function is true or false

Bird4.prototype.isPrototypeOf(duckk); //true

//Bird is simply the prototype of a larger supertype of Object

Object.prototype.isPrototypeOf(Bird4.prototype); //true

//create a supertype so as not to repeat properties that will end up being prototypes

function Animal() {}

Animal.prototype = {
  constructor: Animal,
};

Animal.prototype.eat = function() {
    console.log("nom nom nom");
  };

//use this supertype to create new instances, best to use Object.create

function Dog() { }

Dog.prototype = Object.create(Animal.prototype)
let beagle = new Dog();

// console.log(beagle.eat()) // returns "nom nom nom"
