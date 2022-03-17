import esprima from 'esprima';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class Parser {
  constructor(entryModule) {
    this.importedModules = new Map();
    this.allModules = [];
    this.module = entryModule;
    this.followImportSources = this.followImportSources.bind(this);
  }

  parse() {
    const modules = this.importedModules.size
      ? this.importedModules
      : this.extractImports(this.module);

    return { allModules: this.allModules, importedModules: modules };
  }

  extractImports(module) {
    const extractedImports = this.traverseSyntaxTree({
      AST: this.parseModule(`/modules/${module}.js`),
      extractType: 'ImportDeclaration',
      recursiveCaller: this.followImportSources,
      extractor: (node) => node.specifiers.map((val) => val.imported.name),
    });

    extractedImports.forEach((imp) =>
      this.importedModules.set(imp, imp.toString()),
    );

    return this.importedModules;
  }

  parseModule(relPath) {
    const codeBuffer = fs.readFileSync(__dirname + relPath);
    return esprima.parseModule(codeBuffer.toString());
  }

  followImportSources({ source }) {
    const importedModule = source.value.replace('./', '');

    if (importedModule.length) {
      this.extractImports(importedModule);
      this.allModules.push({
        name: importedModule,
        module: this.parseModule(`/modules/${importedModule}.js`),
      });
    }
  }

  traverseSyntaxTree({ AST, extractType, extractor, recursiveCaller }) {
    const { body } = AST;
    const extractedNodes = [];

    body.forEach((node) => {
      if (extractType === node.type) {
        const extractedVals = extractor(node);
        extractedNodes.push(...extractedVals);
        recursiveCaller(node);
      }
    });

    return extractedNodes;
  }
}
