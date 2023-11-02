const navigation = document.querySelector('a');
navigation.classList.add("link");



const nameInput = document.querySelector('#name-input');

const nameOutput = document.querySelector('#name-output')

// nameInput.addEventListener('input', onInput);

// function onInput(evt) {

//     const inputValue = nameInput.value;

//     nameOutput.textContent = inputValue || 'Anonymous'
// }

//------------АБО--------------\\

nameInput.addEventListener("input", (evt) => {
    nameOutput.textContent = evt.currentTarget.value || 'Anonymous';
});