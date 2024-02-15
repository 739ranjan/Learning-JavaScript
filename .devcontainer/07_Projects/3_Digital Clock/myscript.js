const time = document.querySelector('.time')

// setInterval() method is used to run any function after any fixed interval
// in the below function setInterval() is updating the time's text after 1000 millisecond 
setInterval(function(){
    time.innerText = new Date().toLocaleTimeString()
}, 1000)
