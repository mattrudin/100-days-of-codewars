// origin: https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/typescript
export const countPositivesSumNegatives = (input: any) => {
	if (input === null || input == false) return [];
	let positiveLength: number = input.filter((num) => num > 0).length;
	let negativeSum: number = input.filter((num) => num < 0).reduce((acc, curValue) => {
		return acc + curValue;
	}, 0);
	return [ positiveLength, negativeSum ];
};

// alternative solution:
export function countPositivesSumNegativesAlternative(input: any) {
	return input && !!input.length
		? input.reduce(([ pos, neg ], curr) => (curr > 0 ? [ ++pos, neg ] : [ pos, (neg += curr) ]), [ 0, 0 ])
		: [];
}
