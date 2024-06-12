function log() {
  let body = document.querySelector("body")
  let logSection = document.createElement("section")

  let logCloseBlock = document.createElement("div")
  let logClose = document.createElement("button")
  let logCloseImg = document.createElement("img")
  let logTitle = document.createElement("h2")
  //FORM
  let logForm = document.createElement("form")
  let logInputEmail = document.createElement("input")
  let logInputPassword = document.createElement("input")
  let alert = document.createElement("p")
  alert.classList.add("alert")


  let logCheckboxBlock = document.createElement("div")
  let logCheckbox = document.createElement("input")
  let logCheckboxText = document.createElement("p")


  let logRecover = document.createElement("a")
  //
  //BTNs
  let logBtnEnter = document.createElement("btn")
  let logBtnRegister = document.createElement("btn")
  //
  let mainContent = document.querySelector(".main__section")
  mainContent.style.display = "none";

  logSection.classList.add("log__section")
  logCloseBlock.classList.add("log__close-block")
  logClose.classList.add("log__close")
  logCloseImg.src = "img/x.svg"

  logTitle.classList.add("log__title")
  logTitle.textContent = "Войти в систему"

  logForm.classList.add("log__form")
  logInputEmail.classList.add("log__input")
  logInputEmail.placeholder = "Email/Телефон"
  logInputEmail.id = "email"
  logInputPassword.classList.add("log__input")
  logInputPassword.placeholder = "Пароль"
  logInputPassword.id = "password"

  logCheckboxBlock.classList.add("log__checkbox-block")
  logCheckbox.type = "checkbox"
  logCheckbox.classList.add("log__checkbox")
  logCheckboxText.textContent = "Запомнить пароль"
  logCheckboxText.classList.add("log__checkbox-text")

  logRecover.textContent = "Восстановить"
  logRecover.classList.add("log__recover")


  logBtnEnter.textContent = "Войти"
  logBtnEnter.classList.add("log__btn-enter")
  logBtnRegister.textContent = "Зарегестривоваться"
  logBtnRegister.classList.add("log__btn-register")

  logBtnEnter.addEventListener('click', function(event) {
    event.preventDefault();

    const inputs = document.querySelectorAll('input');
    const user = {};
    let allFieldsFilled = true;

    inputs.forEach(input => {
      if (input.value.trim() === "") {
        alert.textContent = `Заполните поле ${input.placeholder}`;
        logInputPassword.after(alert);
        allFieldsFilled = false;
      } else {
        user[input.id] = input.value;
      }
    });

    if (allFieldsFilled) {
      console.log(user);
      console.log("Пользователь вошел");
      logSection.classList.add("hidden");
      mainContent.style.display = "flex";
    }
  });

  logBtnRegister.addEventListener('click', function(event) {
    event.preventDefault();

    const inputs = document.querySelectorAll('input');
    const user = {};
    let allFieldsFilled = true;

    inputs.forEach(input => {
      if (input.value.trim() === "") {
        alert.textContent = `Заполните поле ${input.placeholder}`;
        logInputPassword.after(alert);
        allFieldsFilled = false;
      } else {
        user[input.id] = input.value;
      }
    });

    if (allFieldsFilled) {
      console.log(user);
      console.log("Зарегистрирован новый пользователь");
      logSection.classList.add("hidden");
      mainContent.style.display = "flex";
    }
  });


  body.append(logSection)
  logSection.append(logCloseBlock,logTitle,logForm,logBtnEnter,logBtnRegister)
  logCloseBlock.append(logClose)
  logClose.append(logCloseImg)
  logForm.append(logInputEmail,logInputPassword,logCheckboxBlock,logRecover)
  logCheckboxBlock.append(logCheckbox,logCheckboxText)

}

log()

