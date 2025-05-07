const lenghtSlider = document.querySelector(".pass-lenght input");
const options = document.querySelectorAll(".option input");
const copyIcon = document.querySelector(".input-box span");
const passwordInput = document.querySelector(".input-box input");
const passIndicator = document.querySelector(".pass-indicator");
const generateBtn = document.querySelector(".generate-btn")

// Create characters Object

const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    Uppercase: "ABCEDFGHIJKLMNOPQRSTUVWXYZ",
    Numbers: "1234567890",
    Symbols: "~!@#$%^&*(){}[]:;<>,.?/"
}

const generatePassword = () => {
    let staticPassword = "",
    randomPassword = "",
    excludeDuplicate = false,
    passLenght = lenghtSlider.value;

    options.forEach(option =>{
        if(option.checked){
            if(option.id !== "exc-duplicate" && option.id !== "space"){
                staticPassword += characters[option.id];
            }else if (option.id === "space") {
                staticPassword += `   {staticPassword}`;
            }else {
                excludeDuplicate
            }
        }
    })


} 