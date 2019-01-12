// origin: https://www.codewars.com/kata/find-the-unique-number-1/train/typescript
export function findUniq(arr: Array<number>): number {
	const obj = arr.reduce(function(countMap, word) {
		countMap[word] = ++countMap[word] || 1;
		return countMap;
	}, {});
	for (let key in obj) {
		if (obj[key] === 1) return Number(key);
	}
}

// alternative solution
// this solution is totally legit, because the input array contained only two different numbers
// but it does not work with more than two numbers, eg [1,1,2,2,3,4,4,4]
// the upper solution takes this into account!
export function findUniqAlt(arr: Array<number>): number {
	arr = arr.sort();
	return arr[0] == arr[1] ? arr[arr.length - 1] : arr[0];
}
