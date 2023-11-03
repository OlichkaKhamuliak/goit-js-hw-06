function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const navigation = document.querySelector('a');
navigation.classList.add("link");



const input = document.querySelector('input');
input.style.width = '150px';
input.style.fontFamily = 'Edu TAS Beginner';
input.style.fontSize = '30px';
input.style.textAlign = 'center';




const createBtn = document.querySelector('[data-create]');
createBtn.classList.add('btn');

const destroyBtn = document.querySelector('[data-destroy]');
destroyBtn.classList.add('btn');


const boxesContainer = document.querySelector('#boxes');

// Додавання слухача події на кнопку "Create"
createBtn.addEventListener('click', () => {
    // Виклик функції createBoxes зі значенням з поля вводу
  const boxesArr = createBoxes(input.value)
    // Додавання коробок до контейнера
  boxesContainer.append(...boxesArr)
});

// Додавання слухача події на кнопку "Destroy"
destroyBtn.addEventListener('click', destroyBoxes)

// Функція для створення масиву коробок
function createBoxes(amount) {
  const baseSize = 30;
  const boxesArr = [];

  for (let i = 0; i < amount; i+=1) {
    const size = baseSize + i * 10;
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesArr.push(box);
  }
  return boxesArr
}

function destroyBoxes() {
    // Очищення вмісту контейнера
  boxesContainer.innerHTML = '';
}
