localStorage.setItem('vagasTotais', '25');
localStorage.setItem('vagasDisponiveis', localStorage.getItem('vagasTotais'));
localStorage.setItem('vagasOcupadas', '2');

// Atualizar o número de vagas disponíveis na página
const spanVagasDisponiveis = document.getElementById('vagasDisponiveis');
spanVagasDisponiveis.textContent = localStorage.getItem('vagasDisponiveis');


// Função para candidatar-se ao voluntariado
function candidatarVoluntariado() {
    let vagasDisponiveis = localStorage.getItem('vagasDisponiveis');
    let vagasOcupadas = localStorage.getItem('vagasOcupadas');
  
    if (vagasDisponiveis <= vagasOcupadas) {
      // Notificar o usuário que não há vagas disponíveis
      alert('Não há vagas disponíveis.');
      return;
    }
  
    // Notificar o administrador sobre a nova candidatura
    notificarAdministrador();
  
    // Esperar pela resposta do administrador
    aguardarRespostaAdministrador().then((resposta) => {
      if (resposta === 'aceita') {
        // Atualizar o número de vagas disponíveis
        vagasDisponiveis = parseInt(vagasDisponiveis);
        vagasDisponiveis--;
        localStorage.setItem('vagasDisponiveis', vagasDisponiveis);
  
        // Notificar o usuário que sua candidatura foi aceita
        alert('Sua candidatura foi aceita!');
      } else {
        // Notificar o usuário que sua candidatura foi rejeitada
        alert('Sua candidatura foi rejeitada.');
      }
    });
  }
  
  // Função para notificar o administrador sobre uma nova candidatura
  function notificarAdministrador() {
    // Implementação da notificação para o administrador
    // Pode ser feito através de um envio de email, mensagem ou outra forma de comunicação
  }
  
  // Função para aguardar a resposta do administrador
  function aguardarRespostaAdministrador() {
    return new Promise((resolve, reject) => {
      // Implementação para aguardar a resposta do administrador
      // Pode ser feito através de um modal, caixa de diálogo ou outra forma de interação
      // A resposta do administrador deve ser passada como argumento para a função resolve() da Promise
    });
  }
  
  // Exemplo de uso: vinculando a função ao clique de um botão
  const botaoCandidatar = document.getElementById('botao-candidatar'); // Supondo que haja um elemento com o id "botao-candidatar"
  botaoCandidatar.addEventListener('click', candidatarVoluntariado);

  // JavaScript
// Event listener para o botão "Marcar"
const botaoMarcar = document.getElementById('botaoMarcar');
botaoMarcar.addEventListener('click', marcarVoluntario);

// Função para marcar um voluntário
function marcarVoluntario() {
  // Aqui você pode implementar a lógica para marcar o voluntário, por exemplo, aceitando a solicitação do usuário e atualizando o número de vagas ocupadas

  // Exemplo:
  let vagasOcupadas = parseInt(localStorage.getItem('vagasOcupadas'));
  localStorage.setItem('vagasOcupadas', vagasOcupadas + 1);

  // Notificar o usuário que a marcação foi feita
  alert('Voluntário marcado com sucesso!');
}

  