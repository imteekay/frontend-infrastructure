import cjs from './cjs.cjs';

export function sum(num1, num2) {
  return num1 + num2;
}

let result;

result = cjs.minus(2, 1);
console.log('minus - result', result);

result = sum(2, 1);
console.log('sum - result', result);

// cjs is the testDefault function: the default export
cjs();

export default sum;
