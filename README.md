# JavaScript Type Coercion Bug

This repository demonstrates a common JavaScript bug related to type coercion using the `+` operator.  The `bug.js` file shows the erroneous behavior, while `bugSolution.js` provides a corrected version.

## Description
JavaScript's loose typing can lead to unexpected results when using the `+` operator. If one operand is a number and the other is a string, JavaScript will implicitly convert the number to a string and perform string concatenation. This behavior is often unexpected and can cause subtle errors in calculations.

## How to Reproduce
1. Clone this repository.
2. Run `bug.js` (e.g., using Node.js).
3. Observe that the output is "12", not 3.

## Solution
The `bugSolution.js` file demonstrates the fix.  Explicit type conversion (using `parseInt` or `Number`) ensures that both operands are numbers before addition.

## License
MIT