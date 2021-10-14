// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// When clicked,, generatePassword needs code that will prompt you of criteria
// Values need to be put into passwordText in order to create these criteria
// I need to make SELECTIONS of criteria to decide on a password
// When selections are made, computer needs to take all options and make a random selection for each character
// then selections need to be logged and returned as an alert so the user can see



// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// the function for picking a random character
function getRandomChar(max) {
  return [Math.floor(Math.random() * max)]
}

// Writing the code for function generatePassword
function generatePassword() {
  var lowerChar = "adefghijklmnopqrstuvwxyz"
  var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numericalChar = "0123456789"
  var specialChar = "~!@#$%^&*()_+"
  var charBank = ""
  var newPassword = ""
  alert("Please select from the criteria in order to make an appropriate password.")
  var charAmount = prompt("How many characters would you like your password to contain?" + "\n" + "(Must contain at least 8 characters and no more than 128.)")

if (charAmount >= 8 && charAmount <= 128) {
  console.log(charAmount)
}
else {
  alert("Invalid input")
  return("Invalid input")
}

var confirmLow = confirm("Would you like to use lowercase characters for your password?")
var confirmUp = confirm("Would you like to use uppercase characters for your password?")
var confirmNum = confirm("Would you like to use numerical characters for your password?")
var confirmSpec = confirm("Would you like to use special characters for your password?")

  if (confirmLow === true) {
    charBank = charBank.concat(lowerChar)
  }

  if (confirmUp === true) {
    charBank = charBank.concat(upperChar)
  }

  if (confirmNum === true) {
    charBank = charBank.concat(numericalChar)
  }

  if (confirmSpec === true) {
    charBank = charBank.concat(specialChar)
  }

  if (confirmLow === false && confirmUp === false && confirmNum === false && confirmSpec === false) {
    alert("You did not select any specifications for your password.")
  }

  for (i = 0; i < charAmount; i++) {
    newPassword = newPassword.concat(charBank.charAt(getRandomChar(charBank.length - 1)))
  }


  return newPassword



}




