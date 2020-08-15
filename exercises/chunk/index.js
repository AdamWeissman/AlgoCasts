// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(allStudents, sizeOfTeam) {
//   const team = [];
//   for (let student of allStudents) {
//     const mostRecentPick = team[team.length - 1];

//     if (!mostRecentPick || mostRecentPick.length === sizeOfTeam) {
//       team.push([student]);
//     } else {
//       mostRecentPick.push(student);
//     }
//   }

//   return team;
// }

function chunk(array, chunkSize){
  someChunk = [];
  index = 0;
  
  while (index < array.length) {
    someChunk.push(array.slice(index, index + chunkSize))
    index += chunkSize;
  }
  
  return someChunk
}


module.exports = chunk;
