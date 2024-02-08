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

// adding object to an object
console.log("object inside an object example")
const innerObj = {
    email:"shashi@gmail.com",
    fullName:{
        fName : "Shashi",
        lName: "Ranjan"
    }
}
console.log(innerObj)
console.log(innerObj.fullName)
console.log(innerObj.fullName.fName)

//combining Objects
const obj1 = {
    1:'a',
    2:'b'
}
const obj2= {
    3 : 'A',
    4:'B'
}
const obj3 = {obj1, obj2} // this is not the way to combine objects
console.log(obj3)
const obj4 = Object.assign(obj1, obj2) // it the way o combine objects
console.log("Obj4 => ")
console.log(obj4)
const combinedObj = Object.assign({}, obj1, obj2) // this is the proper way as per the documentation ('{}' is optional parameter)
console.log("combined Object => ")
console.log(combinedObj)

// we can also use spread operator to combine objects
const spredObj = {...obj1, ...obj2}
console.log(spredObj)

// some important methods of Object
const user = {
    name:"Shashi",
    course:"Btech",
    sem:8
}

// taking out keys and values from object
console.log("Keys : "+Object.keys(user))
console.log("Values : "+Object.values(user))

// to ckeck the entries of the object
console.log("Entries => ")
console.log(Object.entries(user)) // returns array of key and values

// to check whether a propery exist or not
console.log(user.hasOwnProperty('sem'))


// how to deal with array of objects while dealing with database
const users = [
    {
        id: 1234,
        mail: "1234@gmail.com"
    },
    {
        id:1235,
        mail: "1235@gmail.com"
    },
    {
        id: 1236,
        mail: "1236@gmail.com"
    }
]
console.log(users[1].mail)



// -------------------------------Objects Part 3---------------------------------
console.log("......................................part 3.....................................................")

// de-structuring objects
const course = {
    courseName : "js in hindi",
    price : 999,
    instructor: "Shahsi"
}

// another way of fetching the elements of Objects
const {instructor} = course
console.log(instructor)
//in the above syntax => const {key : any_name} = objectName proving any name to key is optional as done in above
const {courseName : cName} = course
console.log(cName)

