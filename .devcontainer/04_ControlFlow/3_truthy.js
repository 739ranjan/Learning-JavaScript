// truthy of falsy value
// if a string contains any value then it is considered to be truthy value i.e, true
// if a string is empty then it is consideredfalsy value i.e, false

const email = "shashi@gmail.com"
const em = ""
if(em){
    console.log("Email verified")
}
else{
    console.log("Email not verified")
}

/*
 list of falsy values
    false, 0, -0, BigInt 0n, "", undefined, NaN
 list of truthy values
    true, "0", "false", " ", [], {}, function(){}
 */

// function to check truthy value on array
let arr = [1, 2, 3]
if(arr.length == 0){
    console.log("Empty array")
}
else{
    console.log(`Array has ${arr.length} elements.`)
}

// checking truthy value on objects
// it is similar to array as Object.keys(objectName) will return an arrayof keys of the object
const obj = {
    user: "Shashi"
}
if(Object.keys(obj).length == 0){
    console.log("Empty object")
}
else{
    console.log("Not an empty object.")
}

// Nullish Coalesing Operator (??) : null undefined
// it is generally used for handling error while dealing with database
// it checks if 1st value is valid then assign otherwise assign 2nd value
let val;
val = 5 ?? 10 
console.log(val)

val = null ?? 20
console.log(val)

val = undefined ?? 15
console.log(val)

// if there is multiple null voilance operator then it assign the first valid value that is encountered
val = null ?? 100 ?? 12 ?? 34
console.log(val)

// ternary operator

/**
 synatx
 condition ? true : false
 */

 const icePrice = 100
 icePrice >= 80 ? console.log("Greater then 80") : console.log("Less than 80")