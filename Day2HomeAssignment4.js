let studentScore = 90
let grade = null


function gradeCalculation(score){

    switch(true){
        case (score >= 40 && score<60):
            grade = 'C'
            break;
        case(score >=60 && score<74):
            grade = 'B'
            break;
        case(score >=75 && score < 90):
            grade = 'C'
            break;
        case(score >=90 && score <=100):
            grade = 'A+'
            break;
        case(score<40):
            grade = 'F'
            break;
        default:
            grade = 'Not a valid Grade. Please enter a valid grade'
    }
    return grade
}

studentGrade = gradeCalculation(studentScore)

console.log("Grade = ",studentGrade)