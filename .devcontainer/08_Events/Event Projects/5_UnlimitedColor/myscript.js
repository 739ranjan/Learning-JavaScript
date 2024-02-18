// project to learn setInterval() and clearInterval()

// functin to set the color value
function changeColor(){
    // setting rgb value randomly
    let r = Math.floor(Math.random() * 255 + 1)
    let g = Math.floor(Math.random() * 255 + 1)
    let b = Math.floor(Math.random() * 255 + 1)
    let color = `rgb(${r}, ${g}, ${b})`
    return color;
}

let intervalId;

document.querySelector('#start').addEventListener(
    'click', function(){
        if(!intervalId){ // sets the value of intervalId if null
            intervalId = setInterval(function(){
                let color = changeColor()
                document.querySelector("body").style.backgroundColor = `${color}`
                // console.log(color)
            }, 2000)
        }
    }, false
)

document.querySelector('#stop').addEventListener(
    'click', function(){
        clearInterval(intervalId)
        intervalId = null // making it null for better memory utilization 
        // console.log("Stopped")
    }, false
)