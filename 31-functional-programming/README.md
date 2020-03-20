# Intro to Functional Programming 🛠

## Goals 🏙

- [ ] Identify functions as first-class objects 🔭
- [ ] Review functional programming paradigms 🧐
- [ ] Create pure and higher-order functions 🏗
- [ ] Compare functional programming to OOP ⚖️
- [ ] Identify and build IIFEs 💣

---

## Functions as (first-class) objects 🔭

> In JavaScript, functions are first-class objects, because they can have properties and methods just like any other object. What distinguishes them from other objects is that functions can be called. In brief, they are Function objects.

- JavaScript functions are `Function` objects
  - Functions can be assigned to variables
  - Functions can be referenced in arrays
  - Functions can be passed as arguments or returned from other functions (higher-order functions)
  - There's a distinction between referring to a function and calling a function
- Since functions are first-class objects, JavaScript can be written functionally

> "A programming language is said to have First-class functions when **functions in that language are treated like _any other variable_.** For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable."

- Functions can be assigned to variables:

```javascript
const eatDonut = function() {
  console.log("I love to eat donuts!");
};

eatDonut();
```

```javascript
const miss = () => console.log("Miss...");
const hit = () => console.log("Hit!");

let action = miss;
if (Math.random() <= 1 / 6) {
  action = hit;
}

action();
```

- Functions can be passed as arguments or returned from other functions (higher-order functions)
- A higher order function is a function that takes a function as an argument, or returns a function
- Callback functions: functions passed as a parameter to other functions and called later

```javascript
function delay(cb, waitTime) {
  let start = Date.now();
  let now = Date.now();
  let delta = now - start;

  while (delta < waitTime) {
    now = Date.now();
    delta = now - start;
  }

  cb();
}

delay(() => {
  console.log("ding!");
}, 3000);
```

- Functions can also return other functions

```javascript
// Return a function
function multiplyBy(multiplier) {
  return function(num) {
    return multiplier * num;
  };
}

multiplyBy(2)(3);
const double = multiplyBy(2);
double(3);
```

- Notice the `()()` in the example above. Invoking `outerFn` returns a function. In order to execute the return value of `outerFn` I have to use `()` again.

## Functional Programming Paradigms 🧐

> Functional programming (often abbreviated FP) is the process of building software by composing pure functions, avoiding shared state, mutable data, and side-effects. Functional programming is declarative rather than imperative, and application state flows through pure functions. Contrast with object oriented programming, where application state is usually shared and colocated with methods in objects.

- A paradigm is a way of thinking
- You've probably already implemented functional programming!

### Imperative (Procedural) vs. Declarative (Functional) ⚖️

[Imperative vs. Declarative Programming (in 60 seconds) - YouTube](https://www.youtube.com/watch?v=JqvMTwnbhnA)

- Imperative (Procedural) Programs spend lines of code describing the specific steps used to achieve the desired results — the flow control
  - _**How**_ to do things.

```javascript
function double(arr) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    results.push(arr[i] * 2);
  }

  return results;
}
```

- Declarative (Functional) Programming abstracts away the flow control process, and instead spends lines of code describing the data flow: **What** to do. The _how_ gets abstracted away.

```javascript
function double(arr) {
  return arr.map(item => item * 2);
}
```

### Pure Functions ❄️

- A _pure_ function:
  - Always returns the same output given the same input
  - Has no side-effects

```javascript
// Pure function
function add(a, b) {
  return a + b;
}

// Non-pure function
let id = 0;

function addNumsToId(a, b) {
  return (id += a + b);
}
```

- A _pure_ function also avoids sharing state

> Shared state is any variable, object, or memory space that exists in a shared scope, or as the property of an object being passed between scopes.

```javascript
// SHARED STATE
// With shared state, the order in which function calls are made changes the result of the function calls.
let x = 2;
const x1 = () => (x += 1);
const x2 = () => (x *= 2);
x1();
x2();
console.log(x); // 6

// NOT SHARED STATE
// It doesn't matter how we call our functions, we will always get the same results
const x = 2;
const x1 = y => y + 1;
const x2 = y => y * 2;
x2(x);
x1(x);
console.log(x1(x2(x))); // 5
```

- Immutability == Avoid mutating state

> An immutable object is an object that can’t be modified after it’s created. Conversely, a mutable object is any object which can be modified after it’s created.

- Pure functions can be used to perform **Function Composition**
  - The process of combining two or more functions in order to produce a new function or perform some computation `f(g(x))`
- A pure function avoids _side effects_
  - A side effect is any application state change that is observable outside the called function other than its return value.

## IIFEs "iffys" 💣

- Immediately Invoked Function Expressions... wrap it in parenthesis

```javascript
let one = function() {
  console.log(1);
};
```

```javascript
(function() {
  console.log("Immediate!");
})();
```

- Why?! Make private stuff in JavaScript
- Cut down on namespace pollution

### Closure 🧘🏿‍♂️

Closure is when a function is able to “remember” (or access) its lexical scope (the variables outside of itself) even when that function is executed outside that lexical scope (in a different scope).

```javascript
// At the time that the `waitASec` function runs, the `ask` function has already finished, and the variable `question` should have gone away, but it didn't because closure preserved it
function ask(question) {
  setTimeout(function waitASec() {
    console.log(question);
  }, 1000);
}
ask("What is closure?");
```

## Benefits of Functional Programming

- Easier to debug
- Consistency
- Easier to test
- Easier to read
- Easier to refactor
- More flexible programs

## Functional vs. Object-Oriented Programming 🚀

| Topic          | FP                                  | OOP                             |
| :------------- | :---------------------------------- | :------------------------------ |
| **Definition** | Emphasizes evaluations of functions | Based on concept of objects     |
| **Data**       | Immutable                           | Mutable                         |
| **Model**      | Declarative (What)                  | Imperative (How)                |
| **Execution**  | Any order                           | Particular order                |
| **Iteration**  | Recursion                           | Loops                           |
| **Elements**   | Variables and Functions             | Objects and Methods             |
| **Use**        | Few things with more operations     | Many things with few operations |

---

## Takeaways

- Functional programming favors:
  - Pure functions instead of shared state & side effects
  - Immutability over mutable data
  - Function composition over imperative flow control
  - Lots of generic, reusable utilities that use higher order functions to act on many data types instead of methods that only operate on their colocated data
  - Declarative rather than imperative code (what to do, rather than how to do it)
  - Expressions over statements
  - Containers & higher order functions

## Resources

- [MDN: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
- [MDN Article on First Class Functions](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)
- [Medium: What is Functional Programming?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)
- [EDUCBA: Functional Programming vs. OOP](https://www.educba.com/functional-programming-vs-oop/)
