// origin: https://www.codewars.com/kata/587731fda577b3d1b0001196/solutions/typescript
export const camelCase = (str: string): string =>
	str === ''
		? ''
		: str
				.split(' ')
				.map((word) => (word === ' ' ? '' : `${word.charAt(0).toUpperCase()}${word.slice(1)}`))
				.join('');

// alternative solution
export const camelCaseAlt = (str: string): string => str.replace(/(?:\s+|^)(.?)/g, (_, s) => s.toUpperCase());
