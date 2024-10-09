const DOMSelectors = {
  header: document.querySelector("h1"),
  button: document.querySelector(".btn"),
  items: document.querySelectorAll("li"),
  cardHeader: document.querySelector(".card-header"),
  form: document.querySelector(".form"),
};

DOMSelectors.button.addEventListener("click", function (event) {
  console.log(event.target.parentElement);
  event.target.parentElement.style.backgroundColor = "red";
});
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(document.querySelector("input").value);
});

const liItem = DOMSelectors.items;
const item = Array.from(liItem);
item.forEach((el) => (el.style.color = "red"));
