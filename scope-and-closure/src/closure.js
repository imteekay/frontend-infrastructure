// Simple Closures
function makeFunction() {
  const name = 'TK';
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunction = makeFunction();
myFunction(); // TK

const makeFunctionArrowFn1 = () => {
  const name = 'TK';
  return () => console.log(name);
};

const makeFunctionArrowFn2 = (name = 'TK') => {
  return () => console.log(name);
};

const makeFunctionArrowFn3 =
  (name = 'TK') =>
  () =>
    console.log(name);

const fn1 = makeFunction();
fn1(); // TK

const fn2 = makeFunction('Kazumi');
fn2(); // Kazumi

// Multiple Closure
function generator() {
  let counter = 0;

  function increment() {
    console.log(counter);
    counter++;
  }

  return increment;
}

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

// Closure for private variables
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
