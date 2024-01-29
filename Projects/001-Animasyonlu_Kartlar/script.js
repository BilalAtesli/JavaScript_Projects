const box = document.querySelectorAll(".box");

box.forEach((element) => {
  element.addEventListener("click", () => {
    removeActive();
    element.classList.add("active");
  });
});
function removeActive() {
  box.forEach((element) => {
    element.classList.remove("active");
  });
}
