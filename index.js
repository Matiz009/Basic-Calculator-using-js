input_1 = document.getElementById("one");
input_2 = document.getElementById("two");
btn_add = document.getElementById("add");
btn_subtract = document.getElementById("subtract");
btn_multiply = document.getElementById("multiply");
btn_divide = document.getElementById("divide");
result = document.getElementById("result");

let result_value;

btn_add.addEventListener("click", function() {
    result_value = parseFloat(input_1.value) + parseFloat(input_2.value);
    result.innerHTML = "Sum of numbers is " + result_value;
    input_1.value = "";
    input_2.value = "";
});

btn_subtract.addEventListener("click", function() {
    result_value = parseFloat(input_1.value) - parseFloat(input_2.value);
    result.innerHTML = "Subtraction of numbers is " + result_value;
    input_1.value = "";
    input_2.value = "";
});

btn_multiply.addEventListener("click", function() {
    result_value = parseFloat(input_1.value) * parseFloat(input_2.value);
    result.innerHTML = "Multiplication of numbers is " + result_value;
    input_1.value = "";
    input_2.value = "";
});

btn_divide.addEventListener("click", function() {
    if (input_2.value == 0) {
        result.innerHTML = "Cannot divide by zero";
    } else if (input_2.value > 0) {
        result_value = parseFloat(input_1.value) / parseFloat(input_2.value);
        result.innerHTML = "Division of numbers is " + result_value;
        input_1.value = "";
        input_2.value = "";
    }
});