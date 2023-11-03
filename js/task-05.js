const navigation = document.querySelector('a');
navigation.classList.add("link");



const nameInput = document.querySelector('#name-input');
nameInput.style.width = '200px';
nameInput.style.fontFamily = 'Edu TAS Beginner';

const nameOutput = document.querySelector('#name-output')

const tittle = document.querySelector('h1')
tittle.style.fontFamily = 'Edu TAS Beginner';


// nameInput.addEventListener('input', onInput);

// function onInput(evt) {

//     const inputValue = nameInput.value;

//     nameOutput.textContent = inputValue || 'Anonymous'
// }

//------------АБО--------------\\

nameInput.addEventListener("input", (evt) => {
    nameOutput.textContent = evt.currentTarget.value || 'Anonymous';
});