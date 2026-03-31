export default class Elem {
  #adat = "";
  #index = 0;
  constructor(adat, index, szuloElem) {
    this.#adat = adat;
    this.#index = index;
    this.szuloElem = szuloElem;
    this.megjelenit();
    this.#kattintasEsemeny()
  }
  megjelenit() {
    let kod = `
        <div class="elem">
           ${this.#adat} 
        </div>`;
    this.szuloElem.insertAdjacentHTML("beforeend", kod);
  }
  #kattintasEsemeny(){
        this.elem = document.querySelector(".elem:last-child");
    //console.log(this.buttonElem);
    this.elem.addEventListener("click", (event) => {
      this.#sajatEsemeny();
    });
  }
  #sajatEsemeny() {
    console.log("sajátesemény");
    const e = new CustomEvent("katt", { detail: this.#index });
    window.dispatchEvent(e);
  }
}
export function ellenorzes(jok) {
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
export function ujraindito(){
  const ujrainditoGomb = document.getElementById("ujra");
  ujrainditoGomb.addEventListener("click",()=>{
    window.location.reload();
    
  });
}