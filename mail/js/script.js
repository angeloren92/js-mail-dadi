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
const inputEmail = prompt(message).toLowerCase();
//dichiariamo una variabile primitiva booleana perchè ne abbiamo bisogno solo per fermare l'iterazione non appena trova l'email
let emailFound = false;

// Diamo l'istruzione di iterare tante volte quanto è la lunghezza del DB,
// Con il connettore logico, fermiamo l'iterazione quando troviamo il valore ricercato
for (let i = 0; i < DBinvitati.length && emailFound === false; i++) {
    //usiamo l'istruzione if per filtrare il DB e ricercare il valore ricercato
    if (inputEmail == DBinvitati[i]) {
        //cambiamo il valore per fermare l'iterazione
        emailFound = true; 
        //cambiamo messaggio da visualizzare se l'esito è positivo
        message = 'OK! Sei un invitato, Benvenuto!';
    } else {
        //cambiamo messaggio da visualizzare se l'esito è negativo
        message = 'Mi dispiace, non sei stati invitato... sarà la prossima volta!';
    }
}
//visualizzazione del messaggio rispetto al risultato trovato
console.log(message);

