<samp>

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

In the [JavaScript as Scripts](../javascript-as-scripts) mini project, we saw that executing scripts would create functions, variables, and so on in the global scope. With IIFEs, we avoid polluting the global scope.

Before, the `users` was accessible in the global scope. The browser loads and executes the `load-users.js` script and attaches the `users` variable to the global scope.

```javascript
const users = ['TK', 'Kazumi', 'Kaio'];
```

With the IIFE, we can make the `users` private and make a getter function accessible in the global scope.

```javascript
const User = (function () {
  const users = ['TK', 'Kazumi', 'Kaio'];

  function getUsers() {
    return users;
  }

  return { getUsers };
})();
```

Here we just use an IIFE to make the `users` variable private and expose only a getter function.

So now, we won't be able to access the `users` variable outside the IIFE anymore. To use the data, we need to call the `getUsers` function.

```javascript
Users.getUsers();
```

The `Users` is accessible in the global scope together with the public function `getUsers` but now the `users` data is private.

And we also use IIFE for the `list-users.js` script. We don't need to expose functions and variables it creates. It just need to execute the script, meaning: list users and add event listeners to remove users from the list.

```javascript
(function () {
  const ul = document.getElementById('list');

  User.getUsers().forEach((user, index) => {
    const listItem = `li-${index}`;
    const deleteButton = document.createElement('button');

    const li = document.createElement('li');

    li.innerHTML = user;
    li.setAttribute('id', listItem);

    deleteButton.innerHTML = 'X';
    deleteButton.addEventListener('click', () => {
      li.remove();
    });

    li.appendChild(deleteButton);

    ul.appendChild(li);
  });
})();
```

Before, the `listUsers` was exposed in the global scope but now it is an anonymous function and the script is only executed, no variables or functions attached to the global scope.

## Resources

- [Grouping Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Grouping#using_the_grouping_operator)
- [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)

</samp>
