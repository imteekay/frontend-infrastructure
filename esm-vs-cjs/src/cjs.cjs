// Throws an exception: Must use import to load ES Module
// const { sum } = require('./esm.mjs');

// Throws an exception: SyntaxError: Cannot use import statement outside a module
// import { sum } from './esm.mjs';

function minus(num1, num2) {
  return num1 - num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function testDefault() {
  console.log('default export');
}

let result;

result = minus(2, 1);
console.log('minus - result', result);

module.exports = testDefault;
module.exports.minus = minus;
module.exports.divide = divide;
