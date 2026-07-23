
function launchBrowser(browserName){
    if(browserName === "Chrome"){
        console.log("Browser is chrome")
    }else{
        console.log("Other browser")
    }

}

function runTests(typeOfTest){
    switch(typeOfTest){
        case "Smoke":{
            console.log("Testing Type is smoke")
            break;
        }

        case "Sanity":{
            console.log("Testing Type is Sanity")
            break;
        }

        case "Regression":{
            console.log("Testing type is Regression")
            break;
        }

        default:{
            console.log("Testing type is Smoke")
            break;
        }
    }
}

launchBrowser("Chrome")
runTests("Sample")