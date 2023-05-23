let posts = JSON.parse(localStorage.getItem("ImagemDetalhe"))
let postcoluna = JSON.parse(localStorage.getItem("ItensDetalhe"))
let postsHTML = '';
let colunaHTML = '';
let z = 0;

const TipoSelecionado = JSON.parse(localStorage.getItem("TipoEscolhido"))
const container = document.getElementById("postcolumn")

if (TipoSelecionado) {
    const imagens = posts.filter(post => post.Tipo === TipoSelecionado)
    const texto = postcoluna.filter(post => post.Tipo === TipoSelecionado)

    for (let i = 0; i < texto.length; i++) {
        const postElement = document.createElement('div');
        postElement.classList.add("cartao1");
        postElement.innerHTML = '<div id="' + texto[i].Organizacao + '" class="cartaodinamico">' +
            '<div id = "c" class="card2">' +
            '<div class="row g-0">' +
            '<div class="col-8 col-md-5">' +
            '<img src="' + imagens[i].imagem + '" style="width:auto; height:auto; padding-right:20px" ' +
            'class="card-img img-fluid rounded-start" alt="animais" />' +
            '</div>' +
            '<div class="col-4 col-md-7">' +
            '<div class="card-body d-flex flex-column">' +
            '<div class="h-100">' +
            '<h3 id="Organizacao" class="card-title">' + texto[i].Organizacao + '</h3>' +
            '<p id="desc" class="card-desc">' + texto[i].Descricaoo + '</p>' +
            '<p id="Data" class="card-desc">' + '<i class= "bi bi-calendar-date icon-orange">' + '</i>' + texto[i].Data + '</p>' +
            '<p class="card-desc">' + '<i class="bi bi-map icon-orange">' + '</i>' + texto[i].Local + '</p>' +
            '<p id="Vagas" class="card-desc">' + '<i class="bi bi-people-fill icon-orange">' + '</i>' + texto[i].VagasDisponiveis + '</p>' +
            '<p id="Contacto" class="card-desc">' + '<i class="bi bi bi-telephone icon-orange">' + '</i>' + texto[i].Contacto + '</p>' +
            '<p >' + '<a id="' + texto[i].Contacto + '" class="btn btn-primary marcar">Inscrever-se </a></p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
        container.appendChild(postElement);



    };

}