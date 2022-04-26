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

function generatePassword() {
  console.log("just checking that this works");
  //it works 
  //the empty characters variable is to store the user's inputs. the arrays go here, then they get pulled from here randomly.
  var characters = []
  var result = ""
  var passLength = Number(prompt("What length? Please have more than 8 characters and no more than 128"))
  if (passLength < 8 || passLength > 128) {
    alert("Please have more than 8 characters and no more than 128");
    repeat (passLength)
    
  }
  var lowerC = window.confirm("do you want lowercase letters?")
  var upperC = window.confirm("do you want uppercase letters?")
  var num = window.confirm("do you want numbers?")
  var specialCharacter = window.confirm("do you want special characters?")


  console.log(specialCharacter)
  if (specialCharacter == true){
    var specialCharacterArray = ["!","@","#","$","%","^","&","*","(",")","_","+"]
    characters.push(...specialCharacterArray)
  }

  if (lowerC == true){
    var lowerCArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    characters.push(...lowerCArray)
  }


  if (num == true){
    var numArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    characters.push(...numArray)
  }

  if (upperC == true){
    var upperC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    characters.push(...upperC)
  }
 


for (let i = 0; i < passLength; i++) {
 console.log("password length"+ [i]);
 var randomPass = Math.floor(Math.random()*characters.length);
 console.log(result);
 result += characters[randomPass]
}



  return (result);

}

 




