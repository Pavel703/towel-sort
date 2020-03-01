
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  let Arr = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2) {
      Arr = Arr.concat(matrix[i].reverse());
    } else {
      Arr = Arr.concat(matrix[i]);
    }
  }
  return Arr;
}
