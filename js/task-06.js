const navigation = document.querySelector('a');
navigation.classList.add("link");



const inputValidation = document.getElementById('validation-input');

inputValidation.addEventListener('blur', function (evt) {
    const expectedLength = parseInt(inputValidation.getAttribute('data-length')); // Отримуємо очікувану кількість символів

    if (inputValidation.value.length > expectedLength) {
        inputValidation.classList.remove('invalid'); // Видаляємо клас "invalid"
        inputValidation.classList.add('valid'); // Додаємо клас "valid"
    } else {
        inputValidation.classList.remove('valid'); // Видаляємо клас "valid"
        inputValidation.classList.add('invalid'); // Додаємо клас "invalid"
    }
});