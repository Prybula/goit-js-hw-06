const decrButton = document.querySelector('[data-action="decrement"]');
const incrButton = document.querySelector('[data-action="increment"]');
const baseValue = document.querySelector('#value');

let counterValue = 0;

const decrementValue = () => {
    counterValue -= 1;
    baseValue.textContent = counterValue;
};

const incrementValue = () => {
    counterValue += 1;
    baseValue.textContent = counterValue;
};

decrButton.addEventListener("click", decrementValue);
incrButton.addEventListener("click", incrementValue);