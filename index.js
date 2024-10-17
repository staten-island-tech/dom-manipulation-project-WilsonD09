const DOMSelectors = {
  header: document.querySelector("h1"),
  button: document.querySelector("#btn"),
  items: document.querySelectorAll("li"),
  cardHeader: document.querySelector(".card-header"),
  form: document.querySelector("form"),
  container: document.querySelector(".container"),
};

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  DOMSelectors.button.style.backgroundColor = "white";
  setTimeout(function () {
    DOMSelectors.button.style.backgroundColor = "lightgrey";
  }, 50);
  const RValue = document.querySelector("#red");
  const GValue = document.querySelector("#green");
  const BValue = document.querySelector("#blue");
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card"><h2 class="card-header">${RValue.value}, ${GValue.value}, ${BValue.value}</h2></div>`
  );
});
