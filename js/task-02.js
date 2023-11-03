const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

const navigation = document.querySelector('a');
navigation.classList.add("link");

// // Отримуємо посилання на елемент ul#ingredients + додаємо клас list
// const list = document.querySelector('#ingredients')
// // console.dir(list);
// list.classList.add("list");

// // Створюємо порожній масив
// const liArr = []; 

// //Перебираємо масив ingredients, створюємо та налаштовуємо кожен елемент <li>:
// ingredients.forEach(ingredient => {

// const li = document.createElement('li'); // Створюємо новий елемент <li>

// li.textContent = ingredient; // Додаємо текстовий вміст (інгредієнт) в <li>

// li.classList.add("item"); //Додаємо клас "item" до <li>

// liArr.push(li) //Додаємо кожен <li> до масиву liArr
// });

// //Вставляємо liArr з усіма <li> елементами в список <ul> (Всі елементи вставляються за одну операцію, що робить код більш продуктивним.)
// list.append(...liArr); 


//---------------------------АБО------------------------------//

const parentElement = document.getElementById("ingredients");
parentElement.classList.add("list");

//Перетворюємо масив ingredients в масив listIngredients
const listIngredients = ingredients.map(ingredient => {

  //Для кожного елемента ingredient ми створюємо новий <li> елемент + додаємо клас 'item'
  const listIngredient = document.createElement("li");
  listIngredient.classList.add("item");

  //Встановлюємо текстовий вміст
  listIngredient.textContent = ingredient;

  //Повертаємо цей елемент як результат map.
  return listIngredient;
});

//Вставляємо всі <li> елементи в батьківський елемент parentElement за одну операцію:
parentElement.append(...listIngredients);

