//https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

function breakingRecords(scores) {
  let maxScore = scores[0]
  let lowestScore = scores[0]
  let best = 0;
  let worst = 0
  for(let i=0; i<scores.length;i++){
    if(scores[i] > maxScore) {
      maxScore = scores[i]
      best += 1
    } else if (scores[i] < lowestScore) {
      lowestScore = scores[i];
      worst += 1
    }
  }
  return [best, worst]
}