// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//   nS = n.toString().split('');
//   nSR = nS.reverse().join('');
//   return parseInt(nSR) * Math.sign(n)
// }


function reverseInt(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse('')
    .join('')
  
  if (n < 0) { // if n is negative 1, then it is multiplied by -1 and becomes postiive
    return parseInt(reversed) * Math.sign(n)
  }
  return parseInt(reversed) 
}



module.exports = reverseInt;
