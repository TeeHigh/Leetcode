const matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20]]
const matrix2 = [[1,2,3],[4,5,6],[7,8,9]]
const matrix3 = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
const matrix4 = [[1,2,3,4,5,6,7,8],[9,10,11,12,13,14,15,16]]


/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const m = matrix.length, n = matrix[0].length;

  let colbeg = 0, colend = n - 1;
  let rowbeg = 0, rowend = m - 1;

  let result = [];

  while(colbeg <= colend && rowbeg <= rowend){

    // traverse right *
    for(let j = colbeg; j <= colend; j++){
      result.push(matrix[rowbeg][j]);
    }
    rowbeg++;

    // traverse down *
    for(let i = rowbeg; i <= rowend; i++){
      result.push(matrix[i][colend]);
    }
    colend--;

    // traverse left
    if (rowbeg <= rowend){
      for(let j = colend; j >= colbeg; j--){
        result.push(matrix[rowend][j]);
      }
    }
    rowend--;

    // traverse up
    if (colbeg <= colend) {
      for(let i = rowend; i >= rowbeg; i--){
        result.push(matrix[i][colbeg]);
      }
    }
    colbeg++;
  }

  return result;
};

console.log(spiralOrder(matrix));
console.log(spiralOrder(matrix3));
console.log(spiralOrder(matrix4));