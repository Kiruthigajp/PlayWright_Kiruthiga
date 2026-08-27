//To check whether a number is positive, negative, or zero
function checkNumber(number)
{
    if (number > 0) {
        console.log("The number is positive.");
    } 
    if(number < 0) {
        console.log("The number is Negative.");
    }
    if(number == 0) {
        console.log("The number is Zero.");
    }           
}
checkNumber(5) // Output: The number is positive.
checkNumber(-3) // Output: The number is Negative.
checkNumber(0) // Output: The number is Zero.

//Conditional statements
//Function to check the browser name using if-else statement

function launchBrowser(browserName) {
    if(browserName == "Chrome") {
        console.log("Launched Chrome Browser")
    }
    else{
        console.log("Launched " + browserName + " Browser")
    }
}
launchBrowser("Chrome") // Output: Launched Chrome Browser
launchBrowser("Firefox") // Output: Launched Firefox Browser

//Function to check the test type using switch case
function runtests(testType) {
    switch(testType) {
        case "Smoke":
            console.log("Running Smoke Tests")
            break;
        case "Sanity":
            console.log("Running Sanity Tests")
            break;
        case "Regression":
            console.log("Running Regression Tests")
            break;
        default:
            console.log("Running Smoke Tests")
            break;
    }
}  
runtests("Smoke") // Output: Running Smoke Tests
runtests("Sanity") // Output: Running Sanity Tests
runtests("Regression") // Output: Running Regression Tests
runtests("Functional") // Output: Running Smoke Tests 

//Function to check the grade using switch case by returning the grade value

function gradeCalculation(marks){
    let grade;
    switch(true) {
        case (marks >= 90):
            grade = "A"      
            break;
        case (marks >= 80):
            grade = "B"       
            break;
        case (marks >= 70):
            grade = "C"       
            break;  
        case (marks >= 60):
            grade = "D"        
            break;  
        default:
            grade = "F"        
            break;  
    }
    return(grade)
}   

console.log(gradeCalculation(95)); // Output: A   
console.log(gradeCalculation(86)); // Output: B
console.log(gradeCalculation(72)); // Output: C
console.log(gradeCalculation(69)); // Output: D
console.log(gradeCalculation(50)); // Output: F

