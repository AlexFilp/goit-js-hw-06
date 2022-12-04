// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// 1.  Размеры самого первого <div> - 30px на 30px.
// 2.  Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// 3.  Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
const input = document.querySelector("#controls input");

const createBoxes = (amount) => {
  let basicSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const size = basicSize + i * 10;
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxes.append(div);
  }
};

const getAmount = (amount) => {
  amount = input.value;
  createBoxes(amount);
};

const destroyBoxes = () => {
  boxes.innerHTML = "";
  input.value = "";
};

createBtn.addEventListener("click", getAmount);
destroyBtn.addEventListener("click", destroyBoxes);
