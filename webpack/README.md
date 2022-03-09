# Learn Webpack

## Setup

To setup your environment: install all dependencies

```bash
yarn
```

Build the application:

```bash
yarn build
```

Start the server:

```bash
yarn start
```

## Webpack

- entrypoint: where webpack starts bundling from
- output: where webpack should generated the bundled files
- [devServer](https://webpack.js.org/configuration/dev-server): a development server configuration
  - contentBase: where the dev server will listen from
  - overlay: for every error, it will show an overlay about the error in the page
- module rules: loaders for different types of modules (js, css, html, png|jpg|gif)
  - [css-loader](https://webpack.js.org/loaders/css-loader): interprets css files from the `import` syntax
  - [style-loader](https://webpack.js.org/loaders/style-loader): inject the css into the DOM
  - [html-loader](https://v4.webpack.js.org/loaders/html-loader): interprets HTML files from the `import` syntax
  - [extract-loader](https://github.com/peerigon/extract-loader): extracts HTML and CSS from the bundle
  - [file-loader](https://v4.webpack.js.org/loaders/file-loader): emits a new file based on the file's `import`
- babel: transform JavaScript code into older versions and allow to use future syntax and features
  - `@babel/plugin-proposal-pipeline-operator`: support for pipeline operator feature
  - `babel-plugin-transform-async-to-promises`: support for async-await feature
