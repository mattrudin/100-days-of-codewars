// origin: https://www.codewars.com/kata/is-n-divisible-by-x-and-y/train/javascript
const isDivisible = (n, x, y) => n % x === 0 && n % y === 0 ? true : false;

// alternative solution
const isDivisible = (n, x, y) => n % x === 0 && n % y === 0;