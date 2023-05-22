var userData = localStorage.getItem('UtilizadorLogado'); //obtem os dados do utilizador armazenados em localstorage

//UtilizadorLogado: Essa chave é usada para armazenar os dados do utilizador quando ele faz login ou está autenticado no sistema

if (userData) {
  // Converter os dados de volta para um objeto JavaScript
  var userr = JSON.parse(userData);

  console.log(userr);
  console.log(userr.nome); // em localstorage é nome

  // Exibir os dados do usuário no container
  document.getElementById('display-name').textContent = userr.nome;
  document.getElementById('display-username').textContent = userr.username;
  document.getElementById('display-email').textContent = userr.email;

  // Selecionar o botão "Editar Perfil"
var editProfileButton = document.getElementById('edit-profile-button');

// Adicionar evento de clique ao botão
editProfileButton.addEventListener('click', function() {
  var userData = localStorage.getItem('UtilizadorLogado');
  if (userData) {
    var user = JSON.parse(userData);

    // Armazenar os dados do usuário no LocalStorage com a chave "UtilizadorEdit"
    localStorage.setItem('UtilizadorEdit', JSON.stringify(user));
  }
  // Redirecionar para a página de edição de perfil
  window.location.href = 'EditarPerfilUser.html';
});

// Localizar o elemento do botão de logout no seu HTML
var logoutButton = document.getElementById('logout-button');

// Adicionar um ouvinte de evento para o botão de logout
logoutButton.addEventListener('click', function() {
  // Remover os dados do perfil do usuário do LocalStorage
  localStorage.removeItem('utilizador');
  localStorage.removeItem('UtilizadorLogado');

  // Redirecionar o usuário para a página de login ou para onde for apropriado
  window.location.href = 'HelpMates.html';
});

}