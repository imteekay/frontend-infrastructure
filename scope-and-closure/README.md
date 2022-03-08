# Scope & Closure

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
