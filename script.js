const input = document.getElementById('myInput');
const buttons = document.querySelectorAll('.btn');
const displayBtns = document.querySelectorAll('.text-display');
const resetBtn = document.querySelector('.reset');
const delBtn = document.querySelector('.del');
const radioBtns = document.getElementsByName('theme');
const radio1 = document.getElementById('first');
const radio2 = document.getElementById('second');
const radio3 = document.getElementById('third');
const equalBtn = document.querySelector('.equal');

const operators = ['+', '-', '*', '/', '.'];
let inputText = '';

const bgColor = color => {
  document.body.style.backgroundColor = color;
};

const displayContent = btn => {
  inputText += btn.textContent;
  input.value = inputText;
};

displayBtns.forEach(button => {
  button.addEventListener('click', () => {
    if (operators.includes(inputText[inputText.length - 1])) {
      if (!operators.includes(button.textContent)) {
        displayContent(button);
      }
    } else {
      displayContent(button);
    }
  });
});

equalBtn.addEventListener('click', () => {
  const output = eval(inputText);
  input.value = '';
  inputText = '';
  input.value = output;
  inputText = String(output);
});

delBtn.addEventListener('click', () => {
  if (input.value.length > 0) {
    inputText = inputText.slice(0, inputText.length - 1);
    input.value = inputText;
  }
});

resetBtn.addEventListener('click', () => {
  inputText = '';
  input.value = '';
});

radioBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn === radio2
      ? bgColor('#4F6F52')
      : btn === radio3
      ? bgColor('#5F374B')
      : bgColor('#3b4664');
  });
});
