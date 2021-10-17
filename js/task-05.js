const inputEl = document.querySelector('#name-input')
const outputEl = document.querySelector('#name-output')

const onPressInputName = () => {
    return inputEl.value.trim() === "" ?
        outputEl.textContent = "Anonymous" : outputEl.textContent = inputEl.value
}

inputEl.addEventListener ('input', onPressInputName)