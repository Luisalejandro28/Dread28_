let myLvl = parseInt(prompt("Your Level"));
let minMax = 1.5
let sharedMin = (myLvl,minMax) => {
  return myLvl / minMax
}

let sharedMax = (myLvl,minMax) => {
  return myLvl * minMax
}
console.log(sharedMin(myLvl,minMax))
console.log(sharedMax(myLvl,minMax))

let result1 = parseInt(sharedMin(myLvl,minMax))
let result2 = parseInt(sharedMax(myLvl,minMax))

alert(`You share experience with Min ${result1} and Max ${result2}`)



