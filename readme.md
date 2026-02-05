Ciao classe,
Esercizio di oggi:
nome repo: js-mail-dadi

Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota: 
Non è necessario provvedere alla validazione delle email

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?

Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non i cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

Buon  divertimento! e confermate lettura :babyyoda: 
*********************************************************************************************************************

Le Memorie di Angelo [05.02.2026]

    Mattina:
    -Correzione esercizi del giorno prima
    -Introduzione agli esercizi JSsnaks per un ripasso generale
        .Snack-1 dichiariamo 2 variabili e chiediamo all'utente di assegnare due valori numerici
            Utilizzando le istruzioni IF ELSE andiamo a definire con delle condizioni,
            SE il primo numero è maggiore del secondo o viceversa
            ALTRIMENTI significa che i numeri sono uguali
        Visualizziamo su console il numero maggiore
        .Snack-2 dichiariamo due variabili e chiediamo all'utente di assegnare due valori di stringa
            andiamo ad estrapolare la lunghezza delle stringhe e le mettiamo a confronto
            IF e ELSE per determinare quale sia la parola più corta e quale più lunga
            Visualizziamo in console prima la parola corta e poi quella più lunga
            Anche in questo caso verifichiamo anche se le due parole hanno la stessa lunghezza
        .Snack-3 Iteriamo l'istruzione for 10 volte
            ad ogni iterazione chiediamo all'utente di inserire un valore numerico
            che verrà assegnata ad una variabile block scope e sommata dentro ad una variabile globale
            terminate le 10 iterazioni, visualizziamo in console la somma dei 10 numeri inseriti
            (in questo caso importante la distinzione tra variabile globale e di blocco)
        .Snack-4 dichiariamo un array globale vuoto, a seguire instruzione for con 6 iterazioni
            dove dichiariamo una variabile block scope e chiediamo all'utente di assegnare un valore numerico
            Filtriamo con IF i numeri dispari, dividendo il valore immesso per due con resto(%modulo) diverso da 0
            se è vero lo si inserisce nell'array globale usando array.metodo() in questo caso .push
            anche in questo caso variabile globale ha una visibilità "globale"
            rispetto a quello block scope che è visualizzabile solo dentro il ciclo 
            ma che abbiamo utilizzato all'interno del ciclo per restituire il valore da aggiungere come elemento di un array globale.

    Pomeriggio:
    -Consolidamento analisi ed elaborazione degli argomenti trattati finora
        .MAIL combinazione di due condizioni, dentro all'istruzione di ciclo, unite con i 
            connettori logici per interrompere un ciclo quando viene soddisfatta la ricerca
            senza aspettare che compia tutte le iterazioni dettate del contatore
            In questo caso è come se avessimo creato un mico "Database" dove siamo andati a cercare la chiave d'accesso
        .DADI Imparato ad utilizzare 2 metodi della libreria Math, per generare numeri randomici
            -.floor per arrontodare a numero intero
            -.random per generare un numero randomico da 0 a 1(escluso), manipolabile grazie alle 
                operazioni matematiche per scegliere l'intervallo numerico
            In questa maniera abbiamo creato un gioco di dadi randomico player vs computer
        (Ricorda che il gioco è vietato ai minori di 18 anni e crea grave dipendenza. Il banco vince sempre)        
    
