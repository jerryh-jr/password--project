 const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]; 

/* These variables are not been used at this time. Going to try and set up a way for the user to request a password with either characters + special characters + numbers or any variation of it. 

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const specialCharacters = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"] */

const passwordOneEl = document.getElementById(`passwordOne-el`);
const passwordTwoEl = document.getElementById(`passwordTwo-el`);
let passwordOne = "";
let passwordTwo = "";

//Checks to see if password fields are empty if they are it will call the password(), if not it will set the variables to an empty string and then call the password().

function generate() {
    if (passwordOne === "" && passwordTwo === "") {
        password();
    } else {
        passwordOne = "";
        passwordTwo = "";
        password();   
    }
}

function password() {
    //gets data from input field and typecast it to an int
    const passwordLenghtEl = parseInt(document.getElementById(`passwordLenght-el`).value);    
    // iterates the amount of times passed to it from the input field. Each time adding a random number to the passwordOne or Two variable by using Math.random.
    for (let i = 0; i < passwordLenghtEl; i++) {
        passwordOne += characters[Math.floor(Math.random() * characters.length)];
        passwordOneEl.textContent = passwordOne;
        passwordTwo += characters[Math.floor(Math.random() * characters.length)];
        passwordTwoEl.textContent = passwordTwo;
    }
}

//gets content of either password field and copies to the clipboard.

function copy() {
  navigator.clipboard.writeText(passwordOneEl.textContent);
  navigator.clipboard.writeText(passwordTwoEl.textContent);
  alert("Copied Password to Clipboard");
}

/* trying to create a function that would check input against an allowed array of characters. currently just using console.log to get what is typed into the input field. 

function checkInput() {
    console.log(document.getElementById("passwordLenght-el").innerHTML = event.data);
} */