// Input per email
var mail = prompt("Prego inserire email (Es: mariorossi@gmail.com)");

// Array con email
var listaEmail = ["prova1@gmail.com", "prova2@gmail.com", "mariorossi@gmail.com"];

var controller = false;

// Ciclo per ricerca email
for (var i = 0; i < listaEmail.length; i++) {
  if (listaEmail[i] == mail) {
    controller = true;
  }
}

// Esito ciclo
if (controller) {
  console.log("La mail c'è");
  alert("La mail è presente nei nostri database. Accesso consentito");
} else {
  console.log("La mail non c'è");
  alert("La mail non è presente nei nostri database. Accesso negato");
}
