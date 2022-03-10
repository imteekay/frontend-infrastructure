// import A from './A.mjs'; // SyntaxError: The requested module './A.mjs' does not provide an export named 'default'
import { A } from './A.mjs';

console.log('A', A);
