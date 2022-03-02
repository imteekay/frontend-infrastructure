const fs = require('fs');
const trim = require('./trim');
const { createModule } = require('./module');

const END_BODY_TAG = '</body>';

function collectModules(graph) {
  const modules = new Set();

  function collectModule(module, modules) {
    if (!modules.has(module)) {
      modules.add(module);
      module.dependencies.forEach((dependency) =>
        collectModule(dependency, modules),
      );
    }
  }

  collectModule(graph, modules);
  return Array.from(modules);
}

function toModuleMap(modules) {
  let moduleMap = '{';

  for (const module of modules) {
    module.transformModuleInterface();
    moduleMap += `"${module.filePath}": function(exports, require) { ${module.content}\n },`;
  }

  moduleMap += '}';
  return moduleMap;
}

function addRuntime(moduleMap, entryPoint) {
  return trim(`
    const modules = ${moduleMap};
    const entry = "${entryPoint}";
    function webpackStart({ modules, entry }) {
      const moduleCache = {};
      const require = (moduleName) => {
        if (moduleCache[moduleName]) {
          return moduleCache[moduleName];
        }
        const exports = {};
        moduleCache[moduleName] = exports;
    
        modules[moduleName](exports, require);
        return moduleCache[moduleName];
      };
    
      require(entry);
    }

    webpackStart({ modules, entry });
  `);
}

function bundle(graph) {
  const modules = collectModules(graph);
  const moduleMap = toModuleMap(modules);
  const moduleCode = addRuntime(moduleMap, modules[0].filePath);
  return [{ name: 'bundle.js', content: moduleCode }];
}

function buildDependencyGraph(filePath) {
  return createModule(filePath);
}

function appendHTMLTemplate(htmlTemplatePath, outputFiles) {
  const htmlTemplate = fs.readFileSync(htmlTemplatePath, 'utf-8');
  const content = htmlTemplate.replace(
    END_BODY_TAG,
    outputFiles.map(({ name }) => `<script src="/${name}"></script>`).join('') +
      END_BODY_TAG,
  );

  return [...outputFiles, { name: 'index.html', content }];
}

function buildFiles({ entryFile, htmlTemplatePath }) {
  const graph = buildDependencyGraph(entryFile);
  return appendHTMLTemplate(htmlTemplatePath, bundle(graph));
}

module.exports = {
  buildFiles,
};
