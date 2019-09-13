//https://www.hackerrank.com/challenges/apple-and-orange/problem

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let applesOnHouse = 0
  let orangesOnHouse = 0
  
  apples.map(ap => {
   let apDistance = ap + a
    if(apDistance >= s && apDistance <= t) {
      applesOnHouse += 1
    }
  })
  oranges.map(ap => {
   let orDistance = ap + b
    if(orDistance >= s && orDistance <= t) {
      orangesOnHouse += 1
    }
  })
  
  console.log(applesOnHouse)
  
  console.log(orangesOnHouse)
}