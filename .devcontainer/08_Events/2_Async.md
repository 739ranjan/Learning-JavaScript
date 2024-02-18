# Javascript is
    1> Synchronous =>  one code after another gets exectuted (by default JS is synchronous) 
    2> Single Threaded => Ecah and every things gets executed on single thread, hence is comparetevly slow language then others

# Execution Context
    1. execute one line of code at a time
    |-> console.log -> 1
    |
    |->console.log -> 2
    |
    |   call stack      +       Memory Heap
    Note => EAch opertaion waits for the last one to complete before executing

# Blocking Code Vs Non-Blocking Code

    ________________________________________________________________________
    |        Blocking Code               |       Non-Blocking Code          |
    |____________________________________|__________________________________|
    | * Block the flow to program        | * Does not block the execution   |
    | ex: I am eating till then you wait | ex: While i am eating you can    |
    | (Here you are not allowed to do any| finish your any work. (Here while|
    |  work while he/she is eating)      | he/she is eating i am allowed to |
    |           |                        | do any work)                     |
    |           |                        |                 |                |
    |           v                        |                 v                |
    | * Read file form Synchronous       | * Read file Asynchronous         |
    |____________________________________|__________________________________|

# Event Loop

    image in copy

    ''' javascript
    console.log(hello)
    '''
