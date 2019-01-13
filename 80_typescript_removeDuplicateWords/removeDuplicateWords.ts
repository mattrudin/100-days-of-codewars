// origin: https://www.codewars.com/kata/remove-duplicate-words/train/typescript
export const removeDuplicateWords = (s: string): string => [ ...new Set(...[ s.split(' ') ]) ].join(' ');

// alternative solution
export const removeDuplicateWordsAlt = (s: string): string => [ ...new Set(s.split(' ')) ].join(' ');
