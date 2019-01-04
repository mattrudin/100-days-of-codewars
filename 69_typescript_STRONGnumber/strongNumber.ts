// origin: https://www.codewars.com/kata/5a4d303f880385399b000001/train/typescript
export const strongNumber = (num: number): string => {
	const factorial = (num) => (num < 2 ? 1 : factorial(num - 1) * num);
	const numFactorial: number = num
		.toString()
		.split('')
		.map((char) => factorial(Number(char)))
		.reduce((acc, val) => acc + val);
	return num === numFactorial ? 'STRONG!!!!' : 'Not Strong !!';
};
