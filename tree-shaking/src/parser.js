import esprima from 'esprima';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMPORT_DECLARATION_NODE = 'ImportDeclaration';

export class Parser {
  constructor(entryModule) {
    this.importedModules = new Map();
    this.allModules = [];
    this.entryModule = entryModule;
    this.followImportSources = this.followImportSources.bind(this);
  }

  parse() {
    const modules = this.importedModules.size
      ? this.importedModules
      : this.extractImports(this.entryModule);

    return { allModules: this.allModules, importedModules: modules };
  }

  extractImports(module) {
    const ast = this.parseModule(`/modules/${module}.js`);
    const followImportSources = this.followImportSources;
    const extractedImports = this.traverseSyntaxTree({
      ast,
      followImportSources,
    });

    for (const importedModule of extractedImports) {
      this.importedModules.set(importedModule, importedModule);
    }

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

  traverseSyntaxTree({ ast, followImportSources }) {
    const { body } = ast;
    const extractedNodes = [];

    for (const node of body) {
      if (IMPORT_DECLARATION_NODE === node.type) {
        extractedNodes.push(...this.extractor(node));
        followImportSources(node);
      }
    }

    return extractedNodes;
  }

  extractor(node) {
    return node.specifiers.map((val) => val.imported.name);
  }
}
