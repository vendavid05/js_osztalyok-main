import { ellenorzes } from "./Elem.js";
import Tabla from "./Tabla.js";

/** * @type {HTMLElement} A játéktáblát befogadó fő konténer elem.
 */
const szuloElem = document.querySelector(".tarolo");

/** * @type {Array<string>} A játéktábla aktuális belső állapota (9 elemű, kezdetben szóközökkel feltöltött tömb).
 */
const TABLA = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

/** * @type {number} A megtett lépések száma. Ebből számoljuk ki, hogy ki következik, és hogy betelt-e a tábla.
 */
let lepes = 0;

// Első játéktábla példányosítása és kezdeti kirajzolása
new Tabla(TABLA, szuloElem);

/** * @type {HTMLElement} A játék eredményét és az aktuális lépéseket mutató kijelző (bekezdés).
 */
const kijelzo = document.querySelector(".jobb-oldal p");

/**
 * Globális eseményfigyelő az egyedi "katt" eseményre.
 * Akkor fut le, amikor a játékos rákattint az egyik cellára (Elem-re).
 * * @param {CustomEvent} event - Az egyedi esemény objektum, aminek a `detail` tulajdonsága tartalmazza a kattintott cella indexét.
 */
window.addEventListener("katt", (event) => {
  /** @type {number} A kattintott cella indexe (0-8) */
  let i = event.detail;

  // Csak akkor léphetünk, ha a mező még üres
  if (TABLA[i] === " ") {
    /** @type {string} Az első játékos neve az input mezőből */
    let nev1 = document.getElementById("p1").value;
    /** @type {string} A második játékos neve az input mezőből */
    let nev2 = document.getElementById("p2").value;

    // Páros lépéseknél X, páratlanoknál O következik
    if (lepes % 2 === 0) {
      TABLA[i] = "X";
    } else {
      TABLA[i] = "O";
    }

    // Újrarendereljük a táblát a frissített adatokkal
    new Tabla(TABLA, szuloElem);
    lepes++;
    
    /** @type {string} A következő lépésre váró játékos neve */
    let aktualisNev = (lepes % 2 === 0) ? document.getElementById("p1").value : document.getElementById("p2").value;
    kijelzo.innerHTML += aktualisNev + "<br>";

    /** @type {string|null} Az ellenőrzés eredménye ("X", "O", vagy null ha nincs még nyertes) */
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
