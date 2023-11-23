/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/

// ESERCIZIO 1
// function checkAge() {
//     const myAge = 32;
//     const message = '';

//     if (myAge < 18) {
//         message = `Sei troppo giovane! Hai ${myAge} anni!`;
//     } else {
//         message = 'Hai più di 18 anni!';
//     }
// }
// checkAge();

// 1- la funzione mi dice se ho più o meno di 18 anni
// 2- la variabile deve essere let e non const
// 3- va dato il return dopo 'l'if'

// CORREZIONE

// function checkAge() {
//   const myAge = 32;
//   let message = '';

//   if (myAge < 18) {
//     message = `Sei troppo giovane! Hai ${myAge} anni!`;
//   } else {
//     message = 'Hai più di 18 anni!';
//   }
//   return message;
// }
// console.log(checkAge());
// checkAge();

// ESERCIZIO 2
// function printColorsNumber() {
//     const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//     console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
// }
// printColorsNumber();

// 1- la funzione mi dice quanti colori ci sono nell'array
// 2- era scritto color.gength. la forma corretta è color.lenght

// CORREZIONE

// function printColorsNumber() {
//   const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//   console.log(`Nella mia palette ci sono ${colors.length} colori!`);
// }
// printColorsNumber();

// ESERCIZIO 3
// function addNumbers() {
//     const userNumber = prompt('Inserisci un numero');
//     const total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();

// 1- dato un numero inserito tramite il prompt, aggiunge +12
// 2- si deve trasformare la stringa in un numero

// CORREZIONE

// function addNumbers() {
//   const userNumber = +prompt('Inserisci un numero');
//   const total = userNumber + 12;

//   console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();

// ESERCIZIO 4
// function checkAccess() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     if (addresses.includes(userEmail)) {
//         grantAccess = 'true';
//     }

//     if (grantAccess === true) {
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }
// }
// checkAccess();

// 1- ci consente di sappere se l'email fornita tramite il prompt è tra quelle che abbiamo nell'array
// 2- la variabile 'grantAccess' è una strina true e non un valore booleano, lo stesso problema lo si riscontra anche nell''if'

// CORREZIONE

// function checkAccess() {
//   const addresses = [
//     'mymail@mail.com',
//     'yourmail@mail.com',
//     'hermail@mail.com',
//     'hismail@mail.com',
//   ];
//   const userEmail = prompt('Inserisci il tuo indirizzo email');

//   let grantAccess = false;

//   if (addresses.includes(userEmail)) {
//     grantAccess = true;
//   }

//   if (grantAccess === true) {
//     console.log('Accesso consentito!');
//   } else {
//     console.log('Accesso negato!');
//   }
// }
// checkAccess();

// ESERCIZIO 5 (suggerimento: c'è un solo errore)
// function checkAccessImproved() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     for (let i = 0; i < addresses.length; i++) {
//         const email = addresses[i];

//         if (userEmail.length > 5) {

//             if (email === userEmail) {
//                 grantAccess = 'true';

//             }

//         }

//         if (grantAccess) {
//             console.log('Accesso consentito!');
//         } else {
//             console.log('Accesso negato!');
//         }
//     }
//     checkAccessImproved();

// 1- ci consente di sappere se l'email fornita tramite il prompt è tra quelle che abbiamo nell'array
// 2a- va chiusa la parentesi graffa
// 2b- vanno modificate alcune stringhe in valori booleani
// l'ultimo if deve essere messo fuori dal ciclo for

// CORREZIONE

// function checkAccessImproved() {
//   const addresses = [
//     'mymail@mail.com',
//     'yourmail@mail.com',
//     'hermail@mail.com',
//     'hismail@mail.com',
//   ];

//   const userEmail = prompt('Inserisci il tuo indirizzo email');

//   let grantAccess = false;

//   for (let i = 0; i < addresses.length; i++) {
//     const email = addresses[i];

//     if (userEmail.length > 5) {
//       if (email === userEmail) {
//         grantAccess = true;
//       }
//     }
//   }
//   if (grantAccess) {
//     console.log('Accesso consentito!');
//   } else {
//     console.log('Accesso negato!');
//   }
// }
// checkAccessImproved();
