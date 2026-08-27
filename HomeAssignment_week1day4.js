// Function to check if a number is odd or even
function isOddOrEven(num) {
    // Check if the number is divisible by 2
    if (num % 2 === 0) {
        return "The number is Even"; // Return "Even" if the number is even
    } else {
        return "The number is Odd"; // Return "Odd" if the number is odd
    }
}
console.log(isOddOrEven(4)) // Output: "The number is Even"
console.log(isOddOrEven(7)) // Output: "The number is Odd"
