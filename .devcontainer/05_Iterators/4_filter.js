
// if we want to return some value from the function in forEach Loop
// then it is not possible it will just return undefined 

let myArr = [12,23,34,45,56,67,78,89,90]

const myValue = myArr.forEach( (num) => {
    // console.log(num)
    return num > 40
})
console.log(myValue)

//----------------------------filter operation----------------------------------------
// do deal with this we use filter operation

const filterOp = myArr.filter( (num) => {
    return num > 40
})
console.log(filterOp)

// now if want to do it using forEach loop then we have to do the below method
let resArr = []
myArr.forEach( (num) => {
    if(num > 40){
        resArr.push(num)
    }
})
console.log(resArr)

// using filter to deal with array of objects which is helpful while dealing with databases
const books = [
    {
        title:'Book 1', genre:'Science', price:6199
    },
    {
        title:'Book 2', genre:'History', price:1999
    },
    {
        title:'Book 3', genre:'History', price:2999
    },
    {
        title:'Book 4', genre:'Fiction', price:9299
    },
    {
        title:'Book 5', genre:'Non-Fiction', price:4991
    },
    {
        title:'Book 6', genre:'Fiction', price:9939
    },
    {
        title:'Book 7', genre:'Science', price:1929
    }
]

// now if we want to fetch all the books that is from fiction genre
const myBooks = books.filter( (book) => book.genre === 'Fiction')
console.log(myBooks)

// now if we want to print all the books whose price is greater than 5000

const costlyBooks = books.filter( (book) => book.price > 5000)
console.log(costlyBooks)

// now if we want to print all the books whose price is greater than 5000 and genre is Non-Fiction

const costlyNonFiction = books.filter( (book) => (book.price > 5000 && book.genre === 'Fiction'))
console.log(costlyNonFiction)