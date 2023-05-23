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

  // Preencher os campos com os dados do usuário
  //document.getElementById('username').value = userr.username;
  //document.getElementById('name').value = userr.nome;
  //document.getElementById('email').value = userr.email;
  //document.getElementById('password').value = userr.password;

  // Adicionar evento de envio do formulário
  //document.getElementById('edit-profile-form').addEventListener('submit', function (event) {
    //event.preventDefault(); // Evitar que a página seja recarregada após o envio do formulário

    // Obter os valores atualizados do formulário
    //var updatedUsername = document.getElementById('username').value;
    //var updatedName = document.getElementById('name').value;
    //var updatedEmail = document.getElementById('email').value;
    //var updatedPassword = document.getElementById('password').value;

    // Atualizar os dados do usuário no objeto
    //userr.username = updatedUsername;
    //userr.nome = updatedName;
    //userr.email = updatedEmail;
    //userr.password = updatedPassword;

    // Atualizar os dados no localStorage
    //localStorage.setItem('UtilizadorLogado', JSON.stringify(userr));

    // Redirecionar para a página de perfil ou exibir uma mensagem de sucesso
    //alert('Perfil atualizado com sucesso!');
    // window.location.href = 'perfil.html'; // Redirecionar para a página de perfil
  //});


  // Exibir os dados na página - pilacelos

  //document.getElementById('username').value = userr.username;
  //document.getElementById('name').value = userr.nome;
  //document.getElementById('email').value = userr.email;
  //document.getElementById('password').value = userr.password;
} //else {
  // Caso não haja dados no localStorage
  //console.log('Nenhum dado encontrado.');
//}