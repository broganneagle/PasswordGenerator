// Assignment Code
var generateBtn = document.querySelector("#generate");

//variables
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt

var confirmLength = " ";
var confirmNumericChar;
var confirmLowerCase;
var confirmUpperCase;
var confirmSpecialChar;



//arrays 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];

//prompt questions
confirmLength = prompt("How many characters do you want your password to be? Min:8 characters Max:128 character");

if (confirmLength < 8 || confirmLength > 128) {
  alert("Password length must be between 8-128 characters!");
  var confirmLength = (prompt("How many characters do you want your password to be? Min:8 characters Max:128 character"));
}

alert("You password will have " + confirmLength + " characters.");

//prompt character types
alert("You will now pick your character types. You must click ok to at least one option.")
confirmNumericChar = confirm("If you would like to include numeric characters, click OK. If not, click cancel.");
confirmLowerCase = confirm("If you would like to include lowercase characters, click OK. If not, click cancel.");
confirmUpperCase = confirm("If you would like to include uppercase characters, click OK. If not, click cancel.");
confirmSpecialChar = confirm("If you would like to include special characters, click OK. If not, click cancel.");

// if stantements for variables

if (confirmNumericChar) {
  password = password.concat(number)
}

else if (confirmLowerCase) {
  password = password.concat(lowerCase)
}

else if (confirmUpperCase) {
  password = password.concat(upperCase)
}

else if (confirmSpecialChar) {
  password = password.concat(specialChar)
}

console.log(password)


var randomPassword = " ";

for (var i = 0; i < confirmLength; i++) {
  randomPassword = randomPassword + password[Math.floor(Math.random() * password.length)];
  console.log(randomPassword)
}
//return randomPassword;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

document.querySelector("#generate").addEventListener("click", writePassword);
