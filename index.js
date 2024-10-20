const DOMSelectors = {
  button: document.querySelector("#btn"),
  form: document.querySelector("form"),
  container: document.querySelector(".container"),
  redInput: document.querySelector("#red"),
  greenInput: document.querySelector("#green"),
  blueInput: document.querySelector("#blue"),
};
let n = 1;
function addCard() {
  const RValue = DOMSelectors.redInput.value;
  const GValue = DOMSelectors.greenInput.value;
  const BValue = DOMSelectors.blueInput.value;
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card" id="card-${n}"><h2>Red - ${RValue}, Green - ${GValue}, Blue - ${BValue}</h2>
    <button id="remove-${n}">Remove</button></div>`
  );
  if (
    Number.isInteger(parseInt(RValue)) &&
    Number.isInteger(parseInt(GValue)) &&
    Number.isInteger(parseInt(BValue))
  ) {
    document.querySelector(
      `#card-${n}`
    ).style.backgroundColor = `rgb(${RValue}, ${GValue}, ${BValue})`;
  } else {
    document
      .querySelector(`#card-${n}`)
      .insertAdjacentHTML(
        "beforeend",
        "<p>Could not create color due to non-integer values</p>"
      );
  }
  deleteCard(n);
  n += 1;
}

function deleteCard(id) {
  const remove = document.querySelector(`#remove-${id}`);
  remove.addEventListener("click", function () {
    const card = document.querySelector(`#card-${id}`);
    card.remove();
  });
}

function clearFields() {
  DOMSelectors.redInput.value = "";
  DOMSelectors.greenInput.value = "";
  DOMSelectors.blueInput.value = "";
}

function project() {
  DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    DOMSelectors.button.style.backgroundColor = "white";
    setTimeout(function () {
      DOMSelectors.button.style.backgroundColor = "lightgrey";
    }, 50);
    addCard();
    clearFields();
  });
}
project();
