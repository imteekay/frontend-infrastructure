import escodegen from 'escodegen';
import { Parser } from './parser.js';
import { TreeShaker } from './tree-shaker.js';

// create a new instance of Parser and TreeShaker
// initalized with our entry point: module1
const shakeItBaby = new TreeShaker(new Parser('1'));

// make it one big bundle with new modules
const moduleStringOptimized = shakeItBaby.Modules.map((m) =>
  escodegen.generate(m),
).join('');

// also make one bundled version with the old modules
// note: we have to specifiy the module prop on the module object
const moduleStringUnshaked = shakeItBaby.Unshaked.map((u) =>
  escodegen.generate(u.module),
).join('');

// have a look at how different they look
console.log('------ // ------');
console.log('bundle not optimized\n');
console.log(moduleStringUnshaked, '\n');

console.log('------ // ------');
console.log('bundle optimized\n');
console.log(moduleStringOptimized);

// let's count the characters
//  do a naive comparison => in percent
const impr = Math.floor(
  (1 - moduleStringOptimized.length / moduleStringUnshaked.length) * 100,
);

// IMPROVEMENT:  39% 🎉
console.log(`Improvement: ${impr}% 🎉`);
