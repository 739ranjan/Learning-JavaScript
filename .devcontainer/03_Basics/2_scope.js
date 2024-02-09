let a = 10
const b = 20
var c = 30

console.log(a)
console.log(b)
console.log(c)

// now lets understand scope of different types of variable
var c = 300
// let x = 100
// let y = 200
if(true){
    let x = 10
    const y = 20
    var z = 30
}

// console.log(x)  // will give error as x is not accessible out of scope of if block
// console.log(y)  // will give error as x is not accessible out of scope of if block
console.log(z)   // will print 30 as z is accessible outside of block of if due to block 'scope problem of var'

//----------------------------------part 2-----------------------------------
console.log("..................................part 2..................................")

// nested function
// all the variables of parent function or outer funtion is accessible to inner function while reverse is not true
function one(){
    const username = "shashi"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)  // will give error beacuse we are trying to access outside of the scope of two()
    two()
}

one()

// same is true for if-else

if(true){
    const user = "HII SHASHI"
    if(user === "HII SHASHI"){
        const website = "youtube"
        console.log("User = "+ user)
    }
    // console.log("Website = "+website)  // website will not be accessible outside of the inner if block
}

// console.log("username : "+ user) // user will not be accessible outside if block

console.log(addOne(3)) // this fuinction will be executed even before its declaraion
function addOne(num1){
    return num1 + 1
}

console.log(addOne(4))

// console.log(addTwo(3))  // this function will not be accessible before its declaration
const addTwo = function(num){ // this is also function but sometime it is also called as expresssion
    return num+2
}

addTwo(4)