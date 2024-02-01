const btnElement = document.querySelector(".btn");
const inputElement = document.querySelector("input");

btnElement.addEventListener("click", () => {
  inputElement.classList.toggle("show-input");
  inputElement.focus();
});
