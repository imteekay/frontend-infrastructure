# Scope & Closure

## Dev

To run tests from the scope file

```bash
yarn dev:scope
```

To run tests from the closure file

```bash
yarn dev:closure
```

## Scope

Scope in JavaScript is basically a context of execution, a place where values and expressions (variables, constants, functions, etc) can be referenced.

In the hierarchy of scopes, a child scope has access to the parent scope, but not vice versa.

```javascript
const PI = 3.14;

function calculateArea(r) {
  return PI * r * r;
}

calculateArea(1); // 3.14
```

In this example, we have the "global" scope where we define `PI` and the function `calculateArea`. As it was said before, the child scope has access to the parent scope, this is why the `calculateArea` function can use the `PI` constant within it. Where you define your functions determines what variables your function has access to when you call it.

Invoking the function and passing the value `1`, it will result in `3.14`. If the function scope didn't have access to the parent scope (the "global" scope), `PI` wouldn't be defined and node would raise an error exception: `Uncaught ReferenceError: PI is not defined`.

If we do the other way around, meaning, trying to access a constant defined in a child scope from the parent scope, it will raise an error exception.

```javascript
function functionScope() {
  const TEST = 'test';
}

TEST; // ReferenceError: TEST is not defined
```

`TEST` is only defined and accessible to the `functionScope` function, not for the "global" scope.

## Closure

As MDN web docs defines:

> "A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment)."

Basically, every time a function is created, a closure is also created and it gives access to all state (variables, constants, functions, etc). The surrounding state is known as the `lexical environment`.

Let's show a simple example:

```javascript
function makeFunction() {
  const name = 'TK';
  function displayName() {
    console.log(name);
  }
  return displayName;
}
```

What do we have here?

- The main function called `makeFunction`
- A constant named `name` assigned with a string `'TK'`
- The definition of the `displayName` function (that just log the `name` constant)
- And finally the `makeFunction` returns the `displayName` function

This is just a definition of a function. When we call the `makeFunction`, it will create everything within it: constant and function in this case.

As we know, when the `displayName` function is created, the closure is also created and it makes the function aware of the environment, in this case, the `name` constant. This is why we can `console.log` the `name` without breaking anything. The function knows about the lexical environment.

```javascript
const myFunction = makeFunction();
myFunction(); // TK
```

Great! It works as expected! The return of the `makeFunction` is a function that we store it in the `myFunction` constant, call it later, and displays `TK`.

We can also make it work as an arrow function:

```javascript
const makeFunction = () => {
  const name = 'TK';
  return () => console.log(name);
};
```

But what if we want to pass the name and display it? A parameter!

```javascript
const makeFunction = (name = 'TK') => {
  return () => console.log(name);
};

// Or a one-liner
const makeFunction =
  (name = 'TK') =>
  () =>
    console.log(name);
```

Now we can play with the name:

```javascript
const myFunction = makeFunction();
myFunction(); // TK

const myFunction = makeFunction('Kazumi');
myFunction(); // Kazumi
```

Our `myFunction` is aware of the arguments passed: default or dynamic value.
The closure does make the created function not only aware of constants/variables, but also other functions within the function.

So this also works:

```javascript
const makeFunction = (name = 'TK') => {
  const display = () => console.log(name);
  return () => display();
};

const myFunction = makeFunction();
myFunction(); // TK
```

The returned function knows about the `display` function and it is able to call it.

One powerful technique is to use closures to build "private" functions and variables.

What if we want to build a Stack data structure using only functions. Let's see how it would work.

The main API is:

- `push`: add an item to the first place of the stack
- `pop`: remove the first item from the stack
- `peek`: get the first item from the stack
- `isEmpty`: verify if the stack is empty
- `size`: get the number of items the stack has

We could clearly create a simple function to each "method" and pass the stack data to it. It use/transform the data and return it.

But we can also create a private stack data and exposes only the API methods. Let's do this!

```javascript
const buildStack = () => {
  let items = [];

  const push = (item) => (items = [item, ...items]);
  const pop = () => (items = items.slice(1));
  const peek = () => items[0];
  const isEmpty = () => !items.length;
  const size = () => items.length;

  return {
    push,
    pop,
    peek,
    isEmpty,
    size,
  };
};
```

As we created the `items` stack data inside our `buildStack` function, it is "private". It can be accessed only within the function. In this case, only the `push`, `pop`, etc could touch the data. And this is what we're looking for.

And how do we use it? Like this:

```javascript
const stack = buildStack();

stack.isEmpty(); // true

stack.push(1); // [1]
stack.push(2); // [2, 1]
stack.push(3); // [3, 2, 1]
stack.push(4); // [4, 3, 2, 1]
stack.push(5); // [5, 4, 3, 2, 1]

stack.peek(); // 5
stack.size(); // 5
stack.isEmpty(); // false

stack.pop(); // [4, 3, 2, 1]
stack.pop(); // [3, 2, 1]
stack.pop(); // [2, 1]
stack.pop(); // [1]

stack.isEmpty(); // false
stack.peek(); // 1
stack.pop(); // []
stack.isEmpty(); // true
stack.size(); // 0
```

So, when the stack is created, all the functions are aware of the `items` array. But outside the function, we can't access this data. It's private. We just modify the data by using the stack builtin API.

It also important to understand that each time a function is returned from another function, it's created their own closure with the lexical environment, so if we return the function multiple times, each function will have their own closure.

Let's see an example.

```javascript
function generator() {
  let counter = 0;

  function increment() {
    console.log(counter);
    counter++;
  }

  return increment;
}
```

Here we have a `generator` function that returns a `increment` function. As we know now, the `increment` function has access to the `counter` variable because of the closure.

```javascript
const increment = generator();

increment(); // console.log -> 0
increment(); // console.log -> 1
increment(); // console.log -> 2
increment(); // console.log -> 3
```

If we invoke the `generator` function, we get the `increment` function. And if the `increment` function is called, it will log the `counter` and then increment the `counter` by 1. Everytime it's called, the `counter` has a different value.

If we invoke the `generator` function two times, it creates two `increment` functions with their own closure and lexical environment.

```javascript
const increment = generator();

increment(); // console.log -> 0
increment(); // console.log -> 1
increment(); // console.log -> 2
increment(); // console.log -> 3

const anotherIncrement = generator();

anotherIncrement(); // console.log -> 0
anotherIncrement(); // console.log -> 1
anotherIncrement(); // console.log -> 2
anotherIncrement(); // console.log -> 3
```

Now we have `increment` and `anotherIncrement` functions and as they have their own closure, the `counter` starts with the value 0 in both functions. If they shared the same closure, the `counter` should start with 3 in the first call of `anotherIncrement`.
