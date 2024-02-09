// switch statements
/* 
syntax
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

const day = 5
switch (day) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("wedday")
        break;
    case 4:
        console.log("Thursday")
        break; 
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log("not a week day!")
        break;
}

// in switch caseif any case is matched then it will execute all the statements and cases below it (except default case) untill break is encountered
//if no case is matched then default case is executed

// case can only be either number or string
