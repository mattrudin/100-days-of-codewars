// origin: https://www.codewars.com/kata/basic-mathematical-operations/train/typescript
export const basicOp = (operation: string, value1: number, value2: number): number => {
	switch (operation) {
		case '+':
			return value1 + value2;
		case '-':
			return value1 - value2;
		case '*':
			return value1 * value2;
		case '/':
			return value1 / value2;
	}
};

// alternative solution
export function basicOpAlt(operation: string, value1: number, value2: number): number {
	return eval(`${value1}${operation}${value2}`);
}
