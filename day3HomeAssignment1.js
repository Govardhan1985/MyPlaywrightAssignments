let num1 = -10

function numbericalUsingSwitch(getNumber){
    switch (true) {
        case (getNumber>0):
            console.log("The number is greater than 0")           
            break;

        case (getNumber<0):
            console.log("The number is less than 0")
            break;

        case (getNumber === 0):
            console.log("The number is equal to 0")
            break;
        default:
            console.log("This is default since none of the conditions met - "+getNumber)
            break;
    }
}

function numbericalUsingIf(getNumber){
    if(getNumber > 0){
        console.log("The number is greater than 0")    
    }else if(getNumber < 0){
        console.log("The number is less than 0")
    }else{
        console.log("getNumber is not a number")
    }
}

numbericalUsingSwitch(num1)
numbericalUsingIf(num1)