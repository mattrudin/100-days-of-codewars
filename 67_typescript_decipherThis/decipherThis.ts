// origin: https://www.codewars.com/kata/581e014b55f2c52bb00000f8/train/typescript
export function decipherThis(str: string): string {
	const charCodeToString = (str: string): string => {
		const numArray: number[] = str.match(/\d+/g).map(Number);
		const charArray: string[] = numArray.map((num) => String.fromCharCode(num));
		for (let i = 0; i < numArray.length; i++) {
			str = str.replace(`${numArray[i]}`, charArray[i]);
		}
		return str;
	};
	const swapLetter = (str: string): string => {
		return str
			.split(' ')
			.map(
				(word) =>
					word.length < 3
						? word
						: word.length === 3
							? `${word[0]}${word[2]}${word[1]}`
							: `${word[0]}${word[word.length - 1]}${word.substring(2, word.length - 1)}${word[1]}`
			)
			.join(' ');
	};

	return swapLetter(charCodeToString(str));
}

// alternative solution :
export function decipherThisAlt(str: string): string {
	const asciiReplacer = (match: any, p1: string): string => String.fromCharCode(parseInt(p1));
	return str
		.split(' ')
		.map((word: string) => word.replace(/^(\d+)/, asciiReplacer))
		.map(
			(word: string) =>
				word.length <= 2
					? word
					: `${word[0]}${word[word.length - 1]}${word.substring(2, word.length - 1)}${word[1]}`
		)
		.join(' ');
}
