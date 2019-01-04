// origin: https://www.codewars.com/kata/balanced-number-special-numbers-series-number-1/train/javascript
const balancedNum = number => {
    const numArray = number.toString().split("");
    const middle = number.toString().length / 2;
    
    if (number.toString().length < 3) {
      return "Balanced";
    } else if (number.toString().length % 2 !== 0) {
      const leftNum = numArray.slice(0, Math.floor(middle)).reduce((acc, val) => acc + Number(val),0);
      const rightNum = numArray.slice(Math.ceil(middle)).reduce((acc, val) => acc + Number(val),0);
      return leftNum === rightNum ? "Balanced" : "Not Balanced";
    } else {
      const leftNum = numArray.slice(0, Math.floor(middle) - 1).reduce((acc, val) => acc + Number(val),0);
      const rightNum = numArray.slice(Math.ceil(middle) + 1).reduce((acc, val) => acc + Number(val),0);
      return leftNum === rightNum ? "Balanced" : "Not Balanced";
    }
  }
  
  // alternative solution :
  function balancedNum(number) {
  
    let str = `${number}`
    ,   len = (str.length - (str.length % 2 ? -1 : -2)) / 2
    ,   sum = digits => [ ...digits ].reduce((a, b) => a + +b, 0);
  
    return sum(str.slice(0, len)) === sum(str.slice(-len)) 
    ? 'Balanced' 
    : 'Not Balanced';
  
  }
  