//задание 1
function func1(a,b){
    if (a<b){
        console.log(a);
    }else{
        console.log(b);
    }
}
func1(3,1)


//задание 2
function func2(str){
    console.log(str.length)
}
func2("длина строки")

//задание 3


function calculator() {
    var a = prompt("Введите первое число:");
    var b = prompt("Введите второе число:");
    var operator = prompt("Введите сивол (+, -, *, /):");

    if (operator === "/" && b === 0) {
        alert("Делить на ноль нельзя");
        return;
    }

    var result;

    if (operator === "/") {
        result = a / b;
    } else if (operator === "*") {
        result = a * b;
    } else if (operator === "-") {
        result = a - b;
    } else if (operator === "+") {
        result = a + b;
    } else {
        alert("Неверный оператор");
        return;
    }

    alert("Результат: " + result);
}
calculator();

