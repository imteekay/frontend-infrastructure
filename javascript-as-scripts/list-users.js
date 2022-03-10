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
