// origin: https://www.codewars.com/kata/56f7493f5d7c12d1690000b6/solutions/typescript
export function mean(lst: any[]): [number, string] {
	const numberArray: string[] = lst.filter((element) => !isNaN(element));
	const numberMean: number = numberArray.reduce((acc, num) => acc + parseInt(num), 0) / numberArray.length;
	const charString: string = lst.filter((element) => isNaN(element)).join('');
	return [ numberMean, charString ];
}

// alternative solution
export function meanAlternative(lst: any[]): [number, string] {
	let numberTotal = 0;
	lst
		.map((item) => Number(item))
		.filter((item) => !isNaN(item))
		.forEach((number) => (numberTotal = numberTotal + number));
	let word = lst.filter((item) => isNaN(item)).join('');
	return [ numberTotal / 10, word ]; // there are always 10 numbers in the array
}
