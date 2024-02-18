//  setTimeout is a function which takes two arguments 
//      1. function or reference of function but not function call
//      2. time in milliSecond
// this function does the task of function passed to it after the timei interval supplied to it as argument

// by passing function defination to it
setTimeout(function(){
    console.log("HII")
}, 1000)

// by passing reference of function to it
const sayShashi = function(){
    console.log("Shashi")
}
setTimeout(sayShashi, 5000)


// lets do it on webpage
// suppose i want that after 5 seconds h1 text change to Waited so long
const change = function(){
    document.querySelector('h1').innerText = "Watited so Long"
}

const stop = setTimeout(change, 5000)

// Now how can i stop executing setTimeout()
//  it can be done by calling clearTimeout()

// clearTimeout() is a method that stops the execution of setTimeout() whose reference is passed to it 

// now i want that if the stop button is clicked before 5sec then do not change the text of h1
document.querySelector('#stop').addEventListener(
    'click', function(e){
        clearTimeout(stop)
        console.log("setTimeout() stopped")
    }, false
)