import Elem from "./Elem.js";

export default class Tabla {
  #lista = [];
  constructor(lista, szuloElem) {
    this.#lista = lista;
    this.szuloElem = szuloElem;
    this.megjelenit();
  }

  megjelenit() {
    this.szuloElem.innerHTML = "";
    this.#lista.forEach((elem, i) => {
      const k = new Elem(elem, i, this.szuloElem);
    });
  }
}
