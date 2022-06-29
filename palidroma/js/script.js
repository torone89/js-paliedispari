
// VERIFICA COLLEGAMENTO JAVA
console.log("JS")


// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// FASE 1
// Chiedieamo all'utente di inserire un parola e creeiamo una variabile let da riutilizzare

let richiesta = prompt("Scrivi una parola, Grazie")
console.log(richiesta, 'Parola Richiesta')

// FASE 2 Creiamo una funzione che mi giri la parola al contrario
function reverseParola(parola) {

    let result = "";


    for (let i = richiesta.length - 1; i >= 0; i--) {
        result += richiesta[i]
    }
    return result;



}
const parolareverse = reverseParola('ciccio');
console.log(parolareverse)


// FASE 3 Creiamo le condizioni se la parola e Palindorma oppure no

// Ternario
// const verifica = richiesta == parolareverse ? false


if (richiesta == parolareverse) {
    console.log('la parola è palindroma');
} else {
    console.log('la parola non è palindroma');
}