const moviesForPlaneRideOne = (flightTime, movies) => {
  for(let i = 0; i < movies.length; i++) {
    for(let j=0; j < movies.length; j++){
      if (movies[i] + movies[j] === flightTime && i !== j) return true 
    }
  }
  return false
}
// this version works but is Osquared, ideal to not use a nested loop. 

const moviesForPlaneRideTwo = (flightTime, movies) => {
  let movieObj = {}
  movies.map((movie, i) => movieObj[movie] = i)
  for(let i = 0; i < movies.length; i++) {
    let diff = flightTime - movies[i]

    let movieTwo = movieObj[diff]

    if(movieTwo !== undefined && movieTwo !== i) return true

  }
  return false
}
// here we've utilised a data structure to make comparing easier, to find what we are looking for without going through each element in an array - by transforming our array into an object with the data.
//There is still an optimization that could be made though, as we still have a 2O with the map outside it.


const moviesForPlaneRideThree = (flightTime, movies) => {
  let movieObj = {}
  for(let i = 0; i < movies.length; i++) {
    let diff = flightTime - movies[i]
    movieObj[diff] = true
    console.log(movieObj)

    if(movieObj[movies[i]]) return true

  }
  return false
}

//Now the programme will only look through each movie that it's already seen each time and return once it has found a match. Stopping any unnecessary cycles through the array.
const movieArray = [80, 50, 80]
const flightTime = 160