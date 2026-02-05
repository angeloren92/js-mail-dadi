console.log('prova')
// Traccia Dadi
/* 
-Chiediamo ll'utente se vuole giocare
    -Valore booleano true 
    -Diamo l'istruzione di un ciclo che deve iterare fino a quando il valore booleano è true
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
        Chiediamo all'utente se vuole continuare a giocare, se no cambia il valore booleano e si esce dal ciclo
    Facciamo visualizzare un messagio per ringraziare di aver giocato con noi

Tools
-prompt
-variabili native booleane, numeriche e stringhe per i messaggi
-libreria math con metodi floor e random
-istruzioni IF ELSE per determinare il numero maggiore
console.log
*/

