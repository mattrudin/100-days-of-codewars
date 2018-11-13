// origin: https://www.codewars.com/kata/format-words-into-a-sentence/train/javascript
const formatWords = (words) => {
    if (words == false || words == null) {
    return ""
    };
    const filteredWords = words.filter(word => word !== "");
    return filteredWords.length === 1 ? 
      filteredWords.join("") : 
    filteredWords.length === 2 ?
      filteredWords.join(" and ") :
      `${filteredWords.slice(0,-1).join(", ")} and ${filteredWords.slice(-1)}`;
  }

// alternative solution
const formatWords = words => words ? words
  .filter(word => word).join(', ')
  .replace(/,(?=\s\w+$)/g, ' and') : '';