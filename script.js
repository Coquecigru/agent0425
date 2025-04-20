
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
