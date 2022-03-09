import './main.css';
import './index.html';

const square = (n) => Math.pow(n, 2);

// pipeline operator
4 |> square |> console.log;

// async-await
(async function () {
  await console.log('first');
  console.log('later!');
})();
