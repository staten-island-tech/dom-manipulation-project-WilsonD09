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
  const RValue = document.querySelector("#red").value;
  const GValue = document.querySelector("#green").value;
  const BValue = document.querySelector("#blue").value;
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card"><h2 class="card-header">${RValue}, ${GValue}, ${BValue}</h2></div>`
  );
  if (RValue.isInteger() && GValue.isInteger() && BValue.isInteger());
  {
    document.body.style.backgroundColor = (RValue, GValue, BValue);
  }
});
