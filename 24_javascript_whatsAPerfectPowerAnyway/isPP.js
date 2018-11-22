//origin: https://www.codewars.com/kata/whats-a-perfect-power-anyway/train/javascript
const isPP = number => {
  for (let i = 2; i*i <= number; i++) {
      for (let j = 2; i**j <= number; j++) {
          if (i**j === number) return [i,j];
      }
  }
  return null;
}
 
// alternative solution
var isPP = function(n){
  for (var m = 2; m <= Math.floor(Math.sqrt(n)); ++m) {
    var k = Math.round(Math.log(n) / Math.log(m))
    if (Math.pow(m, k) == n) return [m, k];
  }
  return null;
}