// origin: https://www.codewars.com/kata/shortest-word/train/typescript
export const findShort = (str: string): number => str.split(' ').sort((a, b) => a.length - b.length)[0].length;

// alternative solution
export const findShortAlt = (s: string): number => Math.min(...s.split(' ').map((w) => w.length));
