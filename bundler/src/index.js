const express = require('express');
const path = require('path');
const { buildFiles } = require('./buildFiles');

function dev({ entryFile, htmlTemplatePath, devServerOptions }) {
  const outputFiles = buildFiles({ entryFile, htmlTemplatePath });
  const outputFileMap = {};

  for (const outputFile of outputFiles) {
    outputFileMap[outputFile.name] = outputFile.content;
  }

  const html = outputFileMap['index.html'];
  const app = express();

  app.use((req, res) => {
    const requestFile = req.path.slice(1);

    if (outputFileMap[requestFile]) {
      return res.send(outputFileMap[requestFile]);
    }

    res.send(html);
  });

  app.listen(devServerOptions.port, () =>
    console.log(
      `Dev server starts at http://localhost:${devServerOptions.port}`,
    ),
  );
}

dev({
  entryFile: path.join(__dirname, '../examples/index.js'),
  htmlTemplatePath: path.join(__dirname, '../examples/index.html'),
  devServerOptions: {
    port: 3000,
  },
});
