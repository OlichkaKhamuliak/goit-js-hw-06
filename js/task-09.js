function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const navigation = document.querySelector('a');
navigation.classList.add("link");

const body = document.querySelector('body');
body.style.fontFamily = 'Edu TAS Beginner';
body.style.fontStyle = 'italic';


const btnChangeColor = document.querySelector('.change-color');
btnChangeColor.classList.add('btn');

const span = document.querySelector('.color');
span.style.fontSize = '50px';
span.style.fontFamily = 'Edu TAS Beginner';

const handleClick = (event) => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.textContent = color;
};

btnChangeColor.addEventListener("click", handleClick);

