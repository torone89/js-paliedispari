
// VERIFICA COLLEGAMENTO JAVA
console.log("JS")


// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Fase 0 chiedo all'utente se è parid o dispari 
const paridispari = prompt("Scrivi pari o dispari")
console.log(paridispari)

// Fase 1 Chiediamo all'utente un numero da 1 a 5 

function getNumberFromUser(min, max) {
    let numero = parseInt(prompt(`Inserisci un numero da ${min} a ${max}`))

    // VALIDAZIONE NUMERO da 1 a 5 e che sia un numero
    while (isNaN(numero) || numero < min || numero > max) {
        alert('Inserisci un numero e un numero valido da 1 a 5')
    }

    return numero;


}

// SPECIFICO nella domandda che il numero di può essere min di 1 e max di 5
const numeroutente = getNumberFromUser(1, 5)
console.log("Risultato Utente " + numeroutente)


// Fase 2 Genero un numero Casuale per il pc


function getRandomNumber(min = 1, max = 5) {
    const RandomNumber = Math.floor(Math.random() * (max) + min)
    return RandomNumber
}

const risultatorandom = getRandomNumber()
console.log("Risultato Pc " + risultatorandom)


// Fase 3 Calcolo la somma dei due numeri
const somma = numeroutente + risultatorandom
console.log("Sommma " + somma)


// Fase 4 calcolo se il risulato è pari o dispari

function isEven(number) {

    if (number % 2 == 0) {
        return "pari"
    }
    else { return "dispari" }

}

const vincitore = isEven(somma)

// Fase 5 Decreto se l'utente ha vinto o perso

if (vincitore === paridispari) {
    alert("hai vinto")
} else {
    alert("hai perso")
}