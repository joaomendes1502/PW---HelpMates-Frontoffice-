var userData = localStorage.getItem('UtilizadorLogado');

if (userData) {
    // Converter os dados de volta para um objeto JavaScript
    var userr = JSON.parse(userData);
  
    // Exibir os dados na página
    
    document.getElementById('username').value = userr.username;
    document.getElementById('name').value = userr.name;
    document.getElementById('email').value = userr.email;
    document.getElementById('password').value = userr.password;
  } else {
    // Caso não haja dados no localStorage
    console.log('Nenhum dado encontrado.');
  }