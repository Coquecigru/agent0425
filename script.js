
const input = document.getElementById("terminal-input");
const output = document.getElementById("terminal-output");
const beep = document.getElementById("beep-sound");

input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    const value = input.value.trim();
    beep.play();
    output.textContent += "\n> " + value;
    if (value === "0425") {
      output.textContent += "\n> Code accepté. Accès autorisé.";
      output.textContent += "\n> *** Félicitations Agent Coquecigru ***";
      output.textContent += "\n> Vous avez débloqué la mission spéciale.";
    } else {
      output.textContent += "\n> Code incorrect.";
    }
    input.value = "";
    output.scrollTop = output.scrollHeight;
  }
});

    typeText("Accès autorisé. Bienvenue, agent 0425.");
  }
};

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const command = input.value.trim();
    const cmdLine = document.createElement("div");
    cmdLine.innerHTML = '<span class="prompt">agent0425@mission:~$</span> ' + command;
    output.appendChild(cmdLine);
    input.value = "";
    if (commands[command]) {
      commands[command]();
    } else {
      typeText("Commande inconnue: " + command);
    }
  }
});
