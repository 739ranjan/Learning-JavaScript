
// array is declared in following ways

let arr = [1,2,3,4,5]
let arr1 = new Array(1,2,3,4,5,6,7,8,9)
console.log("arr => " +arr)
console.log("arr1 => "+arr1)

// array operation is done on its shallow copy i.e, by using the reference 
// that means any changes done to its reference can also be seen on original array

//deep copy means  original value is copied to some variable and will not affect the varibale whose value is copied

console.log(arr[2]) // array elements can be accessed using index
// it follow 0 based indexing

arr[2] = 1234
console.log(arr[2])

console.log(arr1.length) // to get the length of array

// in JavaScript array can hold elements of different datatypes 
let arr2 = [1,2,3, true,"Shashi"]  
console.log(arr2)

// to insert an element at last we can use push()
arr2.push("hii")
console.log(arr2)

// to remove an element from end we use pop()
console.log(arr2.pop()) // returns deleted element
console.log(arr2)

// to insert any element at beginning we can also use unshift()
arr2.unshift("Hello")
console.log(arr2)

// to remove element from first we use shift()
arr2.shift()
console.log(arr2)

// slice() is used to extract a part of array but do not do any thing to original array
let slicedArry = arr2.slice(1,4) // last index is exclusive
console.log("sliced Array => "+slicedArry)
console.log("Original Array => "+arr2)

// splice() is used to extract the elements from any array and modifies the array with remaining elements
let splicedArray = arr2.splice(1, 4) // last index is inclusive
console.log("spliced Array => "+splicedArray)
console.log("Original Array => "+arr2)


// join() is used to convert the arry into single string
let arr3 = ["Good", "Morning", 1,2, 3, true, "hello", false]
const newArr = arr3.join()
console.log(newArr)
console.log(typeof(newArr))

//------------------------------------------------------Part 2----------------------------------------------------

let marvel = ["ironMan","thor", "spiderMan","hulk"]
let dc = ["flash","superMan", "batman"]

// if we push any array to another arraythen it is inserted as a single element of Array type
marvel.push(dc)
console.log(marvel)

// two array can be merged by using concat()
marvel = ["ironMan","thor", "spiderMan","hulk"]
dc = ["flash","superMan", "batman"]
let merged = dc.concat(marvel) // returns merged array 
console.log(merged)

// same can also be done by spread operator 
let num1 = [1,2,3,4]
let num2 = [5,6,7,8,9]
const allNums = [...num1, ...num2]
console.log(allNums)

// if we have arrys of array of any depth then we can use flat() method to to convert to array
const another = [1,2,3,["hii","hello"],[67,45,23,[2342,12321,4534]]]
console.log(another)
const faltAnother =  another.flat(Infinity)
console.log(faltAnother)


// to check whether an elemnet is present in array or not we use includes()
console.log(faltAnother.includes(98))

// to check whether it is array or not we use isArray()
console.log(Array.isArray(faltAnother))
console.log(Array.isArray("Shashi"))

// to convert to array we use from()
console.log(Array.from("Shashi"))

// to return a new arry from different values we use of()
let n = 1
let b = 2
let c = 129
console.log(Array.of(n,b,c))


// while trying to conver any object to array we need to specify whether arry will have key or value
console.log(Array.from({
    user : "Shashi",
    age : 22,
    course : "BTECH"
}))