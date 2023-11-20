let km = prompt("inserisci i km");
let eta = prompt("inserisci l'eta'");
let prezzo_biglietto;

if (eta < 18) {
    prezzo_biglietto = (km * 0.21) - ((km * 0.21) * 0.2);
} else if (eta > 65) {
    prezzo_biglietto = (km * 0.21) - ((km * 0.21) * 0.4);
} else {
    prezzo_biglietto = km * 0.21;
}

let biglietto_finale = prezzo_biglietto.toFixed(2);
console.log(biglietto_finale);

document.getElementById("prezzo").innerHTML = "il costo del biglietto è:" + " " + biglietto_finale;