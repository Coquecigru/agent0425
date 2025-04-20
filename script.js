
const input = document.getElementById("cmdInput");
const output = document.getElementById("output");

const commands = {
  help: "Commandes disponibles : help, hint, access",
  hint: "Essayez la commande 'access' pour continuer...",
  access: "🔓 Accès accordé. Bien joué, agent. Vous avez débloqué le message secret : "Votre créativité est votre meilleure arme. Mission acceptée."",
};

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const command = input.value.trim();
    output.innerHTML += `<div><span class="prompt">agent0425@mission:~$</span> ${command}</div>`;
    if (commands[command]) {
      output.innerHTML += `<div>${commands[command]}</div>`;
    } else {
      output.innerHTML += `<div>Commande inconnue: ${command}</div>`;
    }
    input.value = "";
    window.scrollTo(0, document.body.scrollHeight);
  }
});
