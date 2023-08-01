let display = document.getElementById('display');
let operand1 = null;
let operand2 = null;
let operator = null;

function appendNumber(number) {
  display.value += number;
}

function appendOperator(op) {
  operator = op;
  operand1 = display.value;
  display.value = '';
}

function calculate() {
  operand2 = display.value;
  let result = eval(operand1 + operator + operand2);
  display.value = result;
  operand1 = result;
  operator = null;
  operand2 = null;
}

function clearDisplay() {
  display.value = '';
  operand1 = null;
  operand2 = null;
  operator = null;
}