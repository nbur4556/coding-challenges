var firstHalfWord = prompt("Enter first half of a word, in lower case");
var secondHalfWord = prompt("Enter second half of a word");

var fullWordLowercase = firstHalfWord + secondHalfWord;
var fullWordUppercase;

for (let i = 0; i < fullWordLowercase.length; i++) {
    console.log(fullWordLowercase[i]);
    if (i == 0) {
        fullWordUppercase = fullWordLowercase[i].toUpperCase();
    }
    else {
        fullWordUppercase += fullWordLowercase[i].toLowerCase();
    }
}

alert("Your word is " + fullWordUppercase);