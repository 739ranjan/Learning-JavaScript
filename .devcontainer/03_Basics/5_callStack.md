Javascript Execution Context
Javascript has various type of execution context:
    1. Global execution context
    2. Function Execution context
    3. Eval Execution Context

Javascriipt is single threaded.

How code is executed in Javascript?
=> In js code is executed in two phases
    1. Memory Creation phase : Memory is allocated to declared variables
    2. Execution Phase : all the execution happens in this pahse

example: 
let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return  total
}
let result1 = addNum(val1, val2)
le result2 = addNum(10, 2)

Step 1: global execution/ global environment : it allocated in 'this' keyword
step 2 : memory creation phase : memoty is created for each variable nd value is assigned
        val1 -> undefined
        val2 -> undefined
        addNum -> defination
        result1 -> undefined
        result2 -> undefined
 step 3:  execution phase : value is assigned to those variable
        val1 <- 10
        val2 <- 5
        addNum -> a new execution context will be generated for addNum function 
            consisting of (new variable environment and execution thread)
                    memory phase : 
                            num1 -> undefined
                            num2 -> undefined
                            total -> undefined
                    execution context:
                            num1 <- 10
                            num2 <- 5
                            total <- 15
                            then total is returned to global execution context
                            once the value is returned to global execution context its execution context will  be deleted
        result1 <- 15
        result2 <- again new variable environment and execution environment will be created and return 10+2 = 12

Call Stack :  when executing any program a stack is maintained
^                    ^
| addNum(10, 2)      |
| addNum(val1, val2) |
| Gloabl execution   |
----------------------





                    