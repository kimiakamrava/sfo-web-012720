# Shiny JS (ES6 Features & More)

## Goals ✨

- [ ] Destructure 🤯
- [ ] Practice alternative ways of assigning values to keys 🗝
- [ ] Practice using the spread operator 🥯
- [ ] Survey new features of JavaScript and their old implementations 🕰
- [ ] Review the difference between function expressions and declarations 🍅
- [ ] Review the purpose and mechanics of callback functions ☎️
- [ ] Review scope 🌌
- [ ] Review hoisting 🏗

---

## What is ES6? 👽

> The standard for JavaScript is ECMAScript. ... On June 17, 2015, ECMA International published the sixth major version of ECMAScript, which is officially called ECMAScript 2015, and was initially referred to as ECMAScript 6 or ES6.

- Since ECMAScript 2015 (ECMAScript 6), new version of JS released yearly
- ES6 features:
  - `const`
  - Block-scoped variables and functions
  - Arrow functions
  - Default function parameters
  - String templating (`\${Hi mom!}`)
  - Simplified object creation
  - Class definition syntax with `class`
    - `get` and `set`
    - Inheritance with `extends`
  - Promises
- JS a little easier to read and write!
- Whatever isn't supported by major browsers can be transpiled

## Functions 🍅

### Anonymous vs. Named Functions, Function Expressions vs. Declarations 🥔

> 🤔 What does an anonymous function look like? A named function? Which is a function declaration? Which is a function expression? What are their respective traits?
> 🤓 An anonymous function doesn't have a name and can be created with a function expression. A named function can be created with a function expression or a function declaration. Named functions (i.e. function declarations) can be useful since they're hoisted and visible on the stack trace. Function expressions are easier to pass around as callback functions, and are not hoisted.

> 🤔 What kinds of functions are these?

```javascript
// Named Function
function iHaveAName() {
  console.log("Hi");
}

// Anonymous Function
const myFunc = function() {};
const myOtherFunc = () => {
  console.log("hi");
};

// Anonymous Function within .map
[1, 2, 3].map(function(num) {
  return num + 1;
});
```

```javascript
// Function Expression
const myFunction = () => console.log("hi");

// Function Declaration **always starts with the function keyword**
function myFunctionName() {
  console.log("hi from inside the function declaration");
}
```

### Arrow Functions 🥕

> An arrow function expression is a syntactically compact alternative to a regular function expression, although without its own bindings to the `this`, `arguments`, `super`, or `new.target` keywords.

> Two factors influenced the introduction of arrow functions: the need for shorter functions and the behavior of the this keyword.

- Skip writing `function`, and even `return`
- **Arrow functions do not have their own `this` value.**
  - `function` functions receive `this` automatically
  - `=>` functions take on the `this` of their lexical scope (`{}`)

### Passing Functions Around as Arguments (Callbacks) & ES6 Iterators (map, forEach, find)

```javascript
const names = ["dracular", "voldemort", "the hash slinging slasher"];

names.map(name => name.toUpperCase()); // ["DRACULAR", "VOLDEMORT", "THE HASH SLINGING SLASHER"]
names.map(function(name) {
  return name.toUpperCase();
});

names.forEach(name => console.log(name)); // logs each name
names.find(name => name.includes("volde")); // "voldemort"
```

## Scope 🌌

- Each function, when invoked, creates a new scope
- Block statements: Contrary to the `var` keyword, the `let` and `const` keywords support the declaration of local scope inside block statements.

```javascript
// Global scope
function someFunction() {
  // Local scope #1
  const anotherVar = "hi";

  function someOtherFunction() {
    // Local scope #2
    const myVar = "hi";
  }
}
// Global scope

function anotherFunction() {
  // Local scope #3
}

// Global scope

let tryAccessingMe;

if (true) {
  tryAccessingMe = "Now I'm a string";
  var youCanAccessMeOutside = "Hi from within the block";
  let dontTryToAccessMeOutside = "This won't work";
  const iAlsoStayWithinTheBlock = "Staying here";
}

youCanAccessMeOutside;
dontTryToAccessMeOutside;
iAlsoStayWithinTheBlock;
```

