// JavaScript (Editar Perfil)

// Quando o utilizador faz alterações em seu perfil na página "EditarPerfilUser.html", os novos valores são armazenados na chave "UtilizadorEdit" de maneira temporaria no LocalStorage.

document.addEventListener('DOMContentLoaded', function () {
    // Obter os elementos de entrada de dados
    var nameInput = document.getElementById('name-input');
    var usernameInput = document.getElementById('username-input');
    var emailInput = document.getElementById('email-input');
    var saveChangesButton = document.getElementById('save-changes-button');



    // Carregar os dados do usuário armazenados no LocalStorage em array UtilizadorEdit
    var userData = localStorage.getItem('UtilizadorEdit');
    if (userData) {
        var useredicao = JSON.parse(userData);

        // Preencher os campos de entrada com os dados do usuário
        nameInput.value = useredicao.nome;
        usernameInput.value = useredicao.username;
        emailInput.value = useredicao.email;
    }

    // Lidar com o evento de clique no botão de guardar alterações
    saveChangesButton.addEventListener('click', function () {
        // Obter os valores atualizados dos campos de entrada
        var updatedName = nameInput.value;
        var updatedUsername = usernameInput.value;
        var updatedEmail = emailInput.value;

        // Obter os dados do usuário armazenados no LocalStorage
        var storedUserData = localStorage.getItem('UtilizadorLogado');
        if (storedUserData) {
            var storedUser = JSON.parse(storedUserData);

            // Atualizar os dados do usuário com os valores dos campos de entrada atualizados
            storedUser.nome = updatedName;
            storedUser.username = updatedUsername;
            storedUser.email = updatedEmail;

            // Armazenar os dados atualizados no LocalStorage na chave 'utilizador'
            localStorage.setItem('utilizador', JSON.stringify(storedUser));

            // Armazenar os dados atualizados no LocalStorage
            localStorage.setItem('UtilizadorLogado', JSON.stringify(storedUser));

            // Exibir uma mensagem de sucesso (opcional)
            alert('Alterações guardadas com sucesso!');
        }

        // Redirecionar de volta para a página "Ver utilizador"
        window.location.href = 'PerfilUser.html';
    });
});