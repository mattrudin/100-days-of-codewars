// origin: https://www.codewars.com/kata/driving-licence/train/typescript
export function driver(data: Array<string>): string {
	const monthToNumber = (month: string, gender: string): string => {
		let monthNumberString: string;
		switch (month.substring(0, 3)) {
			case 'Jan':
				monthNumberString = gender === 'M' ? '01' : '51';
				break;
			case 'Feb':
				monthNumberString = gender === 'M' ? '02' : '52';
				break;
			case 'Mar':
				monthNumberString = gender === 'M' ? '03' : '53';
				break;
			case 'Apr':
				monthNumberString = gender === 'M' ? '04' : '54';
				break;
			case 'May':
				monthNumberString = gender === 'M' ? '05' : '55';
				break;
			case 'Jun':
				monthNumberString = gender === 'M' ? '06' : '56';
				break;
			case 'Jul':
				monthNumberString = gender === 'M' ? '07' : '57';
				break;
			case 'Aug':
				monthNumberString = gender === 'M' ? '08' : '58';
				break;
			case 'Sep':
				monthNumberString = gender === 'M' ? '09' : '59';
				break;
			case 'Oct':
				monthNumberString = gender === 'M' ? '10' : '60';
				break;
			case 'Nov':
				monthNumberString = gender === 'M' ? '11' : '61';
				break;
			case 'Dec':
				monthNumberString = gender === 'M' ? '12' : '62';
				break;
		}
		return monthNumberString;
	};

	const sureName = data[2];
	const foreName = data[0];
	const middleName = data[1];
	const dateOfBirth = data[3];
	const gender = data[4];

	const sureNameFirstFive =
		sureName.length >= 5 ? sureName.substring(0, 5).toUpperCase() : `${sureName.toUpperCase()}9999`.substring(0, 5);
	const month = dateOfBirth.split('-')[1];
	const decade = dateOfBirth.split('-')[2][2];
	const monthOfBirth = gender === 'M' ? monthToNumber(month, gender) : monthToNumber(month, gender);
	const dayOfBirth = dateOfBirth.substring(0, 2);
	const year = dateOfBirth.split('-')[2][3];
	const initials = middleName ? `${foreName[0]}${middleName[0]}` : `${foreName[0]}9`;
	return `${sureNameFirstFive}${decade}${monthOfBirth}${dayOfBirth}${year}${initials}9AA`;
}

// alternative solution
export function driverAlt(data: Array<string>): string {
	let id: string = '';
	let birthArr: Array<string> = data[3].split('-');
	let months: Array<string> = [ 'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec' ];
	let month: number = months.indexOf(birthArr[1].toLowerCase().substring(0, 3)) + 1;

	if (data[2].length >= 5) id += data[2].substring(0, 5).toUpperCase();
	else {
		id += data[2].toUpperCase();
		for (let i: number = 0; i < 5 - data[2].length; i++) id += '9';
	}
	id += birthArr[2][birthArr[2].length - 2];
	id += data[4] === 'F' ? 50 + month : month < 10 ? '0' + month : month;
	id += birthArr[0];
	id += birthArr[2][birthArr[2].length - 1];
	id += data[1] === '' ? data[0][0] + '9' : data[0][0] + data[1][0];
	id += '9AA';

	return id;
}
