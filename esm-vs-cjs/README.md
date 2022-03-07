# ESM vs CJS

Studies on the differences between [ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) and [CommonJS](https://nodejs.org/docs/latest/api/modules.html).

## ESM: ES Modules

- It only imports modules using the `import` syntax. You can't use `require` syntax. It would throw an error `ReferenceError: require is not defined in ES module scope, you can use import instead`.
- Bundlers don’t know how to work with ESM modules that use the `require` syntax.
- Can't use named import CommonJS modules. Only default import.
- CJS is the default module system. To change it to ESM, set the `type` from `package.json` to `module`.

## CJS: CommonJS

- It only requires modules using the `require` syntax. You can't use `import` syntax.
- Can’t use ESM modules in CJS. It throws an exception: Must use import to load ES Module
- In Node, CJS is the default module system. By default, the `package.json` uses `commonjs` as the `type`'s value.
- The `require` syntax is synchronous: there's no callback or promise
