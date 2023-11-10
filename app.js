var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var Add = document.getElementById("Add");
var Minus = document.getElementById("Minus");
var Multiply = document.getElementById("Multiply");
var Divide = document.getElementById("Divide");
var Result = document.getElementById("result");
function AddNumber() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a + b;
    Result.textContent = result.toString();
}
Add.addEventListener("click", AddNumber);
function MinusNumber() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a - b;
    Result.textContent = result.toString();
}
Minus.addEventListener("click", MinusNumber);
function MultiplyNumber() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a * b;
    Result.textContent = result.toString();
}
Multiply.addEventListener("click", MultiplyNumber);
function DividedNumber() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a / b;
    Result.textContent = result.toString();
}
Divide.addEventListener("click", DividedNumber);
