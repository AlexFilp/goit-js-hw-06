// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color
//  и выводит значение цвета в span.color.

// Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const magicBtn = document.querySelector(".change-color");
const body = document.body;
const colorText = document.querySelector(".color");

function onChangeBodyColor(event) {
  body.style.backgroundColor = getRandomHexColor();
  colorText.textContent = getRandomHexColor();
}

magicBtn.addEventListener("click", onChangeBodyColor);
