/**
 * AUTHOR: Shi-Hao Hong
 * Identify the result of 'this' based on the context provided
 */

/*
  SHOE FUNCTIONS: Look at the object and determine what 'this' is pointing at
*/ 

var SHOE_ASSIGNMENT = {
  FIX_ME: 'wrong answer',
  WINDOW: 'window',
  OBJECT: 'object'
};

var shoes = {
  brand: "Nike",
  someFunc: function(){
    console.log(this);
  }
};

//shoes.someFunc()
var shoeFunc1 =  SHOE_ASSIGNMENT.OBJECT; 

var shoes2 = {
  brand: 'Adidas',
  someFunc: function() {
    var closure = () => {
      console.log(this);
    };

    return closure();
  }
};

var shoeFunc2 = SHOE_ASSIGNMENT.OBJECT;

var shoes3 = {
  brand: "Puma",
  someFunc: function(){
    var closure = function(){
      console.log(this);
    };
    return closure();
  }
};

var shoeFunc3 = SHOE_ASSIGNMENT.WINDOW;

var shoes4 = {
  brand: "Puma",
  someFunc: function(){
    var self = this;
    var closure = function(){
      console.log(self);
    };
    return closure();
  }
};

var shoeFunc4 = SHOE_ASSIGNMENT.OBJECT;

/*
  COLOR FUNCTIONS: Look at the commented function and determine what is 'this' would point at if the function were called
*/ 

var FRUIT_ASSIGNMENT = {
  FIX_ME: 'wrong answer',
  APPLE: 'apple',
  ORANGE: 'orange',
  PEAR: 'pear',
  MANGO: 'mango',
  WINDOW: 'window'
};

var fn = function(one, two) {
  console.log(this, one, two);
};

var apple = {};
var orange = {};
var pear = {};
var mango = {};

// apple.method = fn;
// apple.method();
var fruitFunc1 = FRUIT_ASSIGNMENT.APPLE;

// fn(orange, pear);
var fruitFunc2 = FRUIT_ASSIGNMENT.WINDOW;

// fn.call(apple, orange, pear);
var fruitFunc3 = FRUIT_ASSIGNMENT.APPLE;

// apple.method.call(mango, orange, pear);
var fruitFunc4 = FRUIT_ASSIGNMENT.MANGO;

// setTimeout(fn, 1000);
var fruitFunc5 = FRUIT_ASSIGNMENT.WINDOW;

// setTimeout(apple.method, 1000);
var fruitFunc6 = FRUIT_ASSIGNMENT.WINDOW;

// setTimeout(function() {
//   apple.method(orange, pear);
// });
var fruitFunc7 = FRUIT_ASSIGNMENT.APPLE;