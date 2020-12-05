// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str, wordOrSentence) {
  if (wordOrSentence === 'everyWord') {
    const capitalized = []
    for (let word of str.split(' ')) {
      capitalized.push(word[0].toUpperCase() + word.slice(1))
    }
    return capitalized.join(' ')
  } else if (wordOrSentence === 'onlySentence') {
      const capitalizedSentences = []
      for (let sentence of str.split(/\.\s/) ) {
        console.log(sentence)
        capitalizedSentences.push(sentence[0].toUpperCase() + sentence.slice(1))
      }
      return capitalizedSentences.join('. ')
  }
   
}

module.exports = capitalize;
