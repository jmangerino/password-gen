// Assignment code here
// Variables used
// Character's used in password 
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialCharacters = "!@#$%^&*";


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

// this is for the prompts about what they want in thier password
  
  upperPrompt = confirm("Would you like to use uppercase letters?")
  
  lowerPrompt = confirm("Would you like to use lowercase letters?") 

  specialPrompt = confirm("Would you like to use numbers?") 

  numberPrompt = confirm("Would you like to use special characters?") 
  }
 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
