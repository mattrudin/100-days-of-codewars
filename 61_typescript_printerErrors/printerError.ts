// origin: https://www.codewars.com/kata/56541980fa08ab47a0000040/train/typescript
export class G964 {
	public static printerError(str: string): string {
		const strError = str.split('').filter((char) => char > 'm').length;
		return `${strError}/${str.length}`;
	}
}

// alternative solution:
export class G964Alt {
	public static printerError(str: string): string {
		return `${str.replace(/[a-m]/gi, '').length}/${str.length}`;
	}
}

// with explicit return
export class G964Alt2 {
	public static printerError = (str: string): string => `${str.replace(/[a-m]/gi, '').length}/${str.length}`;
}
