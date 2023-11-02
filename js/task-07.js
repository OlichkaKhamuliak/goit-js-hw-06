const navigation = document.querySelector('a');
navigation.classList.add("link");


const textInput = document.querySelector('#font-size-control')
const textElement = document.querySelector('#text')

textInput.addEventListener('input', (evt) => {
    const fontSize = textInput.value + 'px';
    textElement.style.fontSize = fontSize;
});