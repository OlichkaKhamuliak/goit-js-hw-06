const navigation = document.querySelector('a');
navigation.classList.add("link");

// Отримуємо посилання на елемент ul#categories + додаємо клас list
const categoriesList = document.querySelector('#categories');
categoriesList.classList.add("list");
  
// Отримуємо всі елементи li.item в межах ul#categories
const categoryItems = categoriesList.querySelectorAll('li.item');

//Консолимо загальну кількість категорій
    console.log(`Number of categories: ${categoryItems.length}.`);

// Використовуємо forEach для перебору кожного елемента li.item
categoryItems.forEach((categoryItem) => {

    // Отримуємо текст заголовку (тегу <h2>) кожної категорії 
    const categoryName = categoryItem.querySelector('h2').textContent;

    // Знайдемо всі внутрішні списки ul
  const subcategoryLists = categoryItem.querySelectorAll('ul');

    // Пройдемося по кожному внутрішньому списку та змінимо маркери на квадрати
    subcategoryLists.forEach((ul) => {
        ul.style.listStyleType = 'square';
      });

    // Отримуємо всі елементи li в межах кожної категорії
    const categoryElements = categoryItem.querySelectorAll('ul > li');

    // Створюємо об'єкт для виведення в консоль
    const categoryInfo = {
        Category: categoryName,
        Elements: categoryElements.length,
    };

    console.log(categoryInfo);
    
//    console.log(`Category: ${categoryName}
// Elements: ${categoryElements.length}`);
});

