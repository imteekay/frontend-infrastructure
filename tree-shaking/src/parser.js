import esprima from 'esprima';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class Parser {
  // simply set some default values
  constructor(entryModule) {
    this.importedVals = new Map();
    this.exportedVals = [];
    this.modulesSet = [];
    this.module = entryModule;
    // bind bc no transform plugin
    this.followImportSources = this.followImportSources.bind(this);
  }

  // pull in the path and parse its content
  parseModule(relPath) {
    const codeBuffer = fs.readFileSync(__dirname + relPath);
    return esprima.parseModule(codeBuffer.toString());
  }

  // traverse the tree of module
  // look for ImportDeclaration type
  // follow imports recursively
  extractImports(module) {
    const extractedImports = this.traverseSyntaxTree({
      AST: this.parseModule(`/modules/${module}.js`),
      extractType: 'ImportDeclaration',
      recursiveCaller: this.followImportSources,
      extractor: (node) => {
        // look for the imported key and return its name
        return node.specifiers.map((val) => val.imported.name);
      },
    });
    // put the extracted import into our hashmap
    extractedImports.forEach((imp) =>
      this.importedVals.set(imp, imp.toString()),
    );
    return this.importedVals;
  }

  // define the function to follow import sources
  // either push the module name into the Modules Map
  // or don't do anything
  followImportSources({ source }) {
    const followModule = source.value.replace('./', '');
    followModule.length
      ? (() => {
          this.extractImports(followModule);
          this.modulesSet.push({
            name: followModule,
            module: this.parseModule(`/modules/${followModule}.js`),
          });
        })()
      : undefined;
  }

  // traverse the AST and do whatever
  //extractImports function told us to do
  traverseSyntaxTree({
    AST,
    extractType,
    extractor,
    recursiveCaller = (noop) => noop,
  }) {
    const { body } = AST;
    let extractedNodes = [];
    body.forEach((node) => {
      if (extractType === node.type) {
        const extractedVals = extractor(node);
        extractedNodes = [...extractedNodes, ...extractedVals];
        recursiveCaller(node);
      }
    });
    return extractedNodes;
  }

  // either return importedVals if we had them already
  // or trigger the extractImports fn
  get Imports() {
    return this.importedVals.length
      ? this.importedVals
      : this.extractImports(this.module);
  }
}
