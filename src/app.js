/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = generateCard;

document.querySelector(".btn").addEventListener("click", generateCard);

setInterval(generateCard, 10000);

document.getElementById("cardWidth").addEventListener("change", e => {
  console.log(document.querySelector(".card").style);
  document.querySelector(".card").style.width = `${e.target.value}vw`;
});

document.getElementById("cardHeight").addEventListener("change", e => {
  console.log(document.querySelector(".card").style);
  document.querySelector(".card").style.height = `${e.target.value}vh`;
});

function generateCard() {
  console.log("AA");
  //write your code here
  const numbers = document.getElementById("number");
  const simbols = document.querySelectorAll(".simbol");

  const arraySimbols = ["♦", "♥", "♠", "♣"];

  let randomSimbol = Math.floor(Math.random() * 4);

  document.body.style.color =
    arraySimbols[randomSimbol] == "♥" || arraySimbols[randomSimbol] == "♦"
      ? "red"
      : "black";

  let cardNumber = Math.floor(Math.random() * 12) + 1;

  numbers.innerHTML = cardNumber === 1 ? "A" : cardNumber;

  simbols.forEach(e => {
    // e.classList.add("spades");//prueba para usarlo con clases
    e.innerHTML = `<span>${arraySimbols[randomSimbol]}</span>`;
  });
}
