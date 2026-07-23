let num = "I am string"

function evenOrOdd(){
    if(num%2===0){
        console.log("The given number is Even number - ",num)
    }else if(!(num%2===0)){
        console.log("The given number is odd number - ", num)
    }else{
        console.log("The value is not a valid number")
    }
}

evenOrOdd()