## Hoisting 🏗

- Hoisting: a _way of thinking_ about how JavaScript is run (not reality)
- Reality: variable and function declarations are stored in memory during compile phase (before execution phase)
- Hoisting: (some) variable and function declarations are "moved" to the top of your code
- **Only declarations are hoisted**_, not initializations..._
- Declarations are hoisted (functions & var variables)
- Neither `let`, `const` nor function expressions are hoisted

```javascript
hoistMe();

function hoistMe() {
  console.log("Hi from the function");
}

cantHoistMe();
const cantHoistMe = () => console.log("this wont work");

// This ↓ is the assignment which does not get hoisted
meToo = "Hi from the variable";
console.log(meToo); // 'Hi from the variable'
// This ↓ is the declaration, that's why it's ok to put it at the bottom
var meToo;

// THIS ↓ WILL NOT WORK (variable declaration is hoisted but assignment is not)
console.log(anotherOne);
var anotherOne = "hi";

// 'let' and 'const' variables are not hoisted in the same way that 'var' variables are
// Function expressions are also NOT hoisted
```

## Destructuring & Dynamic Object Keys 🤯

```javascript
const spaceship = {
  pilot: "elon musk",
  guidance: "marc zucc",
  chef: "gordon ramsay"
};

// How can we access the pilot inside the spaceship?
// 1. Dot notation
const pilot = spaceship.pilot;

// 2. Bracket notation
const pilot = spaceship["pilot"];

// 3. Destructuring
const { pilot, guidance, chef } = spaceship;

console.log(pilot); // 'elon musk'
console.log(chef); // 'gordon ramsay'

// More about bracket notation (dynamic object keys)
// If we need to use a variable as a key we have to use bracket notation to retrieve the value
const pilot = "pilot";
spaceship[pilot];

const jobs = ["pilot", "guidance", "chef"];
jobs.forEach(job => console.log(spaceship[job]));
```

## Key Value Assignment Shortcut 🗝

- If the name of the key is the same as the name of the variable we want to assign to that key we can use this shortcut

```JavaScript
const pizza = 'pepperoni';
const restaurant = 'Awesome SF Pizza';

// The long way
const pizzaObj = {
  pizza: pizza,
  restaurant: restaurant
}

// Shortcut
const pizzaObj2 = { pizza, restaurant };
```

## Spread Operator 🥯

> Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

- Expanded means taken out of its container

```javascript
// Spread operator with arrays
const nums = [1, 2, 3];

const mergedArray = [...nums, 4, 5]; // [1, 2, 3, 4, 5]
// If we don't use the spread operator we end up with a nested array
const nestedArray = [nums, 4, 5]; // [[1, 2, 3], 4, 5]

// We can slice arrays to copy them
let slicedArray = mergedArray.slice();
// The spread operator can also be used to copy arrays
let spreadArray = [...mergedArray];
// This is only a reference to the array
let lazyArray = mergedArray;

// We can use ... with functions!
function sum(x, y, z) {
  return x + y + z;
}

sum(...nums);

// Spread operator with objects
const pepperoni = { topping: "Pepperoni" };
const pizza = {
  ...pepperoni,
  price: "$8",
  size: "medium"
};
```

- Not to be confused with the rest parameter syntax!

> The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

```javascript
function multiply(...allTheNums) {
  return allTheNums.reduce((previous, current) => previous * current);
}

console.log(multiply(1, 2, 3));
```

---

## Resources 🪐

- Objects and Classes
  - [MDN: Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
  - [MDN: class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class)
- Functions
  - [MDN: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
  - [MDN: Arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- Miscellanea
  - [MDN: JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  - [MDN: Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
  - [MDN: Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
  - [MDN: Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
