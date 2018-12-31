//origin: https://www.codewars.com/kata/580755730b5a77650500010c/train/typescript
export const sortMyString = (S: string): string => {
	const evenString = S.split('').filter((char, index) => index % 2 === 0).join('');
	const oddString = S.split('').filter((char, index) => index % 2 === 1).join('');
	return `${evenString} ${oddString}`;
};

// alternative solution:
export const sortMyStringAlt = (S: string): string =>
	`${S.split('').filter((e, i) => i % 2 === 0).join('')} ${S.split('').filter((e, i) => i % 2 !== 0).join('')}`;
