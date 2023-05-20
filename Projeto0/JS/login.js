let utilizador = JSON.parse(localStorage.getItem("utilizador"));


function loginn() {
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  // Verificar se o utilizador existe
  let user = utilizador.find(u => u.username === username);
  
  if (!user) {
    alert('Nome de usuário ou senha inválidos');
    return;
  }

  // Verificar se a senha está correta
  if (user.password !== password) {
    alert('Nome de usuário ou senha inválidos');
    return;
  }

  // Login bem-sucedido, redirecionar para a página de perfil do utilizador
  alert('Login bem-sucedido');

  
  window.location.href = "HelpMates.html";
  
 
}


// Registrar evento de clique no botão de registo e login

document.getElementById("login").addEventListener("click", loginn);


function checkLoginExecutada() {
  return typeof loginn === 'function';
}

if (checkLoginExecutada()) {
  console.log('A função loginn foi executada.');
} else {
  window.location.href = "Login.html";
}



document.getElementById("comlogin").addEventListener("click", checkLoginExecutada);
