// https://www.hackerrank.com/challenges/birthday-cake-candles/problem?h_r=profile

function birthdayCakeCandles(ar) {
  let tallest = Math.max(...ar)
  let tally = 0;
  ar.map(number => {
      if (number === tallest) {
          ++tally
      }
  })
  return tally
}