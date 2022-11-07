const listaSpesaEl = document.querySelector(".list-container");
const listaSpesa = [];
let listUl = document.createElement("ul");
let listLi = document.createElement("li");
listLi.classList.add("text-center");
listLi.classList.add("bg-danger");
while (listaSpesa.length < 3) {
  const input = prompt("Inserisci articoli");
  listaSpesa.push(input);

  listaSpesaEl.append(listUl);
  listUl.append(listLi);
}
listLi.innerHTML += `${listaSpesa}`;

console.log(listaSpesa);
