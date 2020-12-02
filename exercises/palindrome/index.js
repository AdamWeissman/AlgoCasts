// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//    const reversed = str
//     .split('')
//     .reverse()
//     .join('');

//     return str === reversed
// }

// function palindrome(str) {
//   //let str2 = str.trim()
//   let rev_str = str.split('').reduce((accumulator, currentVal) => {return currentVal + accumulator})
//   return str === rev_str
// }

// function palindrome(str) {
//   return str.split('').every((char, i) => {
//     return char === str[str.length - i - 1]
//   });
// }


// NEW PALINDROME CHECKER USING TWO POINTER APPROACH AS OF 12.2

function palindrome(str) {
  let strToArray = str.split(''),
    left = 0,
    right = strToArray.length - 1

    while (left < right) {
      if (strToArray[left] != strToArray[right]) {
        return false
      } else {
        left++;
        right--;
      }
    }
    return true
}




module.exports = palindrome;
