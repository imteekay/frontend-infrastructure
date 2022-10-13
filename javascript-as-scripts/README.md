<samp>

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

## JavaScript: before modern frontend applications

In the early days of the internet & JavaScript, web developers usually handled user interactions with simple JavaScript scripts.

Using the `<script>` tag to let browsers load and execute JavaScript code. It was very useful to handle form validations in the frontend and make the pages a little bit more interactive.

jQuery made it easier and more accessible to build interactivity on web pages. We had two ways of using it on browsers. The first one was to download the jQuery script, add it to the project, and point the `<script>` tag to load and execute it. The second one is also using the `<script>` tag but now pointing to a CDN url for the jQuery library.

At the time, we didn't have an organized approach to install and use libraries. We didn't have npm. And now we have npm, yarn, pnpm to help us manage our dependencies, making easier to install and mantain the libraries we want to use in a project.

To illustrate the approach we had in the past, and that still works Today, I want to show a simple example.

## Loading and listing users

In this example, we show a very simple script to load and list users in the page. The idea is to have a `<ul>` tag to hold all users "items" (`<li>`), but we use JavaScript to create all users and list them in the page.

Let's create our `index.html` file, the entry point for our page.

```html
<html>
  <head>
    <title>JavaScript as Scripts</title>
  </head>
  <body>
    <ul id="list"></ul>
  </body>
</html>
```

All simple, all good. We just have the usual HTML template with `<html>`, `<head>`, `<title>`, and `<body>`. The important part is the `<ul>` tag as I mentioned before. We'll use it hold the users (list them).

The final HTML would look like:

```html
<html>
  <head>
    <title>JavaScript as Scripts</title>
  </head>
  <body>
    <ul id="list">
      <li>TK</li>
      <li>Kaio</li>
      <li>Kazumi</li>
    </ul>
  </body>
</html>
```

Let's start building the scripts to list the users then. We'll have two separate files (or scripts! We didn't call it modules at that time).

- `load-users.js`: "load" all the users to be listed in the page
- `list-users.js`: get the loaded users and list them in the page. This script also creates close buttons to delete users from the list.

To "load" the users, we will just create a list of users in a `const`ant.

```javascript
const users = ['TK', 'Kazumi', 'Kaio'];
```

This is an interesting example because everytime we define a variable or function, it becomes a member of the global scope. In browsers, the global object is also known as the `Window`.

Having this constant defined in the global scope, make it accessible to the following script. Talking about it, the second script will use this `users` variable, iterate through it, and create the `<li>` tags with each user's name.

```javascript
function listUsers() {
  const ul = document.getElementById('list');

  users.forEach((user, index) => {
    const listItem = `li-${index}`;
    const li = document.createElement('li');

    li.innerHTML = user;
    li.setAttribute('id', listItem);

    ul.appendChild(li);
  });
}

listUsers();
```

- it gets the `<ul>` by the id `list`
- iterate through the `users`: as it is really in the global scope, it's accessible to this script
- create the `<li>` element
- assign the name of the user to the `<li>`
- and finally append the created `<li>` tag to the `<ul>` element

With that simple script, we have listed all users.

It's important to notice that the order of the script tags is critical. We should let browsers load and execute the `load-users.js` module first and then the `list-users.js`.

```html
<script src="./load-users.js"></script>
<script src="./list-users.js"></script>
```

If we do the other way around, we break the application. As `list-users.js` depends on the `load-users.js`, the browser throws an error: `Uncaught ReferenceError: users is not defined`, meaning, the `users` constant is not a member of the global scope and thus is not accessible to this script.

To make it more fun, let's also add a delete button for each user. When we click the button, it should hide/delete the user from the list.

```javascript
function listUsers() {
  const ul = document.getElementById('list');

  users.forEach((user, index) => {
    const listItem = `li-${index}`;
    const deleteButton = document.createElement('button');

    const li = document.createElement('li');

    li.innerHTML = user;
    li.setAttribute('id', listItem);

    deleteButton.innerHTML = 'X';
    deleteButton.addEventListener('click', () => {
      li.remove();
    });

    li.appendChild(deleteButton);
    ul.appendChild(li);
  });
}

listUsers();
```

And here it's.

- create the `<button>` element
- assign the value `X` to it (close button)
- add a click event to remove the `<li>`
- and append the `<button>` to the `<li>`

Let's see how it works:

<div style="margin: auto; text-align: center;">
  <video controls="true" allowfullscreen="true" style="width: 100%">
    <source src="/series/frontend-infrastructure/list-users.mov" type="video/mp4">
  </video>
</div>

## Scripts and its limitations

With the script tag, we had some limitations:

- Be careful with the tags' orders. The order of script tags matters
- No real modules
- Async code is challenging
- All variables and functions available in the global scope
- If using a library, there's no easy way to exclude unused code from this library. It needs to load the entire library
- Name collision is easy to happen in the global scope
- To share state and functions between files/modules, it needs to bind them to the global context

## Resources

- [Frontend Infrastructure Hub](/frontend-infrastructure)
- [Frontend Infrastructure Repository](https://github.com/imteekay/frontend-infrastructure)
- [Frontend Infrastructure: Techniques and Strategies](/series/frontend-infrastructure/techniques-and-strategies)
- [Frontend Infrastructure: Skills](/series/frontend-infrastructure/skills)
- [Frontend Infrastructure: Resources](/series/frontend-infrastructure/resources)

</samp>
