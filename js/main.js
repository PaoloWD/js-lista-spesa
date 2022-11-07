const listaSpesaEl = document.querySelector(".text-center");
const listaSpesa = [];
while (listaSpesa.length < 5) {
  const input = prompt("Inserisci articoli");
  listaSpesa.push(input);
}
listaSpesaEl.innerHTML = listaSpesa;
console.log(listaSpesa);
