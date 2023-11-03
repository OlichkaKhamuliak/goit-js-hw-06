const navigation = document.querySelector('a');
navigation.classList.add("link");



const inputValidation = document.getElementById('validation-input');
inputValidation.style.width = '200px';
inputValidation.style.fontFamily = 'Edu TAS Beginner';

inputValidation.addEventListener('blur', function (evt) {
    const expectedLength = parseInt(inputValidation.getAttribute('data-length')); // Отримуємо очікувану кількість символів

    const inputText = inputValidation.value.trim(); // Видаляємо пробіли з початку та кінця введеного тексту

    if (inputText.length === expectedLength) {
        inputValidation.classList.remove('invalid'); // Видаляємо клас "invalid"
        inputValidation.classList.add('valid'); // Додаємо клас "valid"
    } else {
        inputValidation.classList.remove('valid'); // Видаляємо клас "valid"
        inputValidation.classList.add('invalid'); // Додаємо клас "invalid"
    }
});