import Elem from "./Elem.js";

/**
 * @class Tabla
 * @classdesc A játéktábla megjelenítéséért és a játékelemek (cellák) kezeléséért felelős osztály.
 */
export default class Tabla {
  /** * @private 
   * @type {Array<string>} A játéktábla aktuális állapotát tároló tömb (pl. ["X", "O", "", ...]).
   */
  #lista = [];

  /**
   * Létrehoz egy új Tabla példányt és kirajzolja a cellákat.
   * @param {Array<string>} lista - A játéktábla elemeit tartalmazó tömb.
   * @param {HTMLElement} szuloElem - A szülő DOM elem, amelybe a tábla és a cellák kerülnek.
   */
  constructor(lista, szuloElem) {
    this.#lista = lista;
    /** @type {HTMLElement} A szülő DOM elem referenciája. */
    this.szuloElem = szuloElem;
    this.megjelenit();
  }

  /**
   * Kiüríti a szülő elemet, majd végigiterál a listán, 
   * és minden egyes elemhez létrehoz egy új Elem példányt.
   */
  megjelenit() {
    this.szuloElem.innerHTML = "";
    this.#lista.forEach((elem, i) => {
      /** @type {Elem} Egy egyedi cella példány. */
      const k = new Elem(elem, i, this.szuloElem);
    });
  }
}
