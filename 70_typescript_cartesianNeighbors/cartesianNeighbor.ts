// origin: https://www.codewars.com/kata/58989a079c70093f3e00008d/train/typescript
export const cartesianNeighbor = (x: number, y: number): Array<Array<number>> => [
	[ x - 1, y - 1 ],
	[ x - 1, y ],
	[ x - 1, y + 1 ],
	[ x, y - 1 ],
	[ x, y + 1 ],
	[ x + 1, y - 1 ],
	[ x + 1, y ],
	[ x + 1, y + 1 ]
];
