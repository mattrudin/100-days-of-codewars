// origin: https://www.codewars.com/kata/571c1e847beb0a8f8900153d/train/typescript
export const rakeGarden = (garden: string): string =>
	garden.split(' ').map((item) => (item === 'rock' || item === 'gravel' ? item : 'gravel')).join(' ');
