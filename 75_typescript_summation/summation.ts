// origin: https://www.codewars.com/kata/grasshopper-summation/train/typescript
export const summation = (num: number): number => (num === 0 ? num : num + summation(num - 1));
