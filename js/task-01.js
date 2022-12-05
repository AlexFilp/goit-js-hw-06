// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const listEl = document.querySelector("#categories");
console.log("Number of categories:", listEl.children.length);

for (let i = 0; i < listEl.children.length; i += 1) {
  const element = listEl.children[i];
  console.log("Categories:", element.firstElementChild.textContent);
  console.log("Elements:", element.children[1].children.length);
}

// const animalItemEl = listEl.children[0];
// console.log("Category:", animalItemEl.firstElementChild.textContent);

// const animalListEl = animalItemEl.children[1];
// console.log("Elements:", animalListEl.children.length);

// const productsItemEl = listEl.children[1];
// console.log("Category:", productsItemEl.firstElementChild.textContent);

// const productListEl = productsItemEl.children[1];
// console.log("Elements:", productListEl.children.length);

// const technologiesItemEl = listEl.children[2];
// console.log("Category:", technologiesItemEl.firstElementChild.textContent);

// const technologiesListEl = technologiesItemEl.children[1];
// console.log("Elements:", technologiesListEl.children.length);
