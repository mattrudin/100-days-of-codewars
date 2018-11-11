// origin: https://www.codewars.com/kata/52ea928a1ef5cfec800003ee
const ipToInt32 = (ip) => {
    const BitString = ip.split(".").map(string => Number(string).toString(2).padStart(8,"0")).join("")
    const BitNumber = parseInt(BitString,2)
    return BitNumber
  }

// alternative solution
function ipToInt32(ip){
    return ip.split(".").reduce((int,v) => int*256 + +v )
 }