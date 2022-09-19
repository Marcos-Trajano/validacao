const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    checkInputs()
});

function checkInputs(){

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === ''){
        errorValidation(username, "Preencha esse campo!")
    } else {
        successValidation(username)
    }

    if(emailValue === ''){
        errorValidation(email, "Preencha esse campo!")
    } else {
        successValidation(email)
    }

    if(passwordValue === ""){
        errorValidation(password,"Preencha esse campo!")
    } else if(passwordValue.length < 8) {
        errorValidation(password,"A senha deve conter mais de 8 caracteres.")
    } else {
        successValidation(password)
    }

    if(password2Value === ""){
        errorValidation(password2, "Preencha esse campo!")

    } else if(password2Value !== passwordValue) {
        errorValidation(password2, "Suas senhas não coincidem!")

    } else {
        successValidation(password2)
    }
}
function errorValidation(input, message) {

    const formControl = input.parentElement
    const small = formControl.querySelector("small")

    small.innerText = message
    formControl.className = "form-control error"
}

function successValidation(input){

    const formControl = input.parentElement

    formControl.className = "form-control success"
}