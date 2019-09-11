//https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr) {
  let total = arr.reduce((acc, val) => {
    return val + acc
  })
  const minTotal = total - Math.min(...arr)
  const maxTotal = total - Math.max(...arr)
  
  console.log(maxTotal, minTotal)
  }