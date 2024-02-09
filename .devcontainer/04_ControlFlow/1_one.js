// if statement
/*
if(condition){
    blcok of code will run when condition == true
}
*/

const isUserLoggedIn = true
if(isUserLoggedIn){
    console.log("User is logged in.")
}

// possible conditions: <, >, <=, >=, ==, !=, ===, !==

// if-else statement

// in if else statement either if part will execute or else part will execute but not both
let temp = 45
if(temp>35){
    console.log("today is too hot")
}else{
    console.log("comfortable temperature")
}

// implict if block scope

let num = 18
if(num>=18) console.log("eligible to vote");
// above code is valid for only one statement after if statement

// for more then one statements we use comma (,) after each statement and at the end we use terminator(;)
if(num>=18) console.log("can vote"),
console.log('being eligible you must vote'),
console.log("voting is your right");


// if else-if else-if else statement
// among multiple if else only one block will be executed
let number = 1000
if(number < 100){
    console.log("less then 100")
}
else if(number < 400){
    console.log("less then 400")
}
else if(number < 800){
    console.log("less then 800")
} 
else if(number < 1200){
    console.log("less then 1200")
}
else{
    console.log("greater then 1200")
}


