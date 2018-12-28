// origin: https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/typescript
export const find_average = (array: number[]): number => array.reduce((acc, value) => acc + value, 0) / array.length;
