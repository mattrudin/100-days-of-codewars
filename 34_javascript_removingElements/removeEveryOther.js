// origin: https://www.codewars.com/kata/removing-elements/train/javascript
const removeEveryOther = arr => {
    return arr.filter((element, index) => index % 2 === 0)
  }

// alternative solution:
const removeEveryOther = arr => arr.filter((item, index) =>  index % 2 == 0);