// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//   vowels = ["a","e","i","o","u"]
//   the_string = str.toLowerCase()
//   counter = 0
//   for (let i of the_string.split("")) {
//     if (vowels.includes(i)) {
//       counter+=1;
//     }
//   }
//   return counter
// }

function vowels(str) {
  const matches = str.match(/[aeiou]/gi)
  return matches ? matches.length : 0;
}

module.exports = vowels;
