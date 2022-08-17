var password = document.getElementById("password");
var UpCase = ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
var LoCase = ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
var numbers = ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
var SpecialChars = ("!", "@", "#", "$", "%", "*");
var passwordLength = (password >= 8, password <=128);

window.prompt("Please choose a password length between 8 and 128 characters long.")
window.prompt("Do you want to include uppercase letters?")
window.prompt("Do you want to include lowercase letters?")
window.prompt("Do you want to include numbers?")
window.prompt("Do you want to include special characters?")

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

for (var i = 0; i <= passwordLength; i++) {

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
