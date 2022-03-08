const PI = 3.14;

function calculateArea(r) {
  return PI * r * r;
}

const area = calculateArea(1);
console.log('area', area); // 3.14

function functionScope() {
  const TEST = 'test';
}

// TEST; // ReferenceError: TEST is not defined
