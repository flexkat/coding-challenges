// https://www.hackerrank.com/challenges/time-conversion/problem?h_r=profile

function timeConversion(s) {
  let newTime = s
  let splitString = s.split(":")
  if (s.includes("PM") && splitString[0] !== "12") {
      let testValue = parseInt(splitString[0]) + 12
      console.log(testValue)
      if (testValue > 23) {
          splitString[0] = 12 - parseInt(splitString[0])
          splitString[0] = `0${splitString[0]}`
      }
      else {
          splitString[0] = parseInt(splitString[0]) + 12
      }
  }
  else if (s.includes("AM") && splitString[0] === "12") {
      splitString[0] = "00"
  }
  newTime = splitString.join(":")
  console.log(newTime)
  let militaryTime = newTime.slice(0, -2)
  return militaryTime
}
