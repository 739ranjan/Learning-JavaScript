// NOTE :  while performing any poeration we should use typecasting otherwise it may give unwanted result

/**
 2 + 3 for addition => addition or concatination operator
 2 - 3 for subtraction => subtraction operator
 2 * 3 for multiplication => multiplication operator
 2 / 3 for division => division operator
 2 ** 3 for (2^3 = 8) power => power operator
 2 % 3 for remainder => modulus operator
 */


let val = 3
let neg = -val
console.log(neg)

/**
 if any print string then any number it it gets concatinated instead  of addition 
 i.e, the time it encounter any string after that it treats all the characters string 
 and concatinate them before that it applies addition operation
 */

console.log(1 + 2)
console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 3)
console.log(1 + 2 + "3")
console.log(1 + "2" + 3)

/**
 +true gets converted to positive number i.e, 1
 -true gets converted to -1
  +false gets converted to negative number i.e, 0
 -false gets converted to -0
 true+, true-, false-, false+ will give error
 */
console.log(true)
console.log(+true)
console.log(-true)
console.log(false)
console.log(-false)
console.log(+false)

console.log("conditional on number")
console.log(2 > 3)
console.log(2 >= 3)
console.log(2 < 3)
console.log(2 <= 3)
console.log(2 == 3)
console.log(2 != 3)

/** NoTE : avoid number and string comparison
 if any string consisting of only numbe rcompared with number it gives result by convering the string to number
 if string has any chatacter other than 0 to 9 then it always return false
 */
console.log("Conditional on string and number")
console.log("2" > 1)
console.log(2 > "1")
console.log("2" < 1)
console.log(2 < "1")
console.log("02" < 3)
console.log("02" > 3)
console.log("aw" > 3)

/** NOTE: avoid null and 0 comaprision
 null when strictly compared with 0 ie, either == or > or < then it returns false
 otherwise it returns true i.e, >=, <=, !=
 */
console.log("Conditional on null and 0")
console.log(null > 0)
console.log(null == 0)
console.log(null < 0)
console.log(null <= 0)
console.log(null >= 0)
console.log(null != 0)

/** NOTE: avoid undefined and 0 comaprision
 null when strictly compared with 0 ie, either == or > or < or >= or <= then it returns false
 otherwise it returns true i.e, !=
 */
 console.log("Conditional on undefined and 0")
 console.log(undefined > 0)
 console.log(undefined == 0)
 console.log(undefined < 0)
 console.log(undefined <= 0)
 console.log(undefined >= 0)
 console.log(undefined != 0)

/**
 it strict checking i.e === it checkes for datatype as well value
 */
 console.log("Strict checking")
console.log(2 === 2)
console.log("2" === 2)

