import escodegen from 'escodegen';
import { Parser } from './parser.js';
import { TreeShaker } from './tree-shaker.js';

const parser = new Parser('1');
const modules = parser.parse();
const treeShaker = new TreeShaker(modules);

function generateBundleString(modules, generateCode) {
  return modules.map((module) => generateCode(module)).join('');
}

function calculateOptimization(optimizedBundle, bundle) {
  return Math.floor((1 - optimizedBundle.length / bundle.length) * 100);
}

const optimizedBundle = generateBundleString(treeShaker.modules, (module) =>
  escodegen.generate(module),
);

const bundle = generateBundleString(treeShaker.unshaked, (module) =>
  escodegen.generate(module.module),
);

console.log('-------- Bundle not optimized ------\n');
console.log(bundle, '\n');

console.log('-------- Bundle optimized --------\n');
console.log(optimizedBundle, '\n');

const improvement = calculateOptimization(optimizedBundle, bundle);
console.log('-------- Optimization --------\n');
console.log(`\nImprovement: ${improvement}% 🎉\n`);
