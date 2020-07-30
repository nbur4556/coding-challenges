// Get input from user
var firstHalfWord = prompt("Enter first half of a word, in lower case");
var secondHalfWord = prompt("Enter second half of a word");

var fullWordLowercase = firstHalfWord + secondHalfWord;
var fullWordUppercase;

// Go through each letter in fullWordLowercase, and add to fullWordUppercase
for (let i = 0; i < fullWordLowercase.length; i++) {
    if (i == 0) {
        // Capitolize the first letter
        fullWordUppercase = fullWordLowercase[i].toUpperCase();
    }
    else {
        // All other letters lowercase
        fullWordUppercase += fullWordLowercase[i].toLowerCase();
    }
}

alert("Your word is " + fullWordUppercase);