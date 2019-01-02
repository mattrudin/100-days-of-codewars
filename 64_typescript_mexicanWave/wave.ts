// origin: https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/solutions/typescript
export const wave = (str: string): string[] => {
	const result: string[] = [];
	for (let i = 0; i < str.length; i++) {
		const temp: any = str.split('');
		if (temp[i] === ' ') continue;
		temp[i] = temp[i].toUpperCase();
		result.push(temp.join(''));
	}
	return result;
};

// alternative solution
export function waveAlt(str: string): Array<string> {
	return str
		.split('')
		.map((char, i) => (char === ' ' ? char : str.split('').map((L, j) => (i === j ? L.toUpperCase() : L)).join('')))
		.filter((l) => l !== ' ');
}
