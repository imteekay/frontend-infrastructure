export class TreeShaker {
  constructor({ importedModules, allModules }) {
    this.unshaked = allModules;
    this.modules = this.shake(allModules, importedModules);
  }

  shake(allModules, importedModules) {
    // get all the values from the module map defined in Parser
    // and turn them into an array
    // btw make a copy of modules otherwise
    // you won't be able to compare old vs new
    return Array.from(allModules.entries()).map(([, { module: m }]) => {
      const module = { ...m };
      const { body } = module;
      const shakedBody = [];
      // traverse every body of every module
      // look for export declarations &&
      // if the exported name is in the array of imports
      // we include it in our new body
      // also we include everything else thats not an export
      body.forEach((node) => {
        if (node.type === 'ExportNamedDeclaration') {
          node.declaration.declarations.forEach(({ id }) => {
            if (importedModules.has(id.name)) {
              shakedBody.push(node);
            }
          });
        } else {
          shakedBody.push(node);
        }
      });
      module.body = shakedBody;
      return module;
    });
  }
}
