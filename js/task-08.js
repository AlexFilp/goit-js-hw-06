// Напиши скрипт управления формой логина.

// 1.  Обработка отправки формы form.login-form должна быть по событию submit.
// 2.  При отправке формы страница не должна перезагружаться.
// 3.  Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// 4.  Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// 5.  Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const form = document.querySelector(".login-form");

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  let mail = formElements.email.value;
  let password = formElements.password.value;
  //   console.log(mail);
  //   console.log(password);

  if ((mail && password) === "") {
    alert("Все поля должны быть заполнены!!! А ну быстро заполнил!!!");
  } else {
    const user = {
      email: mail,
      password: password,
    };
    console.log(user);
  }
  form.reset();
}

form.addEventListener("submit", onFormSubmit);

//   const formData = new FormData(event.currentTarget);
//   console.log(formData);
//   formData.forEach((value, name) => {
//     console.log(name);
//     console.log(value);
//   });
