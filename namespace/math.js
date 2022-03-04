function getMathUtils() {
  function sum(num1, num2) {
    return num1 + num2;
  }

  function minus(num1, num2) {
    return num1 - num2;
  }

  function times(num1, num2) {
    return num1 * num2;
  }

  function divide(num1, num2) {
    return num1 / num2;
  }

  return {
    sum,
    minus,
    times,
    divide,
  };
}

const Utils = {};

Utils.Math = getMathUtils();
