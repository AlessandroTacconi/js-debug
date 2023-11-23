/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/

// ESERCIZIO 1
/*
for (let i = 0; i > 5; i++) {
console.log(i);
}
*/

// 1- Il codice è un ciclo for e dovrebbe stampare [i] cinque volte;
// 2- Il ciclo dovrebbe avere i < 5. per come è scritto il ciclo non partirà mai
// 3- ''

//CORREZIONE

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// ESERCIZIO 2
// function addIfEven(num) {
//     if (num % 2 = 0) {
//         return num + 5;
//     }
//     return num;
// }

// 1- è una funzione che dato un numero 'num' dovrebbe aggiungere 5 nal caso il 'num' sia perfettamente divisibile per 2 (pari) oppure lo restituisca per come è
// 2- dovrebbe essere scritto(num % 2 === 0)

//CORREZIONE

// function addIfEven(num) {
//     if (num % 2 === 0) {
//         return num + 5;
//     }
//     return num;
// }

// ESERCIZIO 3
// function loopToFive() {
// for (let i = 0, i < 5, i++) {
//     console.log(i);
// }
// }

// 1- Il codice è una funzione con un ciclo for e dovrebbe stampare [i] cinque volte;
// 2- dovrebbero esserci dei ';' al posto delle ','

// CORREZIONE

// function loopToFive() {
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
// }

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

// 1- la funzione ci restituisce solo i numeri pari all'interno dell'array
// 2- gli errori sono:
// 2a- il '- 1' dopo il numbers.length
// 2b- la virgola dopo '1++'
// 2c- dovrebbe essere scritto (num % 2 === 0)
// 2d- il ';' dopo (num % 2 === 0)
// 2e- all'interno dell'if deve essere considerato il 'numbers[i]'
// 2f- va pushato 'push(numbers[i])'
// 2g- il 'return evenNumbers;' deve essere fuori dal ciclo for

// CORREZIONE

// function displayEvenNumbers() {
//   let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//   let evenNumbers = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       evenNumbers.push(numbers[i]);
//     }
//   }
//   return evenNumbers;
// }

// console.log(displayEvenNumbers());
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
