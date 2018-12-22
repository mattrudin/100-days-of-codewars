// origin: https://www.codewars.com/kata/54ff3102c1bad923760001f3/solutions/typescript
export class Kata {
	static getCount(str: string): number {
		let counter: number = 0;
		str
			.split('')
			.map(
				(char) =>
					char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'
						? (counter += 1)
						: false
			);
		return counter;
	}
}

// alternative solution:
export class KataAlternative {
	static getCount(str: string): number {
		return str.split('').filter((c) => /[aeiou]/i.test(c)).length;
	}
}
