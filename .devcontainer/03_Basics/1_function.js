// function defination

function functionName(){
    console.log("Function Body")
}
// calling function using function name
functionName() // it will execute the function

// function reference : name of function is called function reference
functionName // it will do nothing


// types of function 
// 1. non parameterised function : function which do not have any parameter as shown above
// 2. parameterised function : function having some parameter which is passed while callling
// 3. function without return type : function which do not return nay value
// 4. function with return type : function which return some value at the point where it is called

//function to add 2 numbers (example of function with parametres and without return type)
function addTwoNumber(num1, num2){
    console.log(num1 + num2)
}

addTwoNumber() // it will print NaN as we are not passing any argument
addTwoNumber(3, 4) // 7
addTwoNumber(3,"4") // 34 it will consider both as string
addTwoNumber(3, "asdf") // 2asdf 

// two solve this kind of issue we need to apply the logic of converting to Number and then do the requried addition

// NOTE : when we declare the functrion at that time values passed is called parameters like  num1 and num2 are parameters
// but while the function passed values are called arguments like 3,4,"4", "asdf"

const res = addTwoNumber(10,20)
console.log(res) // it will print undefined as function is not returning any value hence it remains undefined

//function with return type 

function diff(num1, num2){
    return num1-num2
}

diff(4,1)//it will print nothing but will return a value
const difference = diff(4,1)
console.log(difference) // will print 3


function greetUser(userName){
    if(userName === undefined){
        console.log("Please enter username.")
        return
    }
    return `Hii ${userName}, how are you?`
}
console.log(greetUser("Shashi"))
greetUser()

//setting default value to parameters 
function greetUserDefault(userName = "John"){
    if(userName === undefined){
        console.log("Please enter username.")
        return
    }
    return `Hii ${userName}, how are you?<Default Executed>`
}
console.log(greetUserDefault())

// -----------------------------------------Part 2--------------------------------------------
console.log("................................Part 2............................................")

// rest operator in function
// ...num1 is rest operator in below function
function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500)) // this will print array of numbers passed

function calculate(val1, val2, ...num){
    console.log(val1)
    console.log(val2)
    return num
}

// firts two values will be foe val1 & val2 and rest values will be for rest opertor num
console.log(calculate(123,455,12313,67553,5,1234))

// passing and handling objects in function
const user = {
    username : "Shashi",
    price : 199
}
function handleObject(anyobject){
    console.log(`User name is ${anyobject.username} and price is${anyobject.price}`)
}

handleObject(user)


// passing arrys to function
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue([12,3,1,546,22,67,78]))