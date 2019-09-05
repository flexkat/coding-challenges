// https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0
  arr.map(value => {

      if (value > 0) {
          positive += 1
      } else if (value < 0) {
          negative += 1
      } else {
          zero += 1
      }
      return
  })
  let posDecimal = (positive / arr.length).toPrecision(6)
  let negDecimal = (negative / arr.length).toPrecision(6)
  let zeroDecimal = (zero / arr.length).toPrecision(6)
  console.log(posDecimal)
  console.log(negDecimal)
  console.log(zeroDecimal)
}
