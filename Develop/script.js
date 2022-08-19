
const password = document.getElementById("password");
const UpCase = ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
const LoCase = ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
const numbers = ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
const SpecialChars = ("!", "@", "#", "$", "%", "*");
const passwordLength = (password >= 8, password <=128);

function promptMe(){
  var upCase = prompt("Would you like to include uppercase letters?");
  alert (upCase);//change userAdjective
}


window.prompt("Please choose a password length between 8 and 128 characters long.")
window.prompt("Do you want to include uppercase letters?")
window.prompt("Do you want to include lowercase letters?")
window.prompt("Do you want to include numbers?")
window.prompt("Do you want to include special characters?")



const upCase = confirm("Do you want to include uppercase letters?") 
  if (upCase == true) {
    upCase = ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
    passwordLength += upCase.length;
  } else {
    upCase = null;
  }
  console.log(upCase);

const loCase = confirm("Do you want to include uppercase letters?") 
  if (loCase == true) {
    loCase = ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
    passwordLength += loCase.length;
  } else {
    loCase = null;
  }
  console.log(loCase);

const num = confirm("Do you want to include uppercase letters?") 
  if (num == true) {
    num = ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
    passwordLength += num.length;
  } else {
    num = null;
  }
  console.log(num);








function generatePassword() {
  Math.floor(Math.random())//finish this function//

}

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
generateBtn.addEventListener("click", writePassword());

function writePassword() {
  document.getElementById(generate).innerHTML = "password";
}
