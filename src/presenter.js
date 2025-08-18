import sumar from "./sumador";
import multiplicar from "./multiplicador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  const accion = event.submitter.value;

  if (accion === "Sumar"){
    div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
  } else if (accion === "Multiplicar"){
    div.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
  }
});
