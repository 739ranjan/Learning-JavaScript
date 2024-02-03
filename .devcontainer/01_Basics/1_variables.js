const accId = 123456
let email = "shashi@gmail.com"
var password = "09876"
city = "dehradun"

// accId = 23       // const is not allowed to change
console.log("accountId = " +accId)

email = "ranjan@gmail.com"
console.log("Email = "+ email)

password = "56748"
console.log("Passowrd = "+ password)

city = "mumbai"
console.log("City = "+ city)

// to show all the data in tablular fom we use
console.table([accId, email, password, city])

let state;
// if we do not assign any value to a varaible and try to access then it produces 'undefined'
console.log(state)