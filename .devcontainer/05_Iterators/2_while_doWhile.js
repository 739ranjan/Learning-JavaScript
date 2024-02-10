// while loop
/*
synatx
let index = 0
while(index<=10){
    body of the loop
    index++
}

step 1: initialisation => index is initilize
step 2: condition checking => index<=10
step 3: body of the loop => all the statements that needs to be iterated
step 4: updation => updating the initilized value
step 5: step 2 to 4 is iterateduntill conditionis false  
*/

// printing even numbers between 1 t0 10
console.log("printing eeve numbers between 1 to 10")
index = 1
while (index<=10) {
    if(index % 2 == 0)
        console.log(index)
    index++
}

console.log("printing elements of array")
let arr = [1,2,3,4,5,6,7]
index = 0
while(index < arr.length){
    console.log(arr[index])
    index++;
}


// do while loop
// this loop is used when we want that at least one time execution of loop body happens 
/**
 syntax:
 let index = 0
 do{
    body of loop
    index++;
 }while(index < 5);

 step 1: initilization => index is initilize
 step 2: body of loop is executed
 step 3: updation of values => index++
 step 4: condition checking => index<5
 step 5: step 2 to 4 is iterateduntill conditionis false  
 */
console.log("printing odd number bet 1 to 10")

// here even if condition is false it will execute for once
index = 11
do{
    if(index % 2 != 0)
        console.log(index)
    index++
}while(index <= 10);