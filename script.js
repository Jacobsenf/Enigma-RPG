const charadas = [
    { pergunta: "Deixo perguntas no ar, mas também sou quem resolve, minha mente inquieta é o que o mistério envolve. Entre fórmulas e hipóteses, meu trabalho persiste, sou aquele que descobre o que antes não existe.", resposta: "cientista" },
    { pergunta: "Sempre ao meu lado, mas nunca me vejo.Tomo a vida, mas não tenho mãos. Onde passo, tudo se cala e a terra se fecha. Quem sou eu?", resposta: "morte" },
    { pergunta: "Eu sou o portal entre o nada e o tudo, a ponte que liga o vazio ao futuro. Meu toque é a esperança para alguns, mas para outros, um fardo profundo. Quando me buscam, enfrentam a escuridão, e no final, encontram renovação. Sou cantada em lendas, temida em mitos, minha promessa é eterna, mas nunca sem riscos. Minha essência transcende a morte e o tempo, quem sou eu?", resposta: "ressurreição" },
    { pergunta: "De pedras feitas, ergui-me em grande altura, minhas torres tocam o céu e meu altar é de fé. Onde os fiéis encontram paz, e os segredos são guardados em meu interior Que lugar sou eu?", resposta: "catedral" }
];

let currentCharada = 0;
let gameOver = false;

function updateOutput(message) {
    const output = document.getElementById("output");
    output.innerHTML += message + "\n";
    output.scrollTop = output.scrollHeight;
}

function checkInput(event) {
    if (event.key === 'Enter' && !gameOver) {
        const input = document.getElementById("input");
        const answer = input.value.trim().toLowerCase();


        if (answer === charadas[currentCharada].resposta) {
            currentCharada++;
            if (currentCharada < charadas.length) {
                updateOutput(`Você resolveu o enigma.\nEstão preparados para o próximo enigma? [Y/N]`);
            } else {
                updateOutput("Venturini, Sharp, Sharp, Bailey, Armstrong.")
            }
        } else if (answer === 'y') {
            updateOutput(charadas[currentCharada].pergunta);
        } else if (answer === 'n') {
            updateOutput("O jogo foi interrompido.");
            gameOver = true;
        } else {
            updateOutput("Resposta incorreta, tente novamente.");
        }

        if (answer === 'cleiton neves') {
            document.getElementById("cleiton").style.display = "block"; 
        }

        if (answer === 'morgan') {
            updateOutput("???");
        }

        if (answer === 'v03') {
            updateOutput("Morto.");
        }

        input.value = '';
    }
}

function startGame() {
    updateOutput("Agora, vamos nos divertir.");
    updateOutput(charadas[currentCharada].pergunta);
}

window.onload = startGame;
