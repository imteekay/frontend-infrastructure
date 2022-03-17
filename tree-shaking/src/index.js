import escodegen from 'escodegen';
import { Parser } from './parser.js';
import { TreeShaker } from './tree-shaker.js';

const parser = new Parser('1');
const modules = parser.parse();
const treeShaker = new TreeShaker(modules);

// make it one big bundle with new modules
const moduleStringOptimized = treeShaker.modules
  .map((m) => escodegen.generate(m))
  .join('');

// also make one bundled version with the old modules
// note: we have to specifiy the module prop on the module object
const moduleStringUnshaked = treeShaker.unshaked
  .map((u) => escodegen.generate(u.module))
  .join('');

// have a look at how different they look
console.log('------ Bundle not optimized ------\n');
console.log(moduleStringUnshaked, '\n');

console.log('------ Bundle optimized ------\n');
console.log(moduleStringOptimized);

// let's count the characters
//  do a naive comparison => in percent
const impr = Math.floor(
  (1 - moduleStringOptimized.length / moduleStringUnshaked.length) * 100,
);

// IMPROVEMENT:  39% 🎉
console.log(`\nImprovement: ${impr}% 🎉\n`);
