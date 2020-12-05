// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(facialRecognitionCaptureA, facialRecognitionCaptureB) {

//   const faceParser = (facialFeatures) => { // this is the same as The Snitch
//     facialFeaturesBrokenDown = {};
//     for (let feature of facialFeatures.replace(/[^\w]/g, "").toLowerCase()) {
//       facialFeaturesBrokenDown[feature] = facialFeaturesBrokenDown[feature] + 1 || 1
//     }
//   return facialFeaturesBrokenDown
//   }

//   const faceDataScrubbedA = faceParser(facialRecognitionCaptureA)
//   const faceDataScrubbedB = faceParser(facialRecognitionCaptureB)

//   console.log(faceDataScrubbedA)
//   console.log(faceDataScrubbedB)

//   if (Object.keys(faceDataScrubbedA).length !== Object.keys(faceDataScrubbedB).length) { 
//     return false;
//   } 

//   for (let val in faceDataScrubbedA) {
//     if (faceDataScrubbedA[val] !== faceDataScrubbedB[val]) {
//       console.log(faceDataScrubbedB[val])
//       return false
//     }
//   }
   
//   return true;
  
// }


// GROUP ANAGRAMS




// function anagrams(str1, str2) {
//   const cleaner = (str) => {
//     return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
//   }

//   return cleaner(str1) === cleaner(str2)
// }


// ANAGRAM PRACTICE 12.20

const re = /[^\w]/g

function anagrams(stringA, stringB) {
  const w1 = stringA.replace(re, "").toLowerCase()
  const w2 = stringB.replace(re, "").toLowerCase()
  const x = w1.split('').sort().join('')
  const y = w2.split('').sort().join('')
  return (x == y)
}

module.exports = anagrams;
