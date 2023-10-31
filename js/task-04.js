const navigation = document.querySelector('a');
navigation.classList.add("link");


// Знаходимо необхідні елементи DOM

const buttonDec = document.querySelector('button[data-action="decrement"]')
// console.dir(buttonDec)
buttonDec.classList.add('btn')


const buttonInc = document.querySelector('button[data-action="increment"]')
// console.dir(buttonInc)
buttonInc.classList.add('btn')

const number = document.querySelector('#value')
// console.dir(number)
buttonInc.classList.add('btn')

const container = document.querySelector('#counter')
container.classList.add('container')


let counterValue = 0;

// Функція для зменшення значення лічильника
buttonDec.addEventListener('click', function () {
    counterValue -= 1;
    number.textContent = counterValue;
});

// Функція для збільшення значення лічильника
buttonInc.addEventListener('click', function () {
    counterValue += 1;
    number.textContent = counterValue;
});


