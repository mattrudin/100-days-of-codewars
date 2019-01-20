// origin: https://www.codewars.com/kata/if-you-cant-sleep-just-count-sheep/train/typescript
export function countSheep(num: number): string {
	const result: string[] = [];
	for (let i = 1; i <= num; i++) {
		result.push(`${i} sheep...`);
	}
	return result.join('');
}

// alternative solution
export function countSheepAlt(num: number): string {
	return Array.from({ length: num }, (x, i) => `${i + 1} sheep...`).join('');
}
