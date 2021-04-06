// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

var arrayBomb = [];
var totalNumber = 100;
var bombNumber = 16;

while( arrayBomb.length < bombNumber ) {
    var bomb = randomNumberBomb(1 , totalNumber);
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
var findBomb = false;

while ( arrayNumberUser.length < (totalNumber - bombNumber) && findBomb == false ) {

    var numberUserInput = parseInt( prompt('Dammi un numero') );


    
    var thisNumber = thisNumberBomb( numberUserInput, arrayBomb);

    if( thisNumber == false ) {

        if(!arrayNumberUser.includes(numberUserInput) && numberUserInput < (totalNumber + 1) && numberUserInput > 0 ) {

            arrayNumberUser.push(numberUserInput);

        } else {
            alert('Il numero è gia presente o non è valido, inserire un altro numero');
        }

    } else {

        alert('Hai Trovato una Bomba!');
        findBomb = true;

    }
}
console.log(arrayNumberUser);



// Stampiamo i risultati del gioco
var scoreUser = arrayNumberUser.length;
console.log(scoreUser);

var result = 'YOU WIN!';

if (findBomb) {

    result = 'YOU LOSE!';
}
alert(result);

alert("Your score is : " + scoreUser);


// FUNCTION

// funzione che ci da numeri random da 1 a 100
function randomNumberBomb( min , max ) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


// funzione che ci dice se il numero è una bomnba o no
function thisNumberBomb(numberInput, bombList) {

    // una variabile che ci indichi se la bomba è stata trovata
    var foundIt = false;
    var i = 0;

    while( i < bombList.length && foundIt == false) {

        var elementArray = bombList[i];

        if(numberInput == elementArray) {

            foundIt = true;

        }

        i++;
    }

    return foundIt;
}


