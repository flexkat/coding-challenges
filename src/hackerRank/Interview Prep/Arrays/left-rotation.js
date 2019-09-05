// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

function rotLeft(a, d) {
  let array = a
  for (let i = 0; i < d; i++) {
      let firstElement = array.shift()
      array.push(firstElement)
  }
  console.log(array)
  return array
}