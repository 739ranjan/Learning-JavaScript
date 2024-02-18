// setInterval() => executes same code time and again after a time interval
//  it takes two arguments 
//      1. function or reference of function
//      2. time interval in millisecond
//      3. any argument that you want to pass to function defined inside setInterval

const firstId = setInterval(function(){
    console.log(`Hii Shashi => ${Date.now()}`)
}, 1000)

// passing argument to function defined inseid setInterval()
const sayHello = function(str){
    console.log(`Hello ${str} => ${Date.now()}`)
}
const secondId = setInterval(sayHello, 1000, "Shashi Ranjan")


// clearInterval() => is a method that stops the execution of setInteval() whose reference is passed to it
clearInterval(firstId)
clearInterval(secondId)



// now i want that on clicking start button it should show Working.... after after each 2 sec and stop writing working... on clicking stop button
let start;
document.querySelector('#start').addEventListener(
    'click', function(){
        start = setInterval(function(){
            document.querySelector("#msg").innerText = `Working... ${Date.now()}`
        }, 2000)
    }, false
)
document.querySelector('#stop').addEventListener(
    'click', function(){
        clearInterval(start)
    }, false
)