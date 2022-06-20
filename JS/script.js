console.log ('JS OK')

// 1 - Creo variabile per testo introduttivo
// 2 - Creo variabile per il nome
// 3 - Creo variabile per il cognome
// 4 - Creo variabile per il colore
// 5 - Creo la variabile per recuperare l'elemento dal DOM per poi inserire la frase introduttiva
// 6 - Creo innerText unendo i dati

const yourPw = "La tua password è ";
console.log(yourPw);

const firstName = prompt('Il tuo nome', 'Nome');
console.log(firstName);

const lastName = prompt('Il tuo cognome', 'Cognome');
console.log(lastName);

const color = prompt('Il tuo colore preferito', 'Colore preferito');
console.log(color);

const password = document.getElementById('your-password');
console.log(password);

password.innerText = yourPw + firstName + lastName + color + '21';