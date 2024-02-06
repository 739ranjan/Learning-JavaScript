//.......................Dates...........................
console.log(".....................Dates..........................")

let myDate = new Date() // creating date object
console.log(myDate.toString()) // returns day, date, time and coordinate as string
console.log(myDate.toDateString()) // returns only day and date
console.log(myDate.toLocaleString()) // returns date and time ex: 2/6/2024, 5:27:10 PM
console.log(typeof(myDate))

// months satrs from 0 = january; 1 = february; and so on.
console.log("...........Own Date..........")
let myCreatedDate = new Date(2023, 1, 23) // to create our own date
console.log(myCreatedDate.toString()) // returns day, date, time and coordinate as string
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleString())
console.log(typeof(myCreatedDate))

let anotherDate = new Date("2023-02-24")
console.log(anotherDate.toLocaleString())


console.log("...........Timestamp..............")
let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime()) // returns time in milliseconds
console.log(Math.floor(Date.now()/1000)) // to get the time in seconds

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDay()) // returns Day
console.log(newDate.getMonth()) // returns Month
console.log(newDate.getSeconds()) // returns seconds
console.log(newDate.getMinutes()) // returns Minutes
console.log(newDate.getYear()) // returns year
