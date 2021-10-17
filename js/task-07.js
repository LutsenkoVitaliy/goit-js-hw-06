const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text')

inputEl.value = Number.parseInt(window.getComputedStyle(spanEl).fontSize);

inputEl.addEventListener('input', (event) =>
    spanEl.style.fontSize = `${event.currentTarget.value}px`
)