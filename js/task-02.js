const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

// // Отримуємо посилання на елемент ul#ingredients + додаємо клас list
// const list = document.querySelector('#ingredients')
// // console.dir(list);
// list.classList.add("list");

// // Створюємо фрагмент (Цей крок створює порожній DocumentFragment, який використовуватиметься для оптимізованого додавання багатьох елементів до DOM за одну операцію.)
// const fragment = document.createDocumentFragment(); 

// //Перебираємо масив ingredients, створюємо та налаштовуємо кожен елемент <li>:
// ingredients.forEach(ingredient => {

// const li = document.createElement('li'); // Створюємо новий елемент <li>

// li.textContent = ingredient; // Додаємо текстовий вміст (інгредієнт) в <li>

// li.classList.add("item"); //Додаємо клас "item" до <li>

// fragment.append(li) //Додаємо кожен <li> до DocumentFragment
// });

// //Вставляємо DocumentFragment з усіма <li> елементами в список <ul> (Всі елементи вставляються за одну операцію, що робить код більш продуктивним.)
// list.append(fragment); 


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

