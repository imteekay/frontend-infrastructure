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
    const extractedImports = this.traverseSyntaxTree({
      AST: this.parseModule(`/modules/${module}.js`),
      followImportSources: this.followImportSources,
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

  traverseSyntaxTree({ AST, extractor, followImportSources }) {
    const { body } = AST;
    const extractedNodes = [];

    body.forEach((node) => {
      if (IMPORT_DECLARATION_NODE === node.type) {
        extractedNodes.push(...extractor(node));
        followImportSources(node);
      }
    });

    return extractedNodes;
  }
}
