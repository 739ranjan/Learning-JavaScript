//...................................Numbers.....................................................
const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(2)) //  for two digit floating point number (precision value)
const otherNumber = 23.8966

console.log(otherNumber.toPrecision(1)) // it returns the value by considering all the digits before and after decimal 

const hundreds = 100000
console.log(hundreds.toLocaleString()) // to represent the number in english number system
console.log(hundreds.toLocaleString('en-IN')) // to represent the number in indian number system


//..............................................Maths..........................................................

console.log("............................Maths........................")
console.log(Math.abs(-347568)) // returns absolute value
console.log(Math.sqrt(64)) // returns square root of argument passed
console.log(Math.round(4.265)) // returns rounded value of arguments passed
console.log(Math.floor(4.2)) // return floor value of number passed
console.log(Math.ceil(2.4)) // returns celing value of number passesd as argument
console.log(Math.min(12,11)) // returns minimum among two value
console.log(Math.max(1223,123342)) // returns maximum among two

console.log(Math.random())// returns random number between 0 and 1
// to generate any random number between 1 to 10
console.log(Math.random()*10 + 1)

// to generate any random number between 10 and 30
const min = 10
const max = 30
let random = Math.floor(Math.random() * (max - min)) + min
console.log(random)