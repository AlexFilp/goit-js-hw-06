// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const counter = document.querySelector("#value");
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

incrementBtn.addEventListener("click", () => {
  console.log("Clicked encrementBtn");
  counterValue += 1;
  counter.textContent = counterValue;
});

decrementBtn.addEventListener("click", () => {
  console.log("Clicked decrementBtn");
  counterValue -= 1;
  counter.textContent = counterValue;
});
