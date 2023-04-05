// Assignment code here


function generatePassword() {
  //prompts user to choose password paramters
  let length = parseInt(window.prompt("How many characters do you want in your password"));

  let includeLowercase = window.confirm("Would you like to include lowercase letters?");
  let includeUppercase = window.confirm("Would you like to include uppercase letters?");
  let includeNumbers = window.confirm("Would you like to include numbers?");
  let includeSymbols = window.confirm("Would you like to include special characters?");
  //defines character sets
  let chars = '';
  
  if (includeLowercase) {
    chars += 'abcdefghijklmnopqrstuvwxyz';
  }

  if (includeUppercase) {
    chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  if (includeNumbers) {
    chars += '0123456789';
  }

  if (includeSymbols) {
    chars += '!@#$%^&*()-_=+[]{}|;:,.<>?';
  }

  let password = '';
  //loops through each character set and selects a random value
  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  let shouldCopy = window.confirm("Do you want to copy the generated password to the clipboard?");
  //for fun, did some research and added another command to provid an option to conveniently copy the output
  if (shouldCopy) {
    let passwordOutput = document.createElement('textarea');
    passwordOutput.value = password;
    document.body.appendChild(passwordOutput);
    passwordOutput.select();
    document.execCommand('copy');
    document.body.removeChild(passwordOutput);
  }
  
  //returns generated value
  return password;

  
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