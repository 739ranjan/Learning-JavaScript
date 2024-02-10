// High Order Array Loops => are used to iterare through elements of array and objects
// for-of loop

// iterating through array
const arr = [1,2,3,4,6,78,9]
for (const ele of arr) {
    console.log(ele)
}

// iterating through string
console.log("Printing characters of string")
let name = "Shashi_Ranjan"
for (const ch of name) {
    console.log(ch)
}


// Maps
// Mpa holds key value pair and do not remembers the order of elements inserted
// Maps holds unique keys and can have duplicate values
const map = new Map() // declaring a Map
map.set('IN', "India")// setting or inserting values to map
map.set('EN'," England")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('CN', "China")

console.log(map)

for (const key of map) {
    console.log(key) // prints array of one key and value pair ex: ['In', 'India']
}

// to destructue of separate key values  we use

for (const [key, value] of map) {
    console.log(`key = ${key} & value = ${value}`)
}

// for-of loop on objects
const obj = {
    game1: "NFS",
    game2: "GTA",
    game3: "PUBG",
    game4: "IGI"
}

// for(const [key, value] of obj){  // objects are not iteratable in this manner
//     console.log(key)
// }

// --------------------------------- for-in loop-------------------------------
// for-in used to iterate through object
for (const key in obj) {
        console.log(` key -> ${key} & value -> ${obj[key]}`);
}

// using for-in loop to iterate array
const array = [12,23,567,89,121]
for (const ele in array) {
    console.log(ele)// it will print the keys of array i.e, it's index
    console.log(`Key-> ${ele} & value-> ${array[ele]}`)
}

// for in can not be used to iterate over map

// ----------------------------- for-each loop ------------------------------------
// 1st variation
console.log("1st variation")
const lang = ["Java", "C", "Cpp", "Ruby", "JS", "Python"]
lang.forEach(function name(item) {
    console.log(item)
})

// 2nd variarion
console.log("2nd variation")
lang.forEach( (val) => {
    console.log(val)
})

// 3rd variation
console.log("3rd variation")
function printMe(name){
    console.log(name)
}
lang.forEach(printMe)// here we need to pass just the reference of function

// for each loop can take upto 3 parameters those are => item, index, array
console.log("For each with all the three parameters")
lang.forEach((item, index, arr) => {
    console.log(index, item, arr)
})

// iterating through array of objects
const myObj = [
    {
        lang:"java",
        extension: ".java"
    },
    {
        lang:"javaScript",
        extension: ".js"
    },
    {
        lang:"python",
        extension: ".py"
    },
    {
        lang:"C",
        extension: ".c"
    },{
        lang:"C++",
        extension: ".cpp"
    }
]

myObj.forEach( (item) => {
    console.log(`Language -> ${item.lang}, Extension -> ${item.extension}`)
})