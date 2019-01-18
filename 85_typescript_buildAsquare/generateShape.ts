// origin: https://www.codewars.com/kata/build-a-square/train/typescript
export const generateShape = (int: number): string => {
	let result: string = '';
	for (let i = 1; i <= int; i++) {
		result += `${'+'.repeat(int)}${int === 1 ? '' : i === int ? '' : '\n'}`;
	}
	return result;
};

// Alternative solution:
export const generateShapeAlt = (int: number): string => `${'+'.repeat(int)}\n`.repeat(int).replace(/\n$/, '');
