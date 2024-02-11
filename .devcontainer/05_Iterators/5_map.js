//--------------------map-----------------------------

// it can used similar to forEach but it will return sonme value
let arr = [10, 20, 30, 40, 50 ,60 ,70, 80, 90]

// if we want to add 5 to each number
const arrPlus5 = arr.map( (num) => num + 5)
console.log(arrPlus5) 

// chaining
//  in Chaining we are applying different operation one after the other by the use of dot (.) operator

// in the below example we are trying to find out all those number of arr which are > 3
//  after we add two and apply mod 12 to them
const chain = arr.map((num) => num + 2) // will have [12,22,32,42,52,62,72,82,92]
                .map((num) => num % 12) // will have [0,12,8,6,4,2,0,10,8]
                .filter((num) => num > 3) // will have [ 10, 8, 6, 4, 10, 8 ]
console.log(chain)