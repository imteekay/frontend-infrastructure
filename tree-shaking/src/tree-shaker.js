export class TreeShaker {
  constructor({ importedModules, allModules }) {
    this.allModules = allModules;
    this.importedModules = importedModules;
    this.modules = this.shake();
  }

  shake() {
    return Object.values(this.allModules).map(({ module }) => {
      const moduleCopy = { ...module };
      const { body } = moduleCopy;
      const shakedBody = [];

      for (const node of body) {
        if (node.type === 'ExportNamedDeclaration') {
          for (const { id } of node.declaration.declarations) {
            if (this.importedModules.has(id.name)) {
              shakedBody.push(node);
            }
          }
        } else {
          shakedBody.push(node);
        }
      }

      moduleCopy.body = shakedBody;

      return moduleCopy;
    });
  }
}
