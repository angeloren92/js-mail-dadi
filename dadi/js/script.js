// Traccia Dadi
/* 
-Dichiariamo due variabili
    .a ciascuno assegniamo un valore randomico usando la libreria Math
     ad esse associamo i metodi random per il valore casuale
     moltiplichiamo per 6 per avere un intervallo tra 0 e 6 (6 escluso)
     aggiungiamo + 1 per escludere lo 0 e includere il 6
     incartiamo dentro il metodo floor per arrotondare a numero intero
        (Math.floor(Math.random() * 6) + 1; comando completo)
    Usiamo l'istruzione IF ELSE per determinare quale dei due numeri sia maggiore
        .PS potrebbe esistere che i numeri escano uguali
    Visualizziamo le due variabili, specificando a chi è assegnato il numero vincente con relativo messaggio

Tools
-variabili numeriche e stringhe per i messaggi
-libreria math con metodi floor e random
-istruzioni IF ELSE per determinare il numero maggiore
console.log
*/

//dichiariamo il messaggio di benvenuto all'utente
let message = 'Ciao, benvenuto a DADI. Vediamo chi vince!';
alert(message);
//dichiariamo le variabili con numeri casuali generati dal Computer da 1 a 6 
//e le assegniamo al giocatore e computer
let numComputer = (Math.floor(Math.random() * 6) + 1);
let numPlayer = (Math.floor(Math.random() * 6) + 1);

if (numPlayer > numComputer) { //verifichiamo se il numero del giocatore è maggiore 
    message = 'Complimenti, Hai Vinto!'; //se vero assegniamo messaggio hai vinto
} else if (numPlayer < numComputer) {  //verifichiamo se il numero del pc è maggiore
    message = 'Mi dispiace, ritenta...'; //se vero assegniamo messaggio hai perso
} else { //se nessuna dei casi è vero, allora sono uguali i numeri
    message = 'Nessun vincitore, torna a trovarci'; //assegniamo messaggio di parità
}

//visualizziamo messaggio in console del risultato
console.log(
    `${message} 
    Il tuo Numero: ${numPlayer} 
    Il numero del Computer: ${numComputer}`
);