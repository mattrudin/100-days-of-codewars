// origin: https://www.codewars.com/kata/growth-of-a-population/train/javascript
const nbYear = (p0, percent, aug, p) => {
    let pop = p0 
    let year = 0
    for(let i = 1; i < Math.sqrt(p); i++) {
      pop = pop * (1+(percent/100)) + aug
      if(pop >= p) {
        year = i
        return year
        }
    }
}

// alternative solution:
function nbYear(p0, percent, aug, p, years = 0) {
    return p0 < p ? nbYear(p0 + p0 * percent / 100 + aug, percent, aug, p, years + 1) : years; 
  }