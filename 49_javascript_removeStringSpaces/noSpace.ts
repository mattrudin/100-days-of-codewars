// origin:https://www.codewars.com/kata/remove-string-spaces/train/typescript
export const noSpace = (string: string): string => string.split('').filter((char) => char !== ' ').join('');

// alternative solution:
export const noSpaceAlternative = (string: string): string => string.replace(/\s/g, '');
