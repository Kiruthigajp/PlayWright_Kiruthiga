function reverseString(str) { // Function to reverse a string
    let characters = str.split("")// Split the string into an array of characters
    let reversed = ""

    for (let i = characters.length - 1; i >= 0; i--) {
        reversed = reversed + characters[i]
    }

    return reversed
}

function isPalindrome(str) {// Function to check if a string is a palindrome
    let reversed = reverseString(str)

    if (str === reversed) {
        return true
    } else {
        return false
    }
}

console.log(isPalindrome("madam"))

console.log(isPalindrome("hello"))

//JavaScript function named `printOddNumbers` that prints odd numbers between 1 and 25

function printOddNumbers() { //
    for(let i=1;i<=25;i++){
        if(i%2!==0){
            console.log(i)
        }
    }
}

printOddNumbers();

//Example 1 & 2: Find the length of the last word

function lengthOfLastWord(s) {
    let trimmedString = s.trim()
    let words = trimmedString.split(" ")
    let lastWord = words[words.length - 1]

    return lastWord.length
}

console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord(" fly me to the moon "))


// Example 3: Check if two strings are anagrams

function isAnagram(str1, str2) {
    str1 = str1.replace(/\s/g, "").toLowerCase()
    str2 = str2.replace(/\s/g, "").toLowerCase()

    let sortedStr1 = str1.split("").sort().join("")
    let sortedStr2 = str2.split("").sort().join("")

    return sortedStr1 === sortedStr2
}

console.log(isAnagram("listen", "silent"))
console.log(isAnagram("hello", "world"))