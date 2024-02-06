
// ----------------------------------------------------------------------------------------------------
//                                         Memory in JavaScript
// ----------------------------------------------------------------------------------------------------
// Stack stores Primitive type 
// Heap stores Reference of Non Primitive type

// In primitive type we get a copy of that value 
// while in reference type we get just the reference of that value not a separate copy

// ex : 
let username = "Shashi"
let name2 = username
name2 = "Ranjan" // name2 has the copy of name so on changing the value only name2 will change

console.log("name : " + username)
console.log("name2 : " + name2)

let user = {
    email:"shashi@gmail.com",
    langauge:"Hindi"
}
let user2 = user
user2.langauge = "English"// we can see that both user and user2 has same language as user2 has the reference of user

console.log("user language = "+ user.langauge)
console.log("user2 language = "+ user2.langauge)