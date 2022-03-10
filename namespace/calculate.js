(function () {
  const result = document.getElementById('result');
  const calculateButton = document.getElementById('calculate');

  const operationToFn = {
    '+': Utils.Math.sum,
    '-': Utils.Math.minus,
    '*': Utils.Math.multiply,
    '/': Utils.Math.divide,
  };

  calculateButton.addEventListener('click', () => {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    const resultValue = operationToFn[operator](num1, num2);
    result.innerHTML = resultValue;
  });
})();
