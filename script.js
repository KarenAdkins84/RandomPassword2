
const UpCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const LoCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const SpecialChars = ["!", "@", "#", "$", "%", "*"];


function promptMe(){
  var allChars = []
  var passwordLength = window.prompt("Please choose a password length between 8 and 128 characters long.")
var upcasePrompt = window.confirm("Do you want to include uppercase letters?")
var locasePrompt = window.confirm("Do you want to include lowercase letters?")
var numPrompt = window.confirm("Do you want to include numbers?")
var charPrompt = window.confirm("Do you want to include special characters?")
  if (upcasePrompt == true) {
    allChars= allChars.concat(UpCase)
  }
  if (locasePrompt == true) {
    allChars = allChars.concat(LoCase)
  }
  if (numPrompt == true) {
    allChars = allChars.concat(numbers)
  }
  if (charPrompt == true) {
    allChars = allChars.concat(SpecialChars)
  }
  console.log(allChars)
  var generatedPassword = ""
   for (var i = 0; i <= passwordLength; i++) {
    generatedPassword += allChars[Math.floor(Math.random()*allChars.length)]
}
return generatedPassword
}







// const upCase = confirm("Do you want to include uppercase letters?") 
//   if (upCase == true) {
//     upCase = ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
//     passwordLength += upCase.length;
//   } else {
//     upCase = null;
//   }
//   console.log(upCase);

// const loCase = confirm("Do you want to include uppercase letters?") 
//   if (loCase == true) {
//     loCase = ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
//     passwordLength += loCase.length;
//   } else {
//     loCase = null;
//   }
//   console.log(loCase);

// const num = confirm("Do you want to include uppercase letters?") 
//   if (num == true) {
//     num = ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
//     passwordLength += num.length;
//   } else {
//     num = null;
//   }
//   console.log(num);








// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = promptMe();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());


