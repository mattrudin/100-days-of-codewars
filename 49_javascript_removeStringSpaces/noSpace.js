// origin:https://www.codewars.com/kata/remove-string-spaces/train/javascript
const noSpace = string => string.split("").filter(char => char !== " ").join("")

// alternative solution:
const noSpace = string => string.replace(/ /g, "");
