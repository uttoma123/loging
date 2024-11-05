const depositNumber =document.getElementById("deposit-number")
const depositButton =document.getElementById("deposit-button")
const  withdrawNumber =document.getElementById("withdraw-number") 
const  withdrawButton =document.getElementById("withdraw-button") 

const depositValue = document.getElementById("deposit-value")
let depositNumberInt = parseInt(depositValue.innerText)
const withdrawValue = document.getElementById("withdraw-value")
let withdrawNumberInt = parseInt(withdrawValue.innerText)
const balancedValue = document.getElementById("balanced-value")
console.log(balancedValue.innerText)
let balancedNumberInt = parseInt(balancedValue.innerText)

depositButton.addEventListener("click" , function (){
     depositNumberInt += parseInt(depositNumber.value) ;
     depositValue.innerText = depositNumberInt ;
     balancedValue.innerText = depositNumberInt - withdrawNumberInt
     
     
})
withdrawButton.addEventListener("click" , function (){
    withdrawNumberInt  += parseInt(withdrawNumber.value)
    withdrawValue.innerText = withdrawNumberInt ;
    balancedValue.innerText = depositNumberInt - withdrawNumberInt


})