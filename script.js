// Assignment code here
// Variables used
// Character's used in password 
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialCharacters = "!@#$%^&*";
var random;
var i = 0;
var password = 0;
var lengthPassword;

var upperPrompt = false;
var lowerPrompt = false;
var specialPrompt = false;
var numberPrompt = false;

// this is to generate a random password
  var generatePassword = function() {

// this is asking how long they want the password
  do {
    lengthPassword = parseInt(window.prompt("How long do you want your password. It has to be a number between 8 and 128."), 10);
    } while (isNaN(lengthPassword) || lengthPassword < 8 || lengthPassword > 128);
console.log(lengthPassword)
// this is for the prompts about what they want in thier password
  
  upperPrompt = confirm("Would you like to use uppercase letters?");
  console.log(upperPrompt)
  lowerPrompt = confirm("Would you like to use lowercase letters?"); 
console.log(lowerPrompt)
  specialPrompt = confirm("Would you like to use special characters?"); 
console.log(specialPrompt)
  numberPrompt = confirm("Would you like to use numbers?"); 
console.log(numberPrompt)
  
while (lengthPassword > i) {
  random = Math.floor(Math.random() * 4);
  console.log(random)
  if (upperPrompt && random == 1) {
    random = Math.floor(Math.random() * upperCase.length)
    password = password + upperCase.charAt(random);
    i++;
} else if (lowerPrompt && random == 2) {
    random = Math.floor(Math.random() * lowerCase.length)
    password = password + lowerCase.charAt(random);
    i++;
} else if (numberPrompt && random == 3) {
    random = Math.floor(Math.random() * numbers.length)
    password = password + numbers.charAt(random);
    i++;
} else if (specialPrompt && random == 4) {
    random = Math.floor(Math.random() * specialCharacters.length)
    password = password + specialCharacters.charAt(random);
    i++;
}; 
console.log(password)
}}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
console.log(password)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);