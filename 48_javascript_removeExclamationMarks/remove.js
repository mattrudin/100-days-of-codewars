// origin: https://www.codewars.com/kata/remove-exclamation-marks/train/javascript
const removeExclamationMarks = string => string.split("").filter(char => char !== "!").join("")

// alternative solution:
const removeExclamationMarks = string => string.replace(/!/g,"")