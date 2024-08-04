let jogadorAtual = 'X';
let placarX = 0;
let placarO = 0;
let jogoEmAndamento = true;

const celulas = document.querySelectorAll('.celula');
const btnReiniciar = document.getElementById('btn-reiniciar');
const placarXElement = document.getElementById('placar-x');
const placarOElement = document.getElementById('placar-o');

celulas.forEach((celula) => {
  celula.addEventListener('click', () => {
    if (jogoEmAndamento && celula.textContent === '') {
      celula.textContent = jogadorAtual;
      verificarVencedor();
      alternarJogador();
    }
  });
});

btnReiniciar.addEventListener('click', () => {
  reiniciarJogo();
});

function verificarVencedor() {
  const combinacoes = [
    [celulas[0], celulas[1], celulas[2]],
    [celulas[3], celulas[4], celulas[5]],
    [celulas[6], celulas[7], celulas[8]],
    [celulas[0], celulas[3], celulas[6]],
    [celulas[1], celulas[4], celulas[7]],
    [celulas[2], celulas[5], celulas[8]],
    [celulas[0], celulas[4], celulas[8]],
    [celulas[2], celulas[4], celulas[6]],
  ];

  combinacoes.forEach((combinacao) => {
    if (
      combinacao[0].textContent === jogadorAtual &&
      combinacao[1].textContent === jogadorAtual &&
      combinacao[2].textContent === jogadorAtual
    ) {
      jogoEmAndamento = false;
      mostrarModalVitoria();
      atualizarPlacar();
    }
  });
  // Verificar se todas as células estão preenchidas e não há um vencedor
celulasPreenchidas = 0;
celulas.forEach((celula) => {
  if (celula.textContent!== '') {
    celulasPreenchidas++;
  }
});

if (celulasPreenchidas === 9 && jogoEmAndamento) {
  jogoEmAndamento = false;
  mostrarModalVitoria(true); // Passa `true` para indicar empate
}
}

// Função para mostrar o modal de vitória
function mostrarModalVitoria(empate) {
  const modalVitoria = document.getElementById('modal-vitoria');
  const mensagemVitoria = document.getElementById('mensagem-vitoria');
  const btnFecharModal = document.getElementById('btn-fechar-modal');

  modalVitoria.style.display = 'block';

  if (empate) {
    mensagemVitoria.textContent = 'Empate, Nenhum jogador ganhou!';
  } else {
    mensagemVitoria.textContent = `Jogador ${jogadorAtual} venceu!`;
  }

  btnFecharModal.addEventListener('click', () => {
    modalVitoria.style.display = 'none';
  });
}

function alternarJogador() {
  jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
}

function reiniciarJogo() {
  jogoEmAndamento = true;
  celulas.forEach((celula) => {
    celula.textContent = '';
  });
  jogadorAtual = 'X';
}

function atualizarPlacar() {
  if (jogadorAtual === 'X') {
    placarX++;
    placarXElement.textContent = `X: ${placarX}`;
  } else {
    placarO++;
    placarOElement.textContent = `O: ${placarO}`;
  }
}


function main() {
  
  // Seleciona o modal e o botão de fechar
  const modal = document.querySelector('.modal');
  const closeModal = document.querySelector('.close-modal');

  // Mostra o modal
  modal.style.display = 'flex';

  // Fecha o modal quando o botão é clicado
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  
}

window.onload = () => {
  main();
};

