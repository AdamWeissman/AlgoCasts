// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//  const arr = str.split('')
//  arr.reverse()
//  return arr.join('')
// }

// function reverse(str) {
//   return str.split('').reverse().join('')
// }

function reverse(str) {
  let reversed = '';
  
  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

// function reverse(str) {
//   return str.split('').reduce((reversed, character) => {
//     return character + reversed;
//   }, '')
// }

// NOTE THE ABOVE WERE FROM OFFICIAL SOLUTIONS AND TESTS PRIOR TO 12/1
// NOTE BELOW IS FOR PRACTICE AS OF 12.1.2020

function reverse(theString) {
  let str = theString.split(''),
    left = 0,
    right = str.length - 1 
  
  while (left < right) {
    let temp = str[left]
    str[left] = str[right]
    str[right] = temp
    left++;
    right--;
  }
  return str.join('')
}





module.exports = reverse;
