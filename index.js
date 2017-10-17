// Code your solution in this file!

const headquarters = 42


function distanceFromHqInBlocks(distance){
  let value = Math.abs(distance - headquarters)
  return value
}

function distanceFromHqInFeet(feet){ 
  let newValue = distanceFromHqInBlocks(feet) * 264 
  return newValue

}