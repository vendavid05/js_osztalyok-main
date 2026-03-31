
import {ellenorzes} from "./Elem.js";
import Tabla from "./Tabla.js";

const szuloElem = document.querySelector(".tarolo");

const TABLA = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
let lepes = 0;
new Tabla(TABLA, szuloElem);

window.addEventListener("katt", (event) => {
  let i = event.detail;
  if (TABLA[i] === " ") {
    if (lepes % 2 === 0) {
      TABLA[i] = "X";
    } else {
      TABLA[i] = "O";
    }
    new Tabla(TABLA, szuloElem);
    lepes++;
    const gyozelem = ellenorzes(TABLA);
    if (gyozelem === "X") {
      window.alert("X nyert");
    } else if (gyozelem === "O") {
      window.alert("O nyert");
    } else if (gyozelem === null && lepes === 9) {
      window.alert("Döntetlen");
    }

  }
});      
