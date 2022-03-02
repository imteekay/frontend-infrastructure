# Simple Scripts

## Setup

To setup your environment: install all dependencies

```bash
yarn
```

And start the server: run the page and the scripts:

```bash
yarn dev:simple
```

## JavaScript: Before modules

In the early days of the internet & JavaScript, web developers usually handle user interactions with simple JavaScript scripts.

Using the `<script>` tag to let browsers load and execute JavaScript code.

In this example, we show a very simple script to load and list users in the page. We have two separate files (or modules!).

- [`load-users.js`](https://github.com/research-experiment/frontend-infrastructure/blob/main/simple/load-users.js): "load" all the users to be listed in the page
- [`list-users.js`](https://github.com/research-experiment/frontend-infrastructure/blob/main/simple/list-users.js): get the loaded users and list them in the page. This script also creates close buttons to delete users from the list.

It's important to notice that the order of the script tags is critical. We should let browsers load and execute the `load-users.js` module first and then the `list-users.js`.

```html
<script src="./load-users.js"></script>
<script src="./list-users.js"></script>
```

If we do the other way around, we break the application. As `list-users.js` depends on the `load-users.js`, the browser throws an error: `Uncaught ReferenceError: users is not defined`.

With the script tag, we had real issues:

- Be careful with the tags' orders. The order of script tags matters
- No real modules
- Async code is challenging
- All variables and functions available in the global scope
- If using a library, there's no easy way to exclude unused code from this library. It needs to load the entire library
- Name collision is easy to happen in the global scope
- To share state and functions between files/modules, it needs to bind them to the global context
