const navigation = document.querySelector('a');
navigation.classList.add("link");

const formRegistration = document.querySelector('.login-form');

formRegistration.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
    evt.preventDefault();
    const { elements: { email, password }
    } = evt.currentTarget;
    
    const enteredEmail = email.value;
    const enteredPassword = password.value;

    if (enteredEmail === '' || enteredPassword === '') {

        return alert('Please fill in all the fields!')
    } else {
        const userData = {
            email: enteredEmail,
            password: enteredPassword,
        };

        console.log(userData);

        formRegistration.reset();
    }
}