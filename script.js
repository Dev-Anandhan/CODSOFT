let display = document.getElementById('display');

function appendNumber(number) {
  if (display.innerText === '0') {
    display.innerText = number;
  } else {
    display.innerText += number;
  }
}

function appendOperator(operator) {
  const lastChar = display.innerText.slice(-1);
  if ('+-*/'.includes(lastChar)) {
    display.innerText = display.innerText.slice(0, -1) + operator;
  } else {
    display.innerText += operator;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function deleteLast() {
  let text = display.innerText;
  if (text.length > 1) {
    display.innerText = text.slice(0, -1);
  } else {
    display.innerText = '0';
  }
}

function calculateResult() {
  try {
    const result = eval(display.innerText.replace('×', '*').replace('÷', '/'));
    display.innerText = result;
  } catch (error) {
    display.innerText = 'Error';
  }
}
