const wrapperElement = document.querySelector(".wrapper");
const outputFirstText = document.querySelector(".output-first-text");
const outputSecondText = document.querySelector(".output-second-text");
const inputForm = document.querySelector(".input-form");

let formValues = {
  numberType: null,
  starts: null,
  end: null,
};

inputForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const start = evt.target.querySelector(".number-starts-from").value;
  const end = evt.target.querySelector(".number-ends-at").value;
  const type = evt.target.querySelector(".number-type").value;

  let numbers = [];
  for (let i = start; i <= end; i++) {
    numbers.push(+i);
  }

  let output = {
    firstNum: [],
    secondNum: [],
  };
  let newArr = [];
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (type == 1) {
      if (i % 2 == 0) {
        output.firstNum.push(numbers[i]);
        outputFirstText.textContent = output.firstNum;
      } else {
        output.secondNum.push(numbers[i]);
        outputSecondText.textContent = output.secondNum;
      }
    } else if (type == 2) {
      if (count <= i) {
        newArr.push(numbers.slice(count, count + 2));
        count = count + 2;
      }
    }
  }
  if (newArr.length > 0) {
    for (let i = 0; i < newArr.length; i++) {
      if (i == 0 || i % 2 == 0) {
        output.firstNum.push(newArr[i]);
      } else {
        output.secondNum.push(newArr[i]);
      }
    }
  }
  outputFirstText.textContent = output.firstNum;
  outputSecondText.textContent = output.secondNum;
});

const outputBtn = document.querySelectorAll(".output-btn");

outputBtn[0].addEventListener("click", (evt) => {
  // Get the text field
  let copyTextFirst = document.querySelector(".output-first-text").innerHTML;

  navigator.clipboard.writeText(copyTextFirst);
});

outputBtn[1].addEventListener("click", (evt) => {
  // Get the text field
  let copyTextSecond = document.querySelector(".output-second-text").innerHTML;

  // Select the text field
  navigator.clipboard.writeText(copyTextSecond);
});
