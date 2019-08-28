// https://www.hackerrank.com/challenges/compare-the-triplets/problem?h_r=profile

function compareTriplets(a, b) {
  let aScore = 0;
  let bScore = 0
  for (let i = 0; i < a.length; i++) {
      if (a[i] > b[i]) {
          aScore = aScore + 1
      }
      else if (a[i] < b[i]) {
          bScore = bScore + 1
      }
  }
  return [aScore, bScore]
}

