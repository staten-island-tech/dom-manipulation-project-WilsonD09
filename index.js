const DOMSelectors = {
  header: document.querySelector("h1"),
  button: document.querySelector("#btn"),
  items: document.querySelectorAll("li"),
  cardHeader: document.querySelector(".card-header"),
  form: document.querySelector("form"),
  container: document.querySelector(".container"),
};
function addCard() {
  let n = 0;
  const RValue = document.querySelector("#red").value;
  const GValue = document.querySelector("#green").value;
  const BValue = document.querySelector("#blue").value;
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card" id="${n}"><h2 class="card-header">${RValue}, ${GValue}, ${BValue}</h2></div>`
  );
  if (
    Number.isInteger(RValue) &&
    Number.isInteger(GValue) &&
    Number.isInteger(BValue)
  );
  {
    document.querySelector(
      `#${n}`
    ).backgroundColor = `rgb(${RValue}, ${GValue}, ${BValue})`;
  }
}
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  DOMSelectors.button.style.backgroundColor = "white";
  setTimeout(function () {
    DOMSelectors.button.style.backgroundColor = "lightgrey";
  }, 50);
  n += 1;
  addCard();
});
