const DOMSelectors = {
  header: document.querySelector("h1"),
  button: document.querySelector("#btn"),
  items: document.querySelectorAll("li"),
  cardHeader: document.querySelector("card-header"),
  form: document.querySelector("form"),
  container: document.querySelector("container"),
};

const liItem = DOMSelectors.items;
const item = Array.from(liItem);
item.forEach((el) => (el.style.color = "red"));

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  DOMSelectors.button.style.backgroundColor = "white";
  setTimeout(function () {
    DOMSelectors.button.style.backgroundColor = "lightgrey";
  }, 50);
  let iValue = document.querySelector("#input");
  console.log(iValue.value);
});

DOMSelectors.container.insertAdjacentHTML(
  "beforeend",
  `<div class="card"><h2 class="card-header">${iValue.value}</h2></div>
`
);
