// origin: https://www.codewars.com/kata/539a0e4d85e3425cb0000a88

const add = (a) => {
    let addMore = (b) => {
      a += b
      return addMore
    }
    addMore.toString = () => a
    return addMore
  }