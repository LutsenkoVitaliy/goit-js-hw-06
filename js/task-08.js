const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputEmail = event.currentTarget.elements.email.value;
    const inputPassword = event.currentTarget.elements.password.value;
    if (!inputEmail || !inputPassword) {
        alert('ЗАПОЛНИ ВСЕ ПОЛЯ')
    }
    console.log({inputEmail, inputPassword});
});

