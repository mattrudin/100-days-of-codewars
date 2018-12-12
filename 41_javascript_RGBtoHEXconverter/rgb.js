// origin: https://www.codewars.com/kata/rgb-to-hex-conversion/train/javascript
const rgb = (r, g, b) => {
    let R = r > 255 ? "FF" : r < 0 ? "00" : r.toString(16).toUpperCase().padStart(2,"0")
    let G = g > 255 ? "FF" : g < 0 ? "00" : g.toString(16).toUpperCase().padStart(2,"0")
    let B = b > 255 ? "FF" : b < 0 ? "00" : b.toString(16).toUpperCase().padStart(2,"0")
    return `${R}${G}${B}`  
  }
  
  // alternative solution:
  function rgb(r, g, b){
    return [r,g,b].map(function(x) {
      return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
    }).join('').toUpperCase();
  }
  