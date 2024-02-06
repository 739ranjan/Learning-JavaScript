let user = "Shashi"
let age = 22

console.log(user + " is "+age+" years old")
// while printing string along with variables value we can use the below technique also
console.log(`${user} is ${age} years old`)

// characters of a string can be accesssed by index value also
console.log(user[0])

// string can also be declared by the following method
const newName = new String("shashiRanjan")

console.log(newName[4])
// to print the object we use
console.log(newName.__proto__)

// length property of string to find the length of string
console.log(newName.length)

// to use the methods of string we use dot operator
console.log(newName.toUpperCase()) //  toUpperCase() method do not change the existing string rather it returns a new modified string

console.log(newName.charAt(2))
console.log(newName.indexOf('j'))

const fName = new String(newName.substring(0, 6))
console.log("First Name :" +fName)

// while using slice we can use negative index also but in case of substring -ve index value is not allowed
const lName = new String(newName.slice(6))
console.log("Second Name :" +lName)

// to remove leading and trailing spaces we use trim() method
let space = "    hello Shashi    "
console.log(space.trim()) // to remove spaces from both end
console.log(space.trimStart()) // to remove the spaces from begining
console.log(space.trimEnd()) // to remove the spaces from end

// in url each space is replaced by "%20"
const url = "https://www.github.com/shashi%20ranjan"
console.log(url.replace('%20','-'))

console.log(url.includes("shashi")) // checks whether passed agrument is present in the string or not

const greetings = "hii,Hello,goodMorning,goodevening"
console.log(greetings.split(",")) // returns array of of strings by removing all the demiliter passed

console.log(greetings.split(",", 2)) // returns array of strings formed by removing first two delimiter passed