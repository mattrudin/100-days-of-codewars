// origin: https://www.codewars.com/kata/password-maker/train/javascript
const makePassword = phrase => (
    phrase.split(" ")
    .map(word => word[0] === "i" || word[0] === "I" ? "1" : word[0])
    .map(word => word[0] === "o" || word[0] === "O" ? "0" : word[0])
    .map(word => word[0] === "s" || word[0] === "S" ? "5" : word[0])
    .join("")
  )
  