// origin:https://www.codewars.com/kata/52fba66badcd10859f00097e/solutions/typescript
export class Kata {
	static disemvowel(str: string): string {
		return str.replace(/[aeiou]/gi, '');
	}
}
