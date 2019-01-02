// origin: https://www.codewars.com/kata/maze-runner/train/typescript
export function mazeRunner(maze: number[][], directions: string[]): string {
	const getDirection = (direction: string): number[] => {
		let directionArray: number[];
		switch (direction) {
			case 'N':
				directionArray = [ -1, 0 ];
				break;
			case 'E':
				directionArray = [ 0, 1 ];
				break;
			case 'S':
				directionArray = [ 1, 0 ];
				break;
			case 'W':
				directionArray = [ 0, -1 ];
				break;
		}
		return directionArray;
	};

	const getPosition = (maze, value): number[] => {
		let position: number[];
		for (let i = 0; i < maze.length; i++) {
			let index = maze[i].indexOf(value);
			if (index > -1) position = [ i, index ];
		}
		return position;
	};

	const startPosition = getPosition(maze, 2);
	let currentArray = startPosition[0];
	let currentIndex = startPosition[1];
	let endMessage: string = '';

	for (let i = 0; i < directions.length; i++) {
		const tempDirection = getDirection(directions[i]);
		currentArray = currentArray + tempDirection[0];
		currentIndex = currentIndex + tempDirection[1];

		if (currentArray < 0 || currentArray === maze.length) {
			return (endMessage = 'Dead');
		} else if (maze[currentArray][currentIndex] === undefined || maze[currentArray][currentIndex] === 1) {
			return (endMessage = 'Dead');
		} else if (maze[currentArray][currentIndex] === 3) {
			return (endMessage = 'Finish');
		} else {
			endMessage = 'Lost';
		}
	}
	return endMessage;
}
