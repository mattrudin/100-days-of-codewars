// origin (javascript): https://www.codewars.com/kata/536ce83e2f403659a5000d47/train/javascript
const add = (x: number, y: number): number => (y ? add(x ^ y, (x & y) << 1) : x);

// This Kata uses bitwise operators -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
// This SO thread discusses the addition without addition-symbol -> https://stackoverflow.com/questions/41455750/how-to-add-two-numbers-in-javascript-without-using-or-operators
