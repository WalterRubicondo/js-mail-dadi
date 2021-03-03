// Generazione numero randomico giocatore
alert("Gioca contro il computer e vedi se hai vinto. Schiccia Ok e vedi se hai vinto")

var player = Math.floor(Math.random() * 6) + 1;
console.log(player);

// Generazione numero randomico computer
var computer = Math.floor(Math.random() * 6) + 1;
console.log(computer);

// Risultato
if (player > computer) {
  alert("Hai vinto")
} else if (player < computer) {
  alert("Hai perso")
} else {
  alert("Pareggio")
}
