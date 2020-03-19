// Rest operator
function multiply(...allTheNums) {
  return allTheNums.reduce((previous, current) => previous * current);
}

console.log(multiply(1, 2, 3));

// Spread Operator
const pepperoni = { topping: "Pepperoni" };
const pizza = {
  ...pepperoni,
  price: "8"
};
console.log(pepperoni);
console.log(pizza);

const nums = [1, 2, 3];
const nums2 = [5, 6, 7];
const mergedArray = [...nums, ...nums2];
console.log(mergedArray);

// Key value Assignment shortcut
// const pizza = "pepperoni";
// const restaurant = "Awesome SF Pizza";

// const pizzaObj = {
//   pizza: pizza,
//   restaurant: restaurant
// };

// const pizzaObj = { pizza, restaurant };

// Dynamic Object Keys
const spaceship = {
  pilot: "elon musk",
  guidance: "marc zucc",
  chef: "gordon ramsay"
};

const jobs = ["pilot", "guidance", "chef"];
jobs.forEach(job => console.log(spaceship[job]));

const myPilot = "pilot";

const pilot = spaceship[myPilot];
console.log(pilot);

// DESTRUCTURING
// const jobs = ["pilot", "guidance", "chef"];
// const [x, y, z] = jobs;
// console.log(z);

// const spaceship = {
//   pilot: "elon musk",
//   guidance: "marc zucc",
//   chef: "gordon ramsay",
//   anotherObj: {
//     another: "value",
//     second: "potato"
//   }
// };

// const {
//   anotherObj,
//   anotherObj: { another }
// } = spaceship;

// console.log(anotherObj);

// HOISTING
// console.log(myConst);
// const myConst = "hello";
// console.log(myConst);

// console.log(myLet);
// let myLet = "hi";
// console.log(myLet);

// console.log(myVariable);
// var myVariable = "hello";
// console.log(myVariable);

// imHoisted();

// function imHoisted() {
//   console.log("you can use me before im defined");
// }

// SCOPE
// Blocks create scope (but only sometimes)
if (true) {
  tryAccessingMe = "Now I'm a string";
  var youCanAccessMeOutside = "Hi from within the block";
  let dontTryToAccessMeOutside = "This won't work";
  const iAlsoStayWithinTheBlock = "Staying here";
}

// console.log(tryAccessingMe);

// Functions create scope
// Global scope
// let myLet = "hello";
// function myFunction() {
//   // Local scope #1
//   myLet = "bye";

//   function anotherFunction() {
//     // Local scope #2
//     // anotherVariable is only accessible inside this function
//     const anotherVariable = "test";

//     // Don't create global variables like this:
//     myGlobalVar = "Im global";
//   }

//   anotherFunction();
// }
// myFunction();
// console.log(anotherVariable);
// console.log(myLet);

// // FUNCTIONS

// // Function Expression
// const myFunctionExpression = () => {
//   console.log("%c Im inside the function expression", "color: green");
// };

// myFunctionExpression();

// // Anonymous function
// const myAnonymousFunction = function() {
//   console.log("%c Im inside an anonymous function", "color: green");
// };

// // Function Declaration (in this case also a named function)
// myFunction();

// function myFunction() {
//   console.log("%c Im inside the function declaration", "color: green");
// }
