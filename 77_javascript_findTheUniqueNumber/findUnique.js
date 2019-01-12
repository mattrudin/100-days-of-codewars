// origin: https://www.codewars.com/kata/find-the-unique-number/train/javascript
// In comparison to the previous Kata, this Kata requires a unique number from an array with many different numbers
// eg. [ 3, 5, 5, 4, 4, 3, 2, 2, 9 ]

const findUnique = numbers => {
    const obj = numbers.reduce(function(countMap, word) {
		countMap[word] = ++countMap[word] || 1;
		return countMap;
	}, {});
	for (let key in obj) {
		if (obj[key] === 1) return Number(key);
	}
}

// alternative solution
const findUnique = numbers => numbers.reduce((a, b) => a ^ b);
/* ^ is XOR, and when you XOR two numbers, only bits that are different between them 
become 1's in the result, so XOR'ing a number with itself will always result in 0. 
The reduce method reduces an array to a single value by applying the supplied function 
to each element in the array, for example if the function was adding two numbers 
together the result would be the sum of the array. If you XOR all the numbers in the 
array together, and all but one are duplicates, then each duplicate cancels itself out 
in the process, and only the unique number remains.*/