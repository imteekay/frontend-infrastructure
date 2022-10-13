<samp>

# Namespace

## Setup

To setup your environment: install all dependencies

```bash
yarn
```

And start the server: run the page and the scripts:

```bash
yarn dev:namespace
```

## Namespace

After learning about [Scope & Closure](../scope-and-closure) and [IIFEs](../iife), we can bring them together and combine with an even more powerful concept: namespaces.

We use objects as namespaces to improve the module pattern. To bring this concept to life, let's see an example by building a simple web page.

The project idea is to provide a web page and enable users to calculate: it can sum, subtract, divide, and multiply.

Let's build it!

```html
<html>
  <head>
    <title>Namespace</title>
    <link rel="icon" href="/favicon.jpeg" />
  </head>
  <body>
    <input id="num1" value="0" />
    <select id="operator">
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="*">*</option>
      <option value="/">/</option>
    </select>
    <input id="num2" value="0" />
    <button id="calculate">calculate!</button>
    <span id="result">0</span>

    <script src="./utils.js"></script>
    <script src="./calculate.js"></script>
  </body>
</html>
```

It all starts with the HTML. Let's unpack what we have here.

- input `num1`: input for the first number in the calculation
- select `operator`: users choose if they want to sum, subtract, multiply, or divide
- input `num2`: input for the second number in the calculation
- button `calculate`: to calculate the operation
- span `result`: to show the result of the calculation

And to finish, we'll have two scripts:

- `utils.js`: out utility library with some math operations
- `calculate.js`: provide the behavior to calculate the operations in the page

Let's start with the `utils.js`. The API we want to use is to be able to use something like this:

```javascript
Utils.Math.sum(1, 2); // 3
Utils.Math.minus(4, 2); // 2
Utils.Math.multiply(2, 2); // 4
Utils.Math.divide(2, 2); // 1
```

One approach is creating an IIFE to pass the functions behavior for an object.

```javascript
const Utils = {};

Utils.Math = (() => {
  function sum(num1, num2) {
    return num1 + num2;
  }

  function minus(num1, num2) {
    return num1 - num2;
  }

  function multiply(num1, num2) {
    return num1 * num2;
  }

  function divide(num1, num2) {
    return num1 / num2;
  }

  return {
    sum,
    minus,
    multiply,
    divide,
  };
})();
```

- create the `Utils` object
- assign the `sum`, `minus`, `multiply`, and `divide` to the `Math` object
- use the IIFE to handle the attribution of functions to the `Math` object

Another simple way of doing this is to create the `Utils` object with the `Math` attribute as an object and `sum`, `minus`, `multiply`, and `divide` as attributes.

```javascript
const Utils = {
  Math: {
    sum: function (num1, num2) {
      return num1 + num2;
    },
    minus: function (num1, num2) {
      return num1 - num2;
    },
    times: function (num1, num2) {
      return num1 * num2;
    },
    multiply: function (num1, num2) {
      return num1 / num2;
    },
  },
};
```

Having namespaces makes it very flexible to separate "modules" (not real modules). If in the future we want to have utilities related to strings, we could have another key in the `Utils` object and build all the functions we want for it.

Now we can load this `utils.js` script in the page.

```html
<html>
  ...
  <body>
    ...
    <script src="./utils.js"></script>
  </body>
</html>
```

Now that we have the math functions to do the calculation, we just need cover the behavior when users choose the specific operation and when they click the calculate button to show the result.

```javascript
(function () {
  const result = document.getElementById('result');
  const calculateButton = document.getElementById('calculate');

  const operationToFn = {
    '+': Utils.Math.sum,
    '-': Utils.Math.minus,
    '*': Utils.Math.multiply,
    '/': Utils.Math.divide,
  };

  calculateButton.addEventListener('click', () => {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    const resultValue = operationToFn[operator](num1, num2);
    result.innerHTML = resultValue;
  });
})();
```

Here's the code for the `calculate.js` file. What are we doing?

- get the `result` span and the `calculate` button: we'll use them later
- create a map to execute the correct operation: when choosing the select option, we use the value to map to the specific math function we built earlier
- add a click event to the `calculate` button.
  - get the values from both `num1` and `num2` inputs: they are strings, so we need to transform them into numbers to be able to calculate the result
  - get the operator from the select
  - use the `operationToFn` to get the math function and do the calculation
  - assign the result value into the `result` element

To finish this part, we should just add the script to the HTML.

```html
<html>
  ...
  <body>
    ...
    <script src="./utils.js"></script>
    <script src="./calculate.js"></script>
  </body>
</html>
```

This part is pretty important. In the [JavaScript as Scripts](../javascript-as-scripts), we mentioned about how the scripts' order matter. This is no different. We need to define the `Utils` object first (by loading and executing the `utils.js`) and then we can reference this object from the global scope. `calculate.js` should be called later than the `utils.js`.

Now the page has all the necessary behavior to function in the right way.

</samp>
