
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
                showFinalSequence();
            } else {
                el.style.backgroundColor = "#440000";
                el.innerText = pw + " ✘";
            }
        };
        passwordList.appendChild(el);
    });
}

function showFinalSequence() {
    document.body.innerHTML = `
        <div id="scrolling-container">
            <div id="scrolling-text"></div>
            <div id="static-message">
                <p class="prompt">> Transmission établie...</p>
                <p class="prompt">> Bienvenue Agent 0425</p>
                <p class="prompt">> Prêt à animer une mission d'envergure.</p>
            </div>
        </div>
    `;
    const scrolling = document.getElementById("scrolling-text");
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    setInterval(() => {
        const line = Array(60).fill(0).map(() => characters[Math.floor(Math.random() * characters.length)]).join("");
        scrolling.innerHTML += line + "<br>";
        if (scrolling.children.length > 100) {
            scrolling.removeChild(scrolling.children[0]);
        }
    }, 100);
}
