// origin: https://www.codewars.com/kata/are-you-playing-banjo/train/javascript
const areYouPlayingBanjo = (name) => name[0].toLowerCase() === 'r' ? `${name} plays banjo` : `${name} does not play banjo`;

// Alternative solution
const areYouPlayingBanjo = name => name + (name.match(/^r/i) ? " plays banjo" : " does not play banjo");
const areYouPlayingBanjo = name => `${name} ${name.match(/^r/i) ? "plays banjo" : "does not play banjo"}`;
