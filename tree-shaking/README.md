<samp>

# Tree Shaking

## Setup

Install dependencies

```bash
yarn
```

Run code

```bash
yarn dev
```

## Dead Code Elimination

### Not used

When the value is defined but not used anywhere.

- not exported and not imported
- not exported and not used in the file/module

### Unreachable

Code that's not reachable in the scope.

- Code after a return statement

```javascript
function test() {
  return 1;
  // this constant is not reachable
  const a = 'not reachable';
}
```

- Code that is in a unreachable branch (if statement, ternary)

```javascript
if (true) {
  console.log('hey!');
} else {
  // this console.log is not reachable
  console.log('not reachable');
}
```

### Dead store

When we store data in a variable but this assignment didn't have a real effect because the same variable will be assigned later and the current value is not used for anything.

```javascript
function test() {
  let a;
  a = 1; // this is a dead store
  a = 2;
  return a;
}
```

</samp>
