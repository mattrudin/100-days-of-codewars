// origin: https://www.codewars.com/kata/learning-typescript-basic-types-type-assertions/train/typescript
export class SuccessServerResult {
	constructor(public httpCode: number, public resultObject: Object) {}
}

export class ErrorServerResult {
	constructor(public httpCode: number, public message: string) {}
}

export function getResult(result: any) {
	if (result.httpCode === 200) {
		return result.resultObject;
	} else {
		return (result as ErrorServerResult).message;
	}
}

// alternative solution for getResult
export function getResultAlt(result: SuccessServerResult | ErrorServerResult) {
	if (result.httpCode === 200) {
		return (result as SuccessServerResult).resultObject;
	} else {
		return (result as ErrorServerResult).message;
	}
}
