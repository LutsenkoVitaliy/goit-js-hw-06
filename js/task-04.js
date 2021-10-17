let counterValue = 0;
const minusNumEl = document.querySelector('[data-action="decrement"]');
const plusNumEl = document.querySelector('[data-action="increment"]');
const numberEl = document.querySelector('#value');



minusNumEl.addEventListener("click", () => {
    counterValue -= 1;
    return numberEl.textContent = counterValue
});
    

plusNumEl.addEventListener("click", () =>
{
    counterValue += 1
    return numberEl.textContent = counterValue
});









