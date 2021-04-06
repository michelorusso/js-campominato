// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

var arrayBomb = [];

while( arrayBomb.length < 16 ) {
    var bomb = randomNumberBomb(1 , 100);
    console.log(bomb);

    // nei numeri bomba non ci dovrann essere duplicati
    if( !arrayBomb.includes(bomb) ) {
        arrayBomb.push(bomb);
    }
    
}
console.log(arrayBomb);

// chiediamo all'utente di inserire (100 - 16) 84 numeri
// l'utente non può inserire più volte lo stesso numero
var arrayNumberUser = [];
while ( arrayNumberUser.length < 84 ) {
    var numberUserInput = parseInt( prompt('Dammi un numero') );

    if( !arrayNumberUser.includes(numberUserInput) ) {
        arrayNumberUser.push(numberUserInput);
    } else if (arrayNumberUser.includes(numberUserInput) ) {
        alert('Il numero da te inserito è gia presente, inserire un altro numero');
    }
}
console.log(arrayNumberUser);

// una variabile che ci indichi se la bomba è stata trovata
var boomBomb = false;

// uso un ciclo while pre vedere se la bomba è stata trovata
if(arrayNumberUser.includes(arrayBomb)) {
    boomBomb = true;
} 


if(boomBomb == true) {
    alert('hai perso');
} 

// FUNCTION
function randomNumberBomb( min , max ) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
