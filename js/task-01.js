// Отримуємо посилання на елемент ul#categories
const categoriesList = document.querySelector('#categories');
  
// Отримуємо всі елементи li.item в межах ul#categories
const categoryItems = categoriesList.querySelectorAll('li.item');
    
//Консолимо загальну кількість категорій
    console.log(`Number of categories: ${categoryItems.length}.`);

// Використовуємо forEach для перебору кожного елемента li.item
categoryItems.forEach((categoryItem) => {

    // Отримуємо текст заголовку (тегу <h2>) кожної категорії 
    const categoryName = categoryItem.querySelector('h2').textContent;

    // Отримуємо всі елементи li в межах кожної категорії
    const categoryElements = categoryItem.querySelectorAll('ul > li');

    // Створюємо об'єкт для виведення в консоль
    const categoryInfo = {
        Category: categoryName,
        Elements: categoryElements.length,
    };

    console.log(categoryInfo);
});
