// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const valuesToAdd = n * n
  startRow = 0 
  endRow = n - 1
  startColumn = 0
  endColumn = n - 1

  totalCounter = 1
  resultArray = []

  for (let i = 0; i < n; i++) {
    results.push []
  }

  while ((startColumn <= endColumn) && (startRow <= endRow)) {
    startColumn++
  }


}

module.exports = matrix;

// is this pushing or not pushing to GitHub, I can't tell...