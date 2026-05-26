/**
 * @class Elem
 * @classdesc Egyetlen Tic-Tac-Toe (vagy hasonló játék) játékelemet/cellát reprezentáló osztály.
 */
export default class Elem {
  /** * @private 
   * @type {string} Az elemben megjelenítendő adat (pl. "X", "O" vagy üres string).
   */
  #adat = "";

  /** * @private 
   * @type {number} Az elem egyedi indexe a játéktáblán (0-8).
   */
  #index = 0;

  /**
   * Létrehoz egy új Elem példányt.
   * @param {string} adat - A cella kezdeti értéke ("X", "O" vagy "").
   * @param {number} index - A cella pozíciója a listában.
   * @param {HTMLElement} szuloElem - A szülő DOM elem, ahová a cella beágyazódik.
   */
  constructor(adat, index, szuloElem) {
    this.#adat = adat;
    this.#index = index;
    /** @type {HTMLElement} A szülő DOM elem referenciája. */
    this.szuloElem = szuloElem;
    this.megjelenit();
    this.#kattintasEsemeny();
  }

  /**
   * Megjeleníti a HTML struktúrát a szülő elemen belül.
   */
  megjelenit() {
    let kod = `
        <div class="elem">
           ${this.#adat} 
        </div>`;
    this.szuloElem.insertAdjacentHTML("beforeend", kod);
  }

  /**
   * @private
   * Megkeresi az újonnan létrehozott DOM elemet, és ráteszi a kattintásfigyelőt.
   */
  #kattintasEsemeny() {
    /** @type {HTMLElement} A konkrét generált div elem referenciája. */
    this.elem = document.querySelector(".elem:last-child");
    
    this.elem.addEventListener("click", (event) => {
      this.#sajatEsemeny();
    });
  }

  /**
   * @private
   * Létrehoz és kivált egy egyedi "katt" eseményt az ablak (window) szintjén, átadva az indexet.
   */
  #sajatEsemeny() {
    console.log("sajátesemény");
    const e = new CustomEvent("katt", { detail: this.#index });
    window.dispatchEvent(e);
  }
}

/**
 * Ellenőrzi a játéktábla aktuális állását, hogy van-e nyertes kombináció.
 * @param {Array<string>} jok - A játéktábla aktuális állapota (9 elemű tömb "X", "O" vagy üres értékekkel).
 * @returns {string|null} A nyertes jele ("X" vagy "O"), vagy `null`, ha még nincs nyertes.
 */
export function ellenorzes(jok) {
  /** @type {Array<Array<number>>} A lehetséges nyerő index-kombinációk mátrixa. */
  const nyerokombinaciok = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < nyerokombinaciok.length; i++) {
    const [a, b, c] = nyerokombinaciok[i];
    if (jok[a] === "X" && jok[b] === "X" && jok[c] === "X") {
      return "X";
    } else if (jok[a] === "O" && jok[b] === "O" && jok[c] === "O") {
      return "O";
    }
  }
  return null;
}
