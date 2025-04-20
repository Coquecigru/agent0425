
const output = document.getElementById('output');
const codeInput = document.getElementById('codeInput');
const bruteForceDiv = document.getElementById('bruteforce-game');
const passwordList = document.getElementById('password-list');

const expectedCode = "0425";
const finalMessage = "> Accès autorisé. Félicitations Agent. Votre mission commence maintenant.";

const introLines = [
    "> Initialisation du protocole d'accès...",
    "> Authentification : OK",
    "> Chargement des fichiers sécurisés...",
    '> Fichier "log_0425.dat" corrompu.',
    "> Tentative de récupération..."
];

let currentLine = 0;

function typeNextLine() {
    if (currentLine < introLines.length) {
        output.innerHTML += introLines[currentLine] + "\n";
        currentLine++;
        setTimeout(typeNextLine, 800);
    }
}
typeNextLine();

codeInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        if (codeInput.value === expectedCode) {
            document.getElementById('input-container').classList.add("hidden");
            bruteForceGame();
        } else {
            output.innerHTML += "> Code incorrect. Réessayez.\n";
            codeInput.value = "";
        }
    }
});

function bruteForceGame() {
    bruteForceDiv.classList.remove("hidden");
    passwordList.innerHTML = "";
    const correctPassword = "ACCESS_GRANTED";
    const allPasswords = [];

    for (let i = 0; i < 9; i++) {
        allPasswords.push("PASS_" + Math.random().toString(36).substring(2, 8).toUpperCase());
    }
    const insertAt = Math.floor(Math.random() * 10);
    allPasswords.splice(insertAt, 0, correctPassword);

    allPasswords.forEach(pw => {
        const el = document.createElement("div");
        el.className = "password-option";
        el.innerText = pw;
        el.onclick = () => {
            if (pw === correctPassword) {
                bruteForceDiv.innerHTML = "<p class='prompt'>" + finalMessage + "</p>";
            } else {
                el.style.backgroundColor = "#440000";
                el.innerText = pw + " ✘";
            }
        };
        passwordList.appendChild(el);
    });
}
