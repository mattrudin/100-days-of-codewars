// origin: https://www.codewars.com/kata/552c028c030765286c00007d/train/typescript
export const iqTest = (numbers: string): number => {
	const array = numbers.split(' ');
	const evenOnes = array.filter((element) => Number(element) % 2 === 0);
	const oddOnes = array.filter((element) => Number(element) % 2 === 1);
	return evenOnes.length === 1 ? array.indexOf(evenOnes.toString()) + 1 : array.indexOf(oddOnes.toString()) + 1;
};

// alternative solution
export function iqTestAlternative(numbers: string): number {
	let evenness: number[] = numbers.split(' ').map((x) => Number(x) % 2);
	return evenness.reduce((a, b) => a + b) == 1 ? evenness.indexOf(1) + 1 : evenness.indexOf(0) + 1;
}
