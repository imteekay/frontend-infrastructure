# IIFE: Immediately Invoked Function Expression

## Setup

To setup your environment: install all dependencies

```bash
yarn
```

And start the server: run the page and the scripts:

```bash
yarn dev:iife
```

## IIFE

IIFE stands for Immediately Invoked Function Expression which means it's a function expression that self execute. It is also known as a Self-Executing Anonymous Function.

To understand the concept, let's see the syntax:

```javascript
(function () {
  // execute something here
  // everything created in this scope
  // will not be accessible in the global scope
})();
```

First we have the [Grouping operator ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Grouping).

This concept is super simple. Let's see an example using the grouping operator to override the operator precedence.

```javascript
const a = 1;
const b = 2;
const c = 3;

// default precedence: execute the `b * c` calculation first and then sum to `a`
a + b * c; // 7

// evaluated by default like this
a + b * c; // 7

// using the grouping operator to overriding precedence
// addition occurs before multiplication
(a + b) * c; // 9
```

For IIFEs, we also group an expression. In this case, the expression is an anonymous function. This part is crucial, first because it allows the JavaScript engine to execute the function when using the `()` to call the anonymous function. And second because everything created inside the grouping operator (lexical scope) will only be accessible from within not outside the grouping operator, which means, we don't create anything in the global scope.

Before, we didn't have a proper approach for modules in JavaScript. We used IIFEs as a module pattern.

In this mini project, I want to show an example of using IIFEs as a module pattern in JavaScript.

In the [Simple Scripts](simple)

## Resources

- [Grouping Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Grouping#using_the_grouping_operator)
