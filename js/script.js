// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

// Input dell'utente
const userName = prompt("Qual è il tuo nome?");
console.log(userName, typeof(userName));
const userSurname = prompt("Qual è il tuo cognome?");
console.log(userSurname, typeof(userSurname));
const userColor = prompt("Qual è il tuo colore preferito?");
console.log(userColor, typeof(userColor));

// Elaborazione Dati
const userPassword = userName + userSurname + userColor + 26;
console.log(userPassword, typeof(userPassword));

// Output Utente
const userPasswordResult =`Ciao! La tua password è ${userPassword}`;
document.getElementById("password").innerHTML = userPasswordResult;