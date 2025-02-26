let chuvaAtiva = false; // Controla o estado da chuva de estrelas
let idIntervalo = null; // Armazena o ID do intervalo para controle

// Adiciona um listener ao botão para alternar o estado da chuva de estrelas
document.getElementById('toggleButton').addEventListener('click', function () {
    chuvaAtiva = !chuvaAtiva; // Alterna entre ligado e desligado
    this.textContent = chuvaAtiva ? "Desligar Chuva de Estrelas" : "Ligar Chuva de Estrelas";

    if (chuvaAtiva) {
        iniciarChuva(); // Inicia a chuva de estrelas
    } else {
        pararChuva(); // Para a chuva de estrelas
    }
});

// Função para iniciar a chuva de estrelas
function iniciarChuva() {
    idIntervalo = setInterval(criarEstrela, 50); // Cria uma estrela a cada 50ms
}

// Função para parar a chuva de estrelas
function pararChuva() {
    clearInterval(idIntervalo); // Limpa o intervalo
}

// Função para criar uma estrela
function criarEstrela() {
    const estrela = document.createElement('div');
    estrela.classList.add('star');

    // Posição aleatória no topo da tela
    const posicaoX = Math.random() * window.innerWidth;
    estrela.style.left = `${posicaoX}px`;

    // Tamanho aleatório
    const tamanho = Math.random() * 5 + 2;
    estrela.style.width = `${tamanho}px`;
    estrela.style.height = `${tamanho}px`;

    // Duração da animação aleatória
    const duracaoAnimacao = Math.random() * 2 + 1;
    estrela.style.animationDuration = `${duracaoAnimacao}s`;

    // Adiciona a estrela ao body
    document.body.appendChild(estrela);

    // Remove a estrela após a animação terminar
    setTimeout(() => {
        estrela.remove();
    }, 3000);
}