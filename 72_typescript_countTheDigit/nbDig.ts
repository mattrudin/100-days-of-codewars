// origin: https://www.codewars.com/kata/566fc12495810954b1000030/train/typescript
export class G964 {
	public static nbDig(n: number, d: number): number {
		const result: number[] = [];
		for (let k = 0; k <= n; k++) {
			result.push(k ** 2);
		}
		return result.join('').split('').filter((num) => Number(num) === d).length;
	}
}

// alternative solution
export class G964Alt {
	public static nbDig(n: number, d: number): number {
		let count: number = 0;
		for (let k: number = 0; k <= n; k++) {
			count += (k * k).toString().split(d.toString()).length - 1;
		}
		return count;
	}
}
