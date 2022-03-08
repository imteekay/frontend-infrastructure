const PI = 3.14;

function calculateArea(r) {
  return PI * r * r;
}

calculateArea(1); // 3.14

function functionScope() {
  const TEST = 'test';
}

// TEST; // ReferenceError: TEST is not defined
