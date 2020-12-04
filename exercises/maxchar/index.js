// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// OLD SOLUTION BELOW
// function maxChar(str) {
//   const charactersMap = {};
//   let max = 0;
//   //let maxChar = '';
//   for (let character of str) {
//     charactersMap[character] = charactersMap[character] + 1 || 1
//   };
  
//   for (let character in charactersMap) {
//     if (charactersMap[character] > max) {
//       max = charactersMap[character];
//       maxChar = character;
//     }
//   }
//   return maxChar 
// }


// NEW SOLUTION

function maxChar(str) {
  let frequencyHash = {}
  let arr = str.split('')
  for (val of arr) {
    frequencyHash[val] = frequencyHash[val] + 1 || 1
  }

  maxKey = null
  maxValue = null

  for (const [key, val] of Object.entries(frequencyHash)) {
    console.log({key, val})
    maxValue = Math.max(maxValue, val)
    if (val == maxValue) {
      maxKey = key
    }
  }

  return maxKey

}

module.exports = maxChar;
