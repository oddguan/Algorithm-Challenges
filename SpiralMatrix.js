var spiralOrderCorrect = function(matrix) {
  if (matrix === null || matrix.length === 0 || matrix[0].length === 0) return [];
  let res = [];
  let map = {0: [0, 1], 1: [1, 0], 2: [0, -1], 3: [-1, 0]};
  let count = 0;
  let row = 0;
  let col = -1;
  while (res.length < matrix.length * matrix[0].length) {
    let navigation = map[count % 4];
    row += navigation[0];
    col += navigation[1];
    res.push(matrix[row][col]);
    matrix[row][col] = 'X';
    if (isBad(map, count, row, col, matrix)) {
      count++;
    }
  }
  return res;
};

function isBad (map, count, row, col, matrix) {
  let restriction = map[count % 4];
  let newRow = restriction[0] + row;
  let newCol = restriction[1] + col;
  if (newRow < 0 || newRow >= matrix.length) {
    return true;
  } else if (newCol < 0 || newCol >= matrix[0].length) {
    return true;
  } else if (matrix[newRow][newCol] === 'X') {
    return true;
  } else {
    return false;
  }
}

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (!matrix || !matrix.length) {return []};
  const result = [];
  const R = matrix.length;
  const C = matrix[0].length;
  let A = 0, B = 0;
  while(A + B < R && A + B < C) {
    for (let i = B; i < C - B; i++) {
      result.push(matrix[A][i]);
    }
    for (let i = A + 1; i < R - A; i++) {
      result.push(matrix[i][C-B-1]);
    }
    for (let i = C - 2 - 2 * B; i > B; i--) {
      result.push(matrix[R - 1 - A][i]);
    }
    for(let i = R - 1 - 2 * A; i > A; i--) {
      result.push(matrix[i][B]);
    }
    A++;
    B++;
  }
  return result;
};

// console.log(spiralOrder([]));
console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
console.log(spiralOrder([[1,2,3,4,5,6],[4,5,6,7,81,9],[7,82,9,10,11,12],[10,11,12,13,14,15],[7,82,9,10,11,12]]));
console.log(spiralOrderCorrect([[1,2,3,4,5,6],[4,5,6,7,81,9],[7,82,9,10,11,12],[10,11,12,13,14,15],[7,82,9,10,11,12]]));
console.log('break');