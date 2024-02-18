//Method 1
/*
    // by using onclick attribute inside the tag this is never suggested in pure javascript code while it is used in react code
    ex: <img onclick="alert('river clicked')" width="200px" id="river" src="https://th.bing.com/th/id/OSK.HEROmcWhdCz_lk1IDS2owi44YB8_eF4WWyK50retv29RWJc?rs=1&pid=ImgDetMain" alt="river">
*/

// Method 2
// this do not give any problem but do not gigve much functionality it can be usede while doing propagation
document.getElementById('owl').onclick = function(){
    alert("owl clicked")
}

// Method 3
// hence we use event-listner
document.getElementById('japan').addEventListener('click', function(){
    alert("Japan Clicked")
}, false)   // it is optional to add false sometimes it is required

//Other Methods
/*
    1. attachEvent() => used when Internet Explorer was used
    2. on => in jQuery
*/

document.getElementById('japan').addEventListener('click', function(event){
    console.log(events)// will give different types of event of selected objects like browser event and environment events 
}, false)

/* Things to know in event-listner
     type, timestamp, defaultPrevented
     target, toElement, srcElement, currentTarget
     clientX, clientY, screenX, screenY
     altkey, ctrlkey, shiftkey, keyCode
*/

/*
    Event Propagation : how the event listner will work when two event-listner is triggerd at the same time
    false is value for event-propagation
    Context of event propagation: 
    1. public => false (it is to execute the inner elemnet event listner first then the outer element listner)
    2. private (also called event capturing)=> true (it is to execute the outer elemnet event listner first then the inner element listner)
*/

// public event propagation example
// below code will print 'River clicked' first then 'UL tag clicked'
document.getElementById('images').addEventListener('click', function(event){
    console.log("UL tag clicked") 
}, false)
document.getElementById('river').addEventListener('click', function(event){
    console.log("River Clicked")
}, false)

// private event propagation example
// below code will print 'UL tag clicked' first then 'Photoshop clicked'
document.getElementById('images').addEventListener('click', function(event){
    console.log("UL tag clicked") 
}, true)
document.getElementById('river').addEventListener('click', function(event){
    console.log("Photoshop Clicked")
}, true)


// stopPropagation() => will not let the other listner to propagte 
//  example: below code will only print 'Owl clicked' not 'UL tag Clicked'
document.getElementById('images').addEventListener('click', function(event){
    console.log("UL tag clicked") 
}, false)
document.getElementById('owl').addEventListener('click', function(event){
    console.log("Owl Clicked")
    event.stopPropagation()
}, false)


document.getElementById('google').addEventListener('click', function(e){
    e.preventDefault()
    console.log("google clicked")
    // e.stopPropagation()
}, false)


// removing any element fromk webpage

// document.querySelector('#images').addEventListener('click', function(e){
//     console.log(e.target.parentNode) // will target the parent element
//     let removeIt = e.target.parentNode
//     removeIt.remove() // will remove the node
//     // removeIt.parentNode.removeChild(removeIt) // it first fetches the parent then remove the child 
// }, false)


//removing using tagName property

document.querySelector('#images').addEventListener('click', function(e){
    console.log(e.target.tagName) // prints the name of tag clicked in uppercase
    if(e.target.tagName === 'IMG'){
        let removeIt = e.target.parentNode
        removeIt.parentNode.removeChild(removeIt)
    }
}, false)