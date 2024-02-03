const btnSuccess = document.querySelector(".btn-success");
const btnDismiss = document.querySelector(".btn-dismiss");
const formContainter = document.querySelector(".container");
const successContainter = document.querySelector(".container-2");
const inputElement = document.querySelector("form input");
const errorMessage = document.getElementById("error");

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

btnSuccess.addEventListener("click", function (e) {
  if (!validate()) {
    e.preventDefault();
  }
});

btnDismiss.addEventListener("click", function () {
  formContainter.classList.remove("hidden");
  successContainter.classList.add("hidden");
  inputElement.classList.remove("errorSign");
  errorMessage.classList.add("hidden");
});

// validate email

function validate() {
  if (inputElement.value === "") {
    errorMessage.classList.remove("hidden");
    inputElement.classList.add("errorSign");
  } else if (!validateEmail(inputElement.value)) {
    errorMessage.classList.remove("hidden");
    inputElement.classList.add("errorSign");
  } else {
    formContainter.classList.add("hidden");
    successContainter.classList.remove("hidden");
  }
}

/* challenge completed */
