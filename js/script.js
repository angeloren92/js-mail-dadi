// Traccia Email
/* 
-Abbiamo bisogno di un array con n. elementi contenenti le email degli invitati
-Dobbiamo richiedere l'utente di inserire l'email
-Dobbiamo dare l'istruzione di un ciclo che continua ad iterare con delle condizioni
    .una condizione può essere che la lunghezza dell'array definisce il numero di iterazioni
    .seconda condizione può essere che se trova l'email inserita si interrompe il ciclo
    non ha necessità di continuare a cercare
-Facciamo una selezione dell'email inserita confrontandola con gli elementi dell'array
    .IF true - stampa messaggio ok
    .ELSE false - stampa ulteriore messaggio

-Ipotesi: non è necessario provvedere alla validazione della email, 
    .ma i dati sono case sensitive, quindi per fare il controllo, trasformiamo i dati input in lowercase 

tools:
-array
-prompt
-for 
-lenght
-lowercase
-if else
-connettori logici
-valori booleani
-console.log
*/

// Dichiarazione delle variabili in global scope, dovre creiamo un 'database' di invitati
const DBinvitati = [
    'angelo.ren@gmail.com',
    'angelo.ren@yahoo.com',
    'angelo.ren@hotmail.com',
    'angelo.ren@pec.com',
    'angelo.ren@alice.it',
    'angelo.ren@fendi.com',
    'angelo.ren@alexandermcqueen.com',
    'angelo.ren@off---white.it',
    'angelo.ren@frette.it',
    'angelo.ren@collegiove.ri',
]
// Dichiariamo questa variabile globale che possa contenere i messaggi da visualizzare
// Primo messaggio è dare indicazioni all'utente quando acquisiamo l'email
let message = 'Per favore inserisci la tua email, in minuscolo con formato: esempio@email.com ';
// Dichiariamo una costante globale dove andiamo ad acquisire il valore da ricercare dall'utente
const inputEmail = prompt(message);

//


