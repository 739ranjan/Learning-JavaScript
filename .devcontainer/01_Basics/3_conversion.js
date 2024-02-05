// value in any variable can come from multiple source like database, webpage hence it may be in string form
let score = 33
console.log(typeof score)
let scoreInNumber = Number(score)
console.log("score-> " + typeof scoreInNumber)
console.log("score-> " + scoreInNumber)

/* 
any string will get converted to Number data type 
but it will store the actual number only when it consists of numbers 
otherwise it will store NaN
*/
let age = "33abc"
console.log(typeof(age))
let ageInNumber = Number(age)
console.log("age-> " + typeof ageInNumber)
console.log("age-> " + ageInNumber)

/**
 data type of undefined is undefined
 on conversion to number it gets converted to Nan as value
 */
let Undefined = undefined
console.log(typeof Undefined)
let undefinedInNumber = Number(Undefined)
console.log("undefined-> " + typeof undefinedInNumber)
console.log("undefined-> " + undefinedInNumber)

/**
 data type of null is object
 on conversion to Number it converts null to 0
 */
let Null = null
console.log(typeof(Null))
let nullInNumber = Number(Null)
console.log("null-> " + typeof nullInNumber)
console.log("null-> " + nullInNumber)

/**
 true gets converted to 1 and false to 0 on convertion to number
 */
let t = true
console.log(typeof(t))
let tInNumber = Number(t)
console.log("true-> " + typeof tInNumber)
console.log("true-> " + tInNumber)


/**
 any value except 0 and empty string get converted to true on typecasting to Boolean
 0 and empty string is converted to false on typecasting to Boolean0
 */
let True = 1
console.log(typeof(True))
let oneInBoolean = Boolean(True)
console.log("1-> " + typeof oneInBoolean)
console.log("1-> " + oneInBoolean)

let False = 0
console.log(typeof(True))
let zeroInBoolean = Boolean(False)
console.log("1-> " + typeof zeroInBoolean)
console.log("1-> " + zeroInBoolean)

let num = "abc"
console.log(typeof(num))
let numInBoolean = Boolean(num)
console.log("12-> " + typeof numInBoolean)
console.log("12-> " + numInBoolean)

/**
 any number gets converted to string on typecasting to String
 */
 let someNumber = 1234254
 console.log(typeof(someSNumber))
 let someNumberInString = String(someNumber)
 console.log("123454-> " + typeof someNumberInString)
 console.log("123454-> " + someNumberInString)
 