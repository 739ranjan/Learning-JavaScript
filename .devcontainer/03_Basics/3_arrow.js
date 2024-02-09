// defining function inside an object
//  "this" keyword represent the current context

const user = {
    username : "Shashi",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`)
    }
}

user.welcomeMessage()

user.username = "Ranjan"
user.welcomeMessage() // this take username as Ranjan because of curent context used in welcomeMessage function in user object
// if(current context is not used then it woyld have given error)

const user2 = {
    name:"Suraj",
    cost : 123124,
    msg : function(){
        console.log(`${this.name}, your bill is of ₹${this.cost}`)
        console.log(this) // here current context is user2 object hence it will print user2 object
    }
}

user2.msg()
console.log(this) // here current context is node, when it is run in browser it wit current context will be windows

// this inside a function
function chai(){
    console.log(this) // will refer to many things about function
}
chai()

function userChai(){
    let user = "Shashi"
    console.log(this.user) // will print undefined and do not refer to user
}
userChai()


// arrow function
const arrowChai = () => {
    console.log(this) // wil print empty object
    console.log("I am arrow function.")
}
arrowChai()


// synatax
/**
  (argumentsIfAvailable) => {
    body
  }
 */

// explicit way of writing arrow function
  const add = (num1, num2) => {
    return num1 + num2
  }
  console.log(add(3,4))

  // implicit way of writing arrow function

  const diff = (num1, num2) => num2 - num1  // it will return num2-num1
  console.log(diff(10, 56))

  
  const mul = (num1, num2) => (num2 * num1)  // it will return num2*num1
  console.log(mul(10, 5))

  // NOTE : when we use curly beaces then we need to return if we want to return something in arrow function
  // but when we are useing small barcket or without any bracket then we do not need to write return keyword in arrow function

// when we want to return any object using array function then it is compulsory to use small bracket

const obj = () => {username:"Shashi"}
console.log(obj()) // it will print undefined

const obj2 = () => ({username:"Ranjan"})
console.log(obj2())