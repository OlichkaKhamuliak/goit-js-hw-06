const navigation = document.querySelector('a');
navigation.classList.add("link");



const nameInput = document.querySelector('#name-input');

const nameOutput = document.querySelector('#name-output')

nameInput.addEventListener('input', onInput);

function onInput(evt) {
    // evt.preventDefault() (скидаємо дефолтну/стандартну поведінку)


    const inputValue = nameInput.value;
    // console.log(inputValue);

    nameOutput.textContent = inputValue || 'Anonymous'
}
