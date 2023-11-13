const navigation = document.querySelector('a');
navigation.classList.add("link");


const textSize = document.querySelector('#font-size-control')
const textElement = document.querySelector('#text')

function defTextSize() {
  textElement.style.fontSize = textSize.value + "px";
}

textSize.addEventListener('input', (evt) => {
    textElement.style.fontSize = textSize.value + 'px';
});

defTextSize()

// const numberLine = textSize.value
// textElement.style.fontSize = `${numberLine}px`
// textSize.addEventListener('input', () => {
//     const number = textSize.value
//     textElement.style.fontSize = `${number}px`
// })