export class TreeShaker {
  // store the unshaked modules
  // shake the modules when initializing
  constructor({ Imports, modulesSet }) {
    this.unshaked = modulesSet;
    this.modules = TreeShaker.shake(modulesSet, Imports);
  }
  // do static because... well 🤷🏻‍
  static shake(modules, importedVals) {
    // get all the values from the module map defined in Parser
    // and turn them into an array
    // btw make a copy of modules otherwise
    // you won't be able to compare old vs new
    return Array.from(modules.entries()).map(([, { module: m, name }]) => {
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
            if (importedVals.has(id.name)) {
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
  // make the original modules accessible
  get Unshaked() {
    return this.unshaked;
  }
  // and the optimized modules are of course accessible as well
  get Modules() {
    return this.modules;
  }
}
