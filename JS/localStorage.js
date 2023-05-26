var postar = [{
    "imagem": "./images/animais.jpg"
}, {
    "imagem": "./images/educacao.jpeg"
}, {
    "imagem": "./images/meio ambiente.jpeg"
}, {
    "imagem": "./images/turismo social.jpg"
}, {
    "imagem": "./images/auxilio doentes(2).jpg"
}, {
    "imagem": "./images/desporto.jpg"
}];

var postarcoluna = [{
    "Tipo": "Animais",
    "Descricao": "Os animais precisam dos nossos cuidados e proteção, cria um futuro mais seguro e feliz para eles.",

}, {
    "Tipo": "Educação",
    "Descricao": "O voluntariado na educação é importante para contribuir para uma sociedade mais justa.",

}, {
    "Tipo": "Meio ambiente",
    "Descricao": "És preocupado com o ambiente? Faz a tua parte e ajuda-nos a preservar o meio ambiente.",

}, {
    "Tipo": "Turismo social",
    "Descricao": "Gostas de viajar? Agarra na oportunidade de explorar novos lugares e ajudar pessoas.",

}, {
    "Tipo": "Auxílio de doentes",
    "Descricao": "Faça a diferença na vida de alguém, ajude a trazer conforto e apoio para aqueles que mais precisam.",

}, {
    "Tipo": "Desporto",
    "Descricao": "És apaixonado pelo desporto? Esta é a tua oportunidade de ajudar a construir uma comunidade mais ativa.",

}];



/*DOAÇÕES*/
var postarDoaçoes = [{
    "imagemDoacoes": "./images/campanha1.png"
}, {
    "imagemDoacoes": "./images/campanha2.png"
}, {
    "imagemDoacoes": "./images/campanha3.png"
}, {
    "imagemDoacoes": "./images/campanha4.png"
}, {
    "imagemDoacoes": "./images/campanha5.png"
}, {
    "imagemDoacoes": "./images/campanha6.png"
}];

var postarcolunaDoaçoes = [{
    "TipoDoacoes": "Categoria 1",
    "DescricaoDoacoes": "Garantir medicamentos para todas as crianças.",
    "refDoacoes": "referencia"
}, {
    "TipoDoacoes": "Categoria 2",
    "DescricaoDoacoes": "Garantir casas seguras para as crianças.",
    "refDoacoes": "referencia"
}, {
    "TipoDoacoes": "Categoria 3",
    "DescricaoDoacoes": "Assistência de Animais",
    "refDoacoes": "referencia"
}, {
    "TipoDoacoes": "Categoria 4",
    "DescricaoDoacoes": "Assegurar roupa para todas as crianças.",
    "refDoacoes": "referencia"
}, {
    "TipoDoacoes": "Categoria 5",
    "DescricaoDoacoes": "Aulas de reforço escolar",
    "refDoacoes": "referencia"
}, {
    "TipoDoacoes": "Categoria 6",
    "DescricaoDoacoes": "Doação de ração para animais.",
    "refDoacoes": "referencia",


}];

/*Detalhe Doações*/
var imagensDetalheDoacoes = [{
    "imagemDoacoes": "./images/campanha1.png",
    "TipoDoacoes": "Categoria 1"
}, {
    "imagemDoacoes": "./images/campanha2.png",
    "TipoDoacoes": "Categoria 2"
}, {
    "imagemDoacoes": "./images/campanha3.png",
    "TipoDoacoes": "Categoria 3"
}, {
    "imagemDoacoes": "./images/campanha4.png",
    "TipoDoacoes": "Categoria 4"
}, {
    "imagemDoacoes": "./images/campanha5.png",
    "TipoDoacoes": "Categoria 5"
}, {
    "imagemDoacoes": "./images/campanha6.png",
    "TipoDoacoes": "Categoria 6"
}];

var postarDetalheDoacoes = [{
    "titulo": "Garantir medicamentos",
    "TipoDoacoes": "Categoria 1",
    "Instituicao": "Ajuda",
    "ContactoInstituicao": "939840430",
    "ReferenciaMultibanco": "12345678",
    "DescricaoDoacoes": "Garantir medicamentos para todas as crianças.",

}, {
    "titulo": "Garantir medicamentos",
    "TipoDoacoes": "Categoria 2",
    "Instituicao": "Ajuda",
    "ContactoInstituicao": "939840430",
    "ReferenciaMultibanco": "12345678",
    "DescricaoDoacoes": "Garantir medicamentos para todas as crianças.",
}, {
    "titulo": "Garantir medicamentos",
    "TipoDoacoes": "Categoria 3",
    "Instituicao": "Ajuda",
    "ContactoInstituicao": "939840430",
    "ReferenciaMultibanco": "12345678",
    "DescricaoDoacoes": "Garantir medicamentos para todas as crianças.",
}, {
    "titulo": "Garantir medicamentos",
    "TipoDoacoes": "Categoria 4",
    "Instituicao": "Ajuda",
    "ContactoInstituicao": "939840430",
    "ReferenciaMultibanco": "12345678",
    "DescricaoDoacoes": "Garantir medicamentos para todas as crianças.",

}, {
    "titulo": "Garantir medicamentos",
    "TipoDoacoes": "Categoria 5",
    "Instituicao": "Ajuda",
    "ContactoInstituicao": "939840430",
    "ReferenciaMultibanco": "12345678",
    "DescricaoDoacoes": "Garantir medicamentos para todas as crianças.",
}, {
    "titulo": "Garantir medicamentos",
    "TipoDoacoes": "Categoria 6",
    "Instituicao": "Ajuda",
    "ContactoInstituicao": "939840430",
    "ReferenciaMultibanco": "12345678",
    "DescricaoDoacoes": "Garantir medicamentos para todas as crianças.",

}];






localStorage.setItem("ImagensOportunidades", JSON.stringify(postar))

localStorage.setItem("Oportunidades", JSON.stringify(postarcoluna))

localStorage.setItem("ImagemDetalhe", JSON.stringify(imagemdetalhe))

localStorage.setItem("ItensDetalhe", JSON.stringify(itensdetalhe))

localStorage.setItem("ImagensDoaçoes", JSON.stringify(postarDoaçoes))

localStorage.setItem("Doaçoes", JSON.stringify(postarcolunaDoaçoes))

localStorage.setItem("ImagensDetalhesDoacoes", JSON.stringify(imagensDetalheDoacoes))

localStorage.setItem("DetalhesDoacoes", JSON.stringify(postarDetalheDoacoes))


