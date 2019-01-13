// origin: https://www.codewars.com/kata/count-the-smiley-faces/train/typescript
export const countSmileys = (arr: string[]): number => arr.filter((element) => element.match(/[:;][-~]?[)D]/g)).length;

// alternative solution with string.prototype.test
export const countSmileysAlt = (arr: string[]): number =>
	arr.filter((element) => /^[:;][~-]?[D\)]$/.test(element)).length;
