// Obtém os valores do localStorage
let postsDetalhesDoacoes = JSON.parse(localStorage.getItem("ImagensDetalhesDoacoes"));
let postcolunaDetalhesDoacoes = JSON.parse(localStorage.getItem("DetalhesDoacoes"));
let postsHTMLDetalhesDoacoes = '';
let colunaHTMLDetalhesDoacoes = '';

const TipoDoacaoSelecionado = JSON.parse(localStorage.getItem("TipoEscolhido1"));
const containerDetalhesDoacoes = document.getElementById("postcolumnDetalhesDoacoes");

// Recupera as informações da última doação armazenada
const ultimaDoacao = JSON.parse(localStorage.getItem('UltimaDoacao'));

if (TipoDoacaoSelecionado) {
    const imagensDetalhesDoacoes = postsDetalhesDoacoes.filter(postDetalhesDoacoes => postDetalhesDoacoes.TipoDoacoes === TipoDoacaoSelecionado);
    const textoDetalheDoacoes = postcolunaDetalhesDoacoes.filter(postDetalhesDoacoes => postDetalhesDoacoes.TipoDoacoes === TipoDoacaoSelecionado);

    let totalDinheiroDoado = 0;
    const valorMaximo = 20; // Defina o valor máximo desejado

    for (let i = 0; i < textoDetalheDoacoes.length; i++) {
        const postElementDetalhesDoacoes = document.createElement('div');
        postElementDetalhesDoacoes.classList.add("cartao1");
        postElementDetalhesDoacoes.innerHTML = '<div id="' + textoDetalheDoacoes[i].Instituicao + '" class="cartaodinamico">' +
            '<div id="c" class="card2">' +
            '<div class="row g-0">' +
            '<div class="col-8 col-md-5">' +
            '<img src="' + imagensDetalhesDoacoes[i].imagemDoacoes + '" style="width:auto; height:auto; padding-right:20px" ' +
            'class="card-img img-fluid rounded-start" alt="Categoria" />' +
            '</div>' +
            '<div class="col-4 col-md-7">' +
            '<div id="body-detalhe" class="card-body d-flex flex-column">' +
            '<div class="h-100">' +
            '<h3 id="titulo" class="card-title">' + textoDetalheDoacoes[i].titulo + '</h3>' +
            '<p id="desc" class="card-desc">' + textoDetalheDoacoes[i].DescricaoDoacoes + '</p>' +
            '<p id="tipo" class="card-desc">' + textoDetalheDoacoes[i].TipoDoacoes + '</p>' +
            '<p id="Instituicao" class="card-title">' + textoDetalheDoacoes[i].Instituicao + '</p>' +
            '<p id="multibanco" class="card-desc">' + textoDetalheDoacoes[i].ReferenciaMultibanco + '</p>' +
            '<p id="ContactoInstituicao" class="card-desc">' + '<i class="bi bi bi-telephone icon-orange">' + '</i>' + textoDetalheDoacoes[i].ContactoInstituicao + '</p>' +
            '<div class="form-group">' +
            '<label for="valorDoacao">Valor da doação</label>' +
            '<input type="number" id="valorDoacao' + i + '" class="form-control" placeholder="Insira o valor da doação">' +
            '</div>' +
            '<p>' + '<a id="' + textoDetalheDoacoes[i].ContactoInstituicao + '" class="btn btn-primary marcar"> Doar </a></p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
        containerDetalhesDoacoes.appendChild(postElementDetalhesDoacoes);
    }

    const btnDoar = document.querySelectorAll(".marcar");

    btnDoar.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const Logado = JSON.parse(localStorage.getItem('UtilizadorLogado'));

            if (Logado) {
                const valorDoacaoInput = document.getElementById('valorDoacao' + index);
                const valorDoacao = valorDoacaoInput.value.trim();

                if (valorDoacao === "" || Number(valorDoacao) <= 0) {
                    alert("Por favor, insira um valor de doação válido.");
                } else {
                    // Armazena as informações da doação no localStorage
                    const doacao = {
                        valor: valorDoacao,
                        utilizador: Logado.nome,
                        instituicao: textoDetalheDoacoes[index].Instituicao
                    };
                    localStorage.setItem('UltimaDoacao', JSON.stringify(doacao));

                    // Adiciona o valor doado ao total
                    totalDinheiroDoado += Number(valorDoacao);

                    // Verifica se o valor máximo foi atingido
                    if (totalDinheiroDoado > valorMaximo) {
                        alert("O valor máximo de doação para esta categoria foi atingido.");
                        // Você pode adicionar código adicional aqui para lidar com a situação quando o valor máximo é atingido
                    } else {
                        // Exibe as informações da última doação no console
                        console.log('Última doação:');
                        console.log('Valor: ' + doacao.valor);
                        console.log('Utilizador: ' + doacao.utilizador);
                        console.log('Instituição: ' + doacao.instituicao);

                        // Processar a doação
                        alert('Doação efetuada com sucesso!');
                    }
                }
            } else {
                alert('Você precisa fazer login primeiro.');
                //window.location.href = "Login.html";
            }
        });
    });

    const infoDoacao = document.getElementById("infoDoacao");

    // Recupera as informações da última doação armazenada
    const ultimaDoacao = JSON.parse(localStorage.getItem('UltimaDoacao'));

    if (ultimaDoacao) {
        infoDoacao.innerHTML = 'Última doação: <br>' +
            'Valor: ' + ultimaDoacao.valor + '<br>' +
            'Utilizador: ' + ultimaDoacao.utilizador + '<br>' +
            'Instituição: ' + ultimaDoacao.instituicao;
    }
}
