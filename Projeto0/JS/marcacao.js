
// Obter o elemento HTML onde as marcações serão exibidas
const marcacoesContainer = document.getElementById('marcacoes-container');

// Obter os dados das marcações do localStorage
const marcaData = JSON.parse(localStorage.getItem('marcacao')) || [];

console.log('marcacao');

// Verificar se há dados disponíveis
if (marcaData.length > 0) {
  // Iterar sobre as marcações e criar a estrutura HTML para cada uma
  marcaData.forEach((marca, index) => {
    // Criar um elemento div para a marcação
    const marcaElement = document.createElement('div');
    marcaElement.classList.add('marca');
  
    // Criar elementos HTML para exibir os dados da marcação
    const estadoElement = document.createElement('p');
    estadoElement.textContent = 'Estado: '+marca.estado+'';
  
    const organizacaoElement = document.createElement('p');
    organizacaoElement.textContent = 'Organização: '+marca.Organizacao+'';
  
    const contatoElement = document.createElement('p');
    contatoElement.textContent = 'Contacto: '+marca.Contacto+'';
  
    const dataElement = document.createElement('p');
    dataElement.textContent = 'Data: '+marca.Data+'';
  
  
    // Adicionar os elementos à marcação
    marcaElement.appendChild(estadoElement);
    marcaElement.appendChild(organizacaoElement);
    marcaElement.appendChild(contatoElement);
    marcaElement.appendChild(dataElement);

  
    // Adicionar a marcação ao container
    marcacoesContainer.appendChild(marcaElement);
  });
} else {
  // Se não houver marcações, exibir uma mensagem de nenhum dado encontrado
  const mensagemElement = document.createElement('p');
  mensagemElement.textContent = 'Nenhuma marcação encontrada.';
  marcacoesContainer.appendChild(mensagemElement);
}










