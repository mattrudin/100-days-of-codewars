// origin: https://www.codewars.com/kata/5701e43f86306a615c001868/solutions/typescript

enum Issuer {
	VISA = 'VISA',
	AMEX = 'AMEX',
	Mastercard = 'Mastercard',
	Discover = 'Discover',
	Unknown = 'Unknown'
}

export const getIssuer = (x: number): Issuer => {
	if (/(^34|^37)+[\d]{13}$/.test(x.toString())) {
		return Issuer.AMEX;
	} else if (/^6011+[\d]{12}$/.test(x.toString())) {
		return Issuer.Discover;
	} else if (/(^51|^52|^53|^54|^55)+[\d]{14}$/.test(x.toString())) {
		return Issuer.Mastercard;
	} else if (/^4([\d]{12}|[\d]{15})$/.test(x.toString())) {
		return Issuer.VISA;
	} else {
		return Issuer.Unknown;
	}
};

// alternative solution
export const getIssuerAlt = (x: number): Issuer => {
	const s = String(x);
	if (s.match(/^(37|34)\d{13}$/g)) return Issuer.AMEX;
	if (s.match(/^(6011)\d{12}$/g)) return Issuer.Discover;
	if (s.match(/^(51|52|53|54|55)\d{14}$/g)) return Issuer.Mastercard;
	if (s.match(/^(4)(\d{12}|\d{15})$/g)) return Issuer.VISA;
	return Issuer.Unknown;
};
