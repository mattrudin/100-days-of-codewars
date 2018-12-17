// origin:https://www.codewars.com/kata/slaphead/train/javascript
const bald = arr => {
    const hairNum = arr.split("").filter(element => element === "/").length
    const hairShaved = arr.replace(/\//gi,"-")
    switch (hairNum) {
      case 0:
        return [hairShaved, "Clean!"]
      case 1:
        return [hairShaved, "Unicorn!"]
      case 2:
        return [hairShaved, "Homer!"]
      case 3:
        return [hairShaved, "Careless!"]
      case 4:
        return [hairShaved, "Careless!"]
      case 5:
        return [hairShaved, "Careless!"]
      default:
        return [hairShaved, "Hobo!"]
      }
  }

// alternative solution:
const bald = arr => [ "-".repeat(arr.length), (["Clean","Unicorn","Homer","Careless","Careless","Careless"][arr.split("/").length-1]||"Hobo") +"!"]