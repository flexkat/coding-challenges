// https://www.hackerrank.com/challenges/diagonal-difference/problem
// only working for 5/11 cases though

function diagonalDifference(arr) {
  let diag1 = 0;
  let diag2 = 0;
  let n = arr.length
  for (let i = 0; i < n; i++) {
      diag1 = diag1 + arr[i][i];
      diag2 = diag2 + arr[i][(n - 1) - i]
      console.log(diag2)
  }
  const result = parseInt(diag2) - parseInt(diag1);
  return result
}