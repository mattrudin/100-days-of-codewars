// origin: https://www.codewars.com/kata/even-numbers-in-an-array/train/javascript
const evenNumbers = (array, number) => array.filter(number => number % 2 === 0).slice(-number)