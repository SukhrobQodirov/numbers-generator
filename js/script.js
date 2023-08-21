const wrapperElement = document.querySelector('.wrapper');
const outputFirstText = document.querySelector('.output-first-text');
const outputSecondText = document.querySelector('.output-second-text');
const inputForm = document.querySelector('.input-form');

let formValues = {
    numberType: null,
    starts: null,
    end: null,
}

inputForm.addEventListener('submit', evt => {
    evt.preventDefault();

    const start = evt.target.querySelector('.number-starts-from').value;
    const end = evt.target.querySelector('.number-ends-at').value;
    const type = evt.target.querySelector('.number-type').value;

    let output = {
        firstNum: [],
        secondNum: []
    };

    let numbers = [];
    for(let i = start; i <= end; i++) {
        if(type == 1) {
            if(i % 2 == 0) {
                output.firstNum.push(i);
                outputFirstText.textContent = output.firstNum;
            } else if(i % 2 != 0) {
                output.secondNum.push(i);
                outputSecondText.textContent = output.secondNum;
            }
        } else if (type == 2) {
            let result = {
                firstNum: [],
                secondNum: []
            };

            numbers = [...numbers, +i];

                            
        }
    }
    console.log(numbers);
})

// alert('Hello World');
// prompt('Type your name');

// console.log("Hello World");