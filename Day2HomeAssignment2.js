function takeNumberAsParameter(num1){
    if(typeof num1 !== 'number'){
        return "Not a number"
    }else if(num1 > 0){
        return "Positive"
    }else if(num1 <0){
        return "Negative"
    }else if(num1 === 0){
        return null
    }

}

output = takeNumberAsParameter(0)

if(output === "Not a number"){
    console.log("The given value is not a number - ")
}else if(output === "Positive"){
    console.log("The given value is a positive number")
}else if(output === "Negative"){
    console.log("The Given value is Negative")   
}else if(output === null){
    console.log("The given value is 0")
}