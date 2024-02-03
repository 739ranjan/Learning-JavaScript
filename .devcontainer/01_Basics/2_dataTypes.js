"use strict";   //treates all JS code as newer version

// alert(3 + 3)   // we are using node JS, not browser

let user = "Shashi" //string
let age = 22    //number  => range : (-2^53 + 1) to (2^53 - 1)
// for larger value we have bigint
let isLoggedin = true   //boolean
// null  => standalone value (means empty)
// undefined => when value is not assigned
// symbol => to find tthe uniquness
// oblect 


console.table([[user, age, isLoggedin, null, undefined],[typeof(user), typeof(age), typeof(isLoggedin), typeof(null), typeof(undefined)]])