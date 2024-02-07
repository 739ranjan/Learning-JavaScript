// singleton : when we declare variable normally then it is not singleton object

//when we declare with the help of constructor then it is called singleton

//................OBJECT LITERAL...................
console.log("...............object literals.................")
// every object literal has key value pair where key is a string by default and value can be of any type

const jsUser = {
    name : "Shashi",
    "full name" : "Shashi Ranjan",
    age : 22,
    location : "Bihar",
    email : "shashi@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Mon","Sat","Sun"]
}
// to acces the objects value we use following two methods
console.log(jsUser.name)
console.log(jsUser["name"]) // value within square bracket should always be string
// console.log(jsUser.full Name) // will give error it is not allowed as it has two words
// console.log(jsUser."full name") // will give error and is not allowed to write it like this

// hence best way to access object is variableName["key"]
console.log(jsUser["full name"])

// we can add Symbol type of elements to objects also 
const mySymbol = Symbol("value")

const myObj = {
    name:"Shashi",
    age:22,
    [mySymbol] : "Symbol Value"
}
console.log(myObj[mySymbol])
console.log(typeof(myObj[mySymbol]))

// we can change the value of element of any object
myObj.name = "Ranjan"
console.log(myObj)

// we can make the object value fixed by use of 'freeze()'
Object.freeze(myObj)
myObj["age"] = 100 // this will not give error but also will not affect the value
console.log(myObj)

//  adding function to object
const myObj1 = {
    name:"Shashi",
    course:"BTECH"
}
myObj1.greeting = function(){
    console.log(`Hello ${myObj1.name}, Javascript user.I am function. `)
}
console.log(myObj1.greeting) // it will give not give the required result 
console.log(myObj1.greeting()) // it will call the function

// ------------------------OBJECT PART 2--------------------------------
console.log("..................................part2..............................................")
//cretaing singleton object
let tinder = new Object()
console.log(tinder)

//creating non singleton object
let newtinder = {}
console.log(newtinder)

// adding differnt values to object
tinder.id = "T0012"
tinder.name = "Suraj"
console.log(tinder)
