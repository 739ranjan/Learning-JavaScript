//----------------------------- reduce ---------------------------------
// reduce function is used when we want to perform any opertion over the array and needs th result as single elements
//  like adding all elemnets, multilpying all elements of array

/**
synatx:
let arr = [1,2,3,4,5]
let total = arr.reduce( (accumulator, currentValue) => accumulator operator currentValue, initialValue)
initial value can be any thing
operator can be +, - *, %, /
currentValue points to the current element of array
accumulator has the result after performing any operation between accumulator and currentValue. inital value of accumulator = initialValue
*/
const myNums = [1, 2, 3, 4, 5]
let total = myNums.reduce((acc, curr) => acc + curr, 0);
console.log(total)

// it can also be written in following manner

total = myNums.reduce( function (acc, curr){
    console.log(`acc = ${acc} & curr = ${curr}`)
    return acc * curr
}, 1)
console.log(total)

// lets add all the price of the item in the cart

let cart = [
    {
        item: 'Book',
        price: 299
    },
    {
        item: 'Pen',
        price: 99
    },
    {
        item: 'Pencil',
        price: 99
    },
    {
        item: 'T-Shirt',
        price: 598
    },
    {
        item: 'Shoe',
        price: 2999
    },
    {
        item: 'Mouse',
        price: 999
    }
]

let totalPrice = cart.reduce((acc, curr) => acc + curr.price , 0)
console.log(totalPrice)