// Assignment Code
var generateBtn = document.querySelector("#generate");

//variables

var confirmLength = 0;
var confirmNumericChar;
var confirmLowerCase;
var confirmUpperCase;
var confirmSpecialChar;
var choiceArr = [];
var characterLength;


//arrays 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];

// Write password to the #password input
function writePassword() {

  var passwordText = document.querySelector("#password");
  var correctPrompt = getPrompt();
  if (correctPrompt) {
    var password = generatePassword();
    passwordText.value = password;
    passwordText.setAttribute("class", "password");
  } else {
    passwordText.value = "";
    passwordText.setAttribute("class", "");
  }


  //prompt questions
  function getPrompt() {
    characterLength = parseInt(prompt("How many characters do you want your password to be? Min:8 characters Max:128 character"));
    if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
      alert("Character length has to be from 8-128. Try again!");
      return false;
    }
    if (confirm("If you would like to include numeric characters, click OK. If not, click cancel.")) {
      choiceArr = choiceArr.concat(number);
    }
    if (confirm("If you would like to include lowercase characters, click OK. If not, click cancel.")) {
      choiceArr = choiceArr.concat(lowerCase);
    }
    if (confirm("If you would like to include uppercase characters, click OK. If not, click cancel.")) {
      choiceArr = choiceArr.concat(upperCase);
    }
    if (confirm("If you would like to include special characters, click OK. If not, click cancel.")) {
      choiceArr = choiceArr.concat(specialChar);
    }
    return true;
  }

  //create the random password
  function generatePassword() {
    var password = "";
    for (let i = 0; i < characterLength; i++) {
      var randomLetter = (Math.floor(Math.random() * choiceArr.length));
      password += choiceArr[randomLetter];
    }
    return password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


