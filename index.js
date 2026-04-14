
import {ellenorzes} from "./Elem.js";
import Tabla from "./Tabla.js";

const szuloElem = document.querySelector(".tarolo");

const TABLA = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
let lepes = 0;
new Tabla(TABLA, szuloElem);

const kijelzo = document.querySelector(".jobb-oldal p");

window.addEventListener("katt", (event) => {
  let i = event.detail;
  if (TABLA[i] === " ") {
    let nev1 = document.getElementById("p1").value;
    let nev2 = document.getElementById("p2").value;
    if (lepes % 2 === 0) {
      TABLA[i] = "X";
    } else {
      TABLA[i] = "O";
    }
    new Tabla(TABLA, szuloElem);
    lepes++;
    
    let aktualisNev = (lepes % 2 === 0) ? document.getElementById("p1").value : document.getElementById("p2").value;
    kijelzo.innerHTML += aktualisNev + "<br>";




    const gyozelem = ellenorzes(TABLA);
        if (gyozelem === "X") {
          kijelzo.innerText = nev1 + " GYŐZÖTT!";
        } else if (gyozelem === "O") {
          kijelzo.innerText = nev2 + " GYŐZÖTT!";
        } else if (lepes === 9) {
          kijelzo.innerText = "Döntetlen!";
        }
    

  }
});      

