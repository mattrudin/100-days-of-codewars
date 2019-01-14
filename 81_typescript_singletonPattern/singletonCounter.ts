// origin: https://www.codewars.com/kata/591445324670baed3200008d/train/typescript

export class SingletonCounter {
	private static _instance: SingletonCounter = new SingletonCounter();
	static getInstance() {
		return this._instance;
	}
	private counter: number = 0;
	public inc(): number {
		this.counter++;
		return this.counter;
	}
}

// alternative solution:
export class SingletonCounterAlt {
	private static _instance: SingletonCounterAlt | undefined;
	private constructor() {}
	private _counter = 0;
	public static getInstance() {
		if (!this._instance) {
			this._instance = new SingletonCounterAlt();
		}
		return this._instance;
	}
	inc = () => ++this._counter;
}

// Further information
// https://basarat.gitbooks.io/typescript/docs/tips/singleton.html
// https://fullstack-developer.academy/singleton-pattern-in-typescript/
