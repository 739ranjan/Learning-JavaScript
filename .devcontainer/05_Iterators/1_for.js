// for loop
/**
 Syntax :
for (let index = 0; condition; index++) {
    body of for loop  
}
 */
for(let index = 0; index<10; index++){
    console.log(index)
}

/* steps of execution
step1 : initilisation => it is executed only once
        let index = 0
step 2 : condition checking => if condition is true then body of for loop is executed
        console.log(index)
step 3: updation => value is updated
        index++
now step 2 and 3 is repeated untill condition is false
*/

// break inside a loop
// break inside a loop will stop execution that loop further

for (let i = 0; i <= 10; i++) {
    if(i == 5){
        console.log("5 is encountered")
        break // will not further execute
    }
    console.log(i)
}

// continue inside a for loop
// if continue is encounted inside a loop then for that iteration it will skip the rest of the code inside for block
for (let i = 0; i <=8 ; i++) {
    if(i == 5){
        console.log("5 is encounterd hence skip rest")
        continue
    }
    console.log(i)
    
}
