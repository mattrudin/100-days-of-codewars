// origin: https://www.codewars.com/kata/591305520c6f9f5c93000052/solutions/typescript
interface IGeometricFigure {
	area: () => number;
	perimeter: () => number;
}

export class Square implements IGeometricFigure {
	constructor(len: number) {
		this.length = len;
	}
	length: number;
	area = () => this.length ** 2;
	perimeter = () => this.length * 4;
}

export class Circle implements IGeometricFigure {
	constructor(rad: number) {
		this.radius = rad;
	}
	radius: number;
	area = () => Math.PI * this.radius ** 2;
	perimeter = () => this.radius * 2 * Math.PI;
}
