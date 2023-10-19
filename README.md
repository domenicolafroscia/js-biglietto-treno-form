### ESERCIZIO

Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere;
- Età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km);
- va applicato uno sconto del 20% per i minorenni;
- va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

### SVOLGIMENTO

Fare struttura HTML

**Dati**

1. Prelevare il numero di km che vuole percorrere il passeggero dall'input;
2. Prelevare l'età del passeggero dall'input.

**Logica**

1. Calcolare il prezzo del biglietto per tutti moltiplicando i km che deve percorrere il passeggero x 0.21;
2. Calcolare il prezzo del biglietto con lo sconto del 20% per i minorenni;
3. Calcolare il prezzo del biglietto con lo sconto del 40% per gli over 65;
4. Mettere in funzione gli input e il button con le caratteristiche elencate qui sopra;
5. Preparare il testo del messaggio da stampare in base al prezzo del biglietto.

**Output**

1. Trovare l'elemento in HTML dove stampare il risultato;
2. Iserire il messaggio in questo elemento;
3. Al click del bottone stampa il messaggio.