function transformPlugin(t, filePath, resolveRequest) {
  return () => {
    return {
      visitor: {
        ImportDeclaration(path) {
          const newIdentifier = path.scope.generateUidIdentifier('imported');

          for (const specifier of path.get('specifiers')) {
            const binding = specifier.scope.getBinding(
              specifier.node.local.name,
            );
            const importedKey = specifier.isImportDefaultSpecifier()
              ? 'default'
              : specifier.get('imported.name').node;

            for (const referencePath of binding.referencePaths) {
              referencePath.replaceWith(
                t.memberExpression(
                  newIdentifier,
                  t.stringLiteral(importedKey),
                  true,
                ),
              );
            }
          }

          path.replaceWith(
            t.variableDeclaration('const', [
              t.variableDeclarator(
                newIdentifier,
                t.callExpression(t.identifier('require'), [
                  t.stringLiteral(
                    resolveRequest(filePath, path.get('source.value').node),
                  ),
                ]),
              ),
            ]),
          );
        },
        ExportDefaultDeclaration(path) {
          path.replaceWith(
            t.expressionStatement(
              t.assignmentExpression(
                '=',
                t.memberExpression(
                  t.identifier('exports'),
                  t.identifier('default'),
                  false,
                ),
                t.toExpression(path.get('declaration').node),
              ),
            ),
          );
        },
        ExportNamedDeclaration(path) {
          const declarations = [];
          if (path.has('declaration')) {
            if (path.get('declaration').isFunctionDeclaration()) {
              declarations.push({
                name: path.get('declaration.id').node,
                value: t.toExpression(path.get('declaration').node),
              });
            } else {
              path.get('declaration.declarations').forEach((declaration) => {
                declarations.push({
                  name: declaration.get('id').node,
                  value: declaration.get('init').node,
                });
              });
            }
          } else {
            path.get('specifiers').forEach((specifier) => {
              declarations.push({
                name: specifier.get('exported').node,
                value: specifier.get('local').node,
              });
            });
          }
          path.replaceWithMultiple(
            declarations.map((decl) =>
              t.expressionStatement(
                t.assignmentExpression(
                  '=',
                  t.memberExpression(t.identifier('exports'), decl.name, false),
                  decl.value,
                ),
              ),
            ),
          );
        },
      },
    };
  };
}

module.exports = transformPlugin;
