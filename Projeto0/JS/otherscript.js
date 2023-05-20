let marcacao = JSON.parse(localStorage.getItem("ItensDetalhe")) || [];



function marcar() {

    let Organizacao = document.getElementById("Organizacao").textContent;
    let Contacto = document.getElementById("Contacto").textContent;
    let Data = document.getElementById("Data").textContent;
    let Vagas = document.getElementById("Vagas").textContent;
    const user1 = JSON.parse(localStorage.getItem('UtilizadorLogado'));



    if (user1) {

        
        alert('Marcação registada, aguarde por confirmação');
        let marca = { "estado": "Pendente", "Organizacao": Organizacao, "Contacto": Contacto, "Data": Data, "Vagas": Vagas, "username": user1.username }
        localStorage.setItem("marcacao", JSON.stringify(marca));
        window.location.href = "Detalhe.html";

    } else {
        window.location.href = "Login.html";
    }




}

console.log(document.getElementById("marcar"));

// Registar evento de clique no botão de registo 
document.getElementById("marcar").addEventListener("click", marcar);