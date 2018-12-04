// origin: https://www.codewars.com/kata/557f6437bf8dcdd135000010/train/javascript
const factorial = n => {
    function add (a, b) {
    var res = '', c = 0
    a = a.split('')
    b = b.split('')
    while (a.length || b.length || c) {
      c += ~~a.pop() + ~~b.pop()
      res = c % 10 + res
      c = c > 9
    }
    return res
    }
    let fact = 1;
      for (let i = 2; i <= n; i++){
          if(Number.isSafeInteger(fact*i)){
              fact = fact * i;
          }
          else {
              let factxi = "0";
              for(let j = 0; j < i; j++){
                  factxi = add(factxi,fact.toString());  
              }
              fact = factxi; 
          }
      }
      return fact.toString();
  }

// alternative solution:
const BigNumber = require('bignumber.js');
BigNumber.config({ EXPONENTIAL_AT: 1000 })

function factorial(n){
  num = new BigNumber(n);
  while (n > 1) {
    num = num.times(n - 1);
    n--;
  }
  return num.toString();
}