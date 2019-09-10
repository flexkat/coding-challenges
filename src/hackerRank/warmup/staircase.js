//https://www.hackerrank.com/challenges/staircase/problem

function staircase(n) {
  let string = "#"
  let times = n
  let empty = " "
  
  for(let i=1; i <= n; i++) {
    
    console.log(empty.repeat(times - i) + string.repeat(i))
  }
}