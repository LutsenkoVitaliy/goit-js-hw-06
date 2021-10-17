const valueInputEl = document.querySelector('#validation-input[data-length]');
console.log(valueInputEl);

const onTargrt = (event) => {
    console.log(event.currentTarget.value.length);
    if (event.currentTarget.value.length === Number(valueInputEl.dataset.length)) {
        valueInputEl.classList.add('valid'),
            valueInputEl.classList.remove('invalid')
    } else {
        valueInputEl.classList.add('invalid'),
        valueInputEl.classList.add('valid')
    }
    
    if (event.currentTarget.value.langth === 0) {
        valueInputEl.classList.remove('invalid')
    }


};
 
valueInputEl.addEventListener('blur', onTargrt)
