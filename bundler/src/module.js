const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');
const transformPlugin = require('./transformPlugin');
const trim = require('./trim');

class Module {
  constructor(filePath) {
    this.filePath = filePath;
    this.content = fs.readFileSync(filePath, 'utf-8');
    this.transform();
    this.ast = babel.parseSync(this.content);
  }

  initDependencies() {
    this.dependencies = this.findDependencies();
  }

  findDependencies() {
    return this.ast.program.body
      .filter((node) => node.type === 'ImportDeclaration')
      .map((node) => node.source.value)
      .map((relativePath) => this.resolveRequest(this.filePath, relativePath))
      .map((absolutePath) => createModule(absolutePath));
  }

  resolveRequest(requester, requestedPath) {
    if (requestedPath[0] === '.') {
      return path.join(path.dirname(requester), requestedPath);
    }

    const requesterParts = requester.split('/');
    const requestPaths = [];

    for (let i = requesterParts.length - 1; i > 0; i--) {
      requestPaths.push(requesterParts.slice(0, i).join('/') + '/node_modules');
    }

    return require.resolve(requestedPath, { paths: requestPaths });
  }

  transformModuleInterface() {
    const { types } = babel;
    const { filePath, resolveRequest } = this;
    const { ast, code } = babel.transformFromAstSync(this.ast, this.content, {
      ast: true,
      plugins: [transformPlugin(types, filePath, resolveRequest)],
    });
    this.ast = ast;
    this.content = code;
  }
}

class JSModule extends Module {
  transform() {}
}

class CSSModule extends Module {
  transform() {
    this.content = trim(`
      const content = '${this.content.replace(/\n/g, '')}';
      const style = document.createElement('style');
      style.type = 'text/css';
      if (style.styleSheet) style.styleSheet.cssText = content;
      else style.appendChild(document.createTextNode(content));
      document.head.appendChild(style);
    `);
  }
}

const ModuleLoaders = {
  '.css': CSSModule,
  '.js': JSModule,
};

const MODULE_CACHE = new Map();

function createModule(filePath) {
  if (MODULE_CACHE.has(filePath)) {
    return MODULE_CACHE.get(filePath);
  }

  const fileExtension = path.extname(filePath);
  const ModuleLoader = ModuleLoaders[fileExtension];

  if (!ModuleLoader) {
    throw new Error(`Unsupported extension "${fileExtension}".`);
  }

  const module = new ModuleLoader(filePath);
  MODULE_CACHE.set(filePath, module);
  module.initDependencies();
  return module;
}

module.exports = {
  createModule,
};
