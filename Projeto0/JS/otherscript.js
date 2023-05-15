const vagasTotais = 25; // número total de vagas disponíveis
let vagasOcupadas = 7; // número de vagas ocupadas
let vagasDisponiveis = vagasTotais - vagasOcupadas; // número de vagas disponíveis

// adiciona um event listener para cada botão "Marcar"
const botoesMarcar = document.querySelectorAll('.marcar');
botoesMarcar.forEach(botao => {
  botao.addEventListener('click', marcarVaga);
});

// atualiza o número de vagas disponíveis na página
const vagasDisponiveisElement = document.querySelector('#vagas-disponiveis');
vagasDisponiveisElement.innerText = vagasDisponiveis;

function marcarVaga() {
  if (vagasOcupadas < vagasTotais) {
    // atualiza o número de vagas ocupadas
    vagasOcupadas++;

    

    // atualiza a contagem de vagas disponíveis
    vagasDisponiveis--;
    vagasDisponiveisElement.innerText = vagasDisponiveis;

    // aqui você pode enviar uma solicitação para um servidor para salvar a marcação da vaga
  } else {
    if (vagasOcupadas = vagasTotais) {
        // atualiza o botão para mostrar que a vaga está ocupada
    const botao = this;
    botao.disabled = true;
    botao.innerText = 'Ocupada';
    }
  }


}
