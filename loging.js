const emailInput = document.getElementById ("email")
const passwordInput = document.getElementById("password")
const loginButton = document.getElementById("login-button")

loginButton.addEventListener ("click" , function () {
    console.log(emailInput.value)
    if ( emailInput.value == "tomakopali@gmail.com" || passwordInput.value == "GoogleAccount" ){ 
        window.location.href = "index.html"
    }
    else {
        console.log("password doesn't match")
    }
})