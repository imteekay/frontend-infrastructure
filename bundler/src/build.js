const fs = require('fs');
const path = require('path');
const { buildFiles } = require('./buildFiles');

function build({ entryFile, outputFolder, htmlTemplatePath }) {
  const outputFiles = buildFiles({ entryFile, htmlTemplatePath });

  for (const outputFile of outputFiles) {
    fs.writeFileSync(
      path.join(outputFolder, outputFile.name),
      outputFile.content,
      'utf-8',
    );
  }
}

build({
  entryFile: path.join(__dirname, '../examples/index.js'),
  outputFolder: path.join(__dirname, '../dist'),
  htmlTemplatePath: path.join(__dirname, '../examples/index.html'),
});
