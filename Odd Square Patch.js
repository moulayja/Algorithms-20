
/*
Create a function that takes an array of numbers, and returns the size of the biggest square patch of odd numbers. See examples for a clearer picture.

Examples
oddSquarePatch([
  [1, 2, 4, 9],
  [4, 5, 5, 7],
  [3, 6, 1, 7]
]) ➞ 2

// The 2x2 square at the lower right
// ([5, 7] on the 2nd row, [1, 7] on the third).

oddSquarePatch([[1, 2, 4, 9]]) ➞ 1

// An array with a single row can only have a square patch of
// maximum size 1x1 containing a single odd element.

oddSquarePatch([[2, 4, 6]]) ➞ 0

*/

function oddSquarePatch(arr) {
    // walk from left to right.
    // when you encounter an odd number that will be the top left number of the square.
    // figure out the top right, bottom right and bottom left coords and make sure all nums are odd.
    let biggestSquare = 0;
    for (let col = 0; col < arr[0].length; col++) {
      for (let row = 0; row < arr.length; row++) {
        const topLeft = arr[row][col];
        if (!isOdd(topLeft)) continue;
        console.log(`Top left: ${arr[row][col]}`);
        const result = findBiggestSquare(arr, row, col);
        if (result > biggestSquare) biggestSquare = result;
      }
    }
    return biggestSquare;
  }
  
  function findBiggestSquare(arr, row, col) {
    let offset = 1;
    let biggestSquare = 1;
    while (true) {
      // now walk out by offset until the two paths meet.
      const result = walker(arr, row, col, offset);
      console.log(`Result: ${result}`);
      if (!result) return biggestSquare;
      offset += 1;
      biggestSquare += 1;
    }
  }
  
  function walker(arr, row, col, offset) {
    // walk the rows
    // walk the cols
    for (let idx = 0; idx <= offset; idx++) {
      const fullRow = arr[row + offset];
      if (fullRow === undefined) return false;
      const currRow = fullRow[col + idx];
      console.log(`currRow: ${currRow}`);
      const currCol = arr[row + idx][col + offset];
      if (currCol === undefined) return false;
      console.log(`currCol: ${currCol}`);
      if (!isOdd(currCol) || !isOdd(currRow)) return false;
    }
    return true;
  }
  
  function isOdd(num) {
    if (num === undefined) return false;
    return (num % 2) === 1;
  }

  