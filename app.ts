const number1= document.getElementById("number1") as HTMLInputElement
const number2= document.getElementById("number2") as HTMLInputElement


const Add= document.getElementById("Add") as HTMLButtonElement
const Minus= document.getElementById("Minus") as HTMLButtonElement
const Multiply= document.getElementById("Multiply") as HTMLButtonElement
const Divide= document.getElementById("Divide") as HTMLButtonElement

const Result = document.getElementById("result") as HTMLOutputElement

function AddNumber(){
    let a = parseFloat(number1.value)
    let b = parseFloat(number2.value)
    let result = a+b;
    Result.textContent = result.toString();
}
Add.addEventListener("click", AddNumber)

function MinusNumber(){
    let a = parseFloat(number1.value)
    let b = parseFloat(number2.value)
    let result = a-b;
    Result.textContent = result.toString();
}
Minus.addEventListener("click", MinusNumber)

function MultiplyNumber(){
    let a = parseFloat(number1.value)
    let b = parseFloat(number2.value)
    let result = a*b;
    Result.textContent = result.toString();
}
Multiply.addEventListener("click", MultiplyNumber)

function DividedNumber(){
    let a = parseFloat(number1.value)
    let b = parseFloat(number2.value)
    let result = a/b;
    Result.textContent = result.toString();
}
Divide.addEventListener("click", DividedNumber)