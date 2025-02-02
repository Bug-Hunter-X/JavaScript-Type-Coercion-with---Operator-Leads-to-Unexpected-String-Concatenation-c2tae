function foo(a, b) {
  // Explicit type conversion to ensure numerical addition
  return Number(a) + Number(b);
}

console.log(foo(1, '2')); // Output: 3