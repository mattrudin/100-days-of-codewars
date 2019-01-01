// origin: https://www.codewars.com/kata/57b68bc7b69bfc8209000307/train/typescript
export const average = (scores: number[]): number => Math.round(scores.reduce((acc, num) => acc + num) / scores.length);
