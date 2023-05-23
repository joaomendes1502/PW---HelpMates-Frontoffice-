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

var imagemdetalhe = [{
    "imagem": "./images/animais.jpg",
    "Tipo": "Animais"
},{
    "imagem": "./images/educacao.jpeg",
    "Tipo": "Educação"
},{
    "imagem": "./images/animais.jpg",
    "Tipo": "Animais"
},{
    "imagem": "./images/educacao.jpeg",
    "Tipo": "Educação"
}];

var itensdetalhe = [{


    "Descricaoo": "Durante a campanha de voluntariado curta, trabalharemos em parceria com abrigos e organizações de resgate de animais locais. Nosso foco principal será oferecer assistência e suporte aos animais que estão em busca de um lar amoroso. Haverá várias atividades gratificantes nas quais você poderá participar, desde passear com cães, brincar com gatos, ajudar nos cuidados diários até auxiliar em eventos de adoção.",
    "Organizacao": "Animal Crossing",
    "Data": " 24-11-2002",
    "Local": " Viana do Castelo",
    "VagasDisponiveis": " 25",
    "Tipo": "Animais",
    "Contacto": " 987654321"

},{


    "Descricaoo": "Escolas sao bue fixes",
    "Organizacao": "Educational",
    "Data": " 23-04-2003",
    "Local": " Lisboa",
    "VagasDisponiveis": " 20",
    "Tipo": "Educação",
    "Contacto": " 987654390"

},{


    "Descricaoo": "Durante a campanha de voluntariado curta, trabalharemos em parceria com abrigos e organizações de resgate de animais locais. Nosso foco principal será oferecer assistência e suporte aos animais que estão em busca de um lar amoroso. Haverá várias atividades gratificantes nas quais você poderá participar, desde passear com cães, brincar com gatos, ajudar nos cuidados diários até auxiliar em eventos de adoção.",
    "Organizacao": "Animal Crossing",
    "Data": " 24-11-2002",
    "Local": " Viana do Castelo",
    "VagasDisponiveis": " 25",
    "Tipo": "Animais",
    "Contacto": " 987654320"

},{


    "Descricaoo": "Escolas sao bue fixes",
    "Organizacao": "Educational",
    "Data": " 23-04-2003",
    "Local": " Lisboa",
    "VagasDisponiveis": " 20",
    "Tipo": "Educação",
    "Contacto": " 987654377"

}];

/*DOAÇÕES*/
var postarDoaçoes = [{
    "imagemDoaçoes": "./images/campanha1.png"
}, {
    "imagemDoaçoes": "./images/campanha2.png"
}, {
    "imagemDoaçoes": "./images/campanha3.png"
}, {
    "imagemDoaçoes": "./images/campanha4.png"
}, {
    "imagemDoaçoes": "./images/campanha5.png"
}, {
    "imagemDoaçoes": "./images/campanha6.png"
}];

var postarcolunaDoaçoes = [{
    "TipoDoaçoes": "Categoria 1",
    "DescricaoDoaçoes": "Garantir medicamentos para todas as crianças.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "refDoaçoes": "referencia"
}, {
    "TipoDoaçoes": "Categoria 2",
    "DescricaoDoaçoes": "Garantir casas seguras para as crianças.",
    "refDoaçoes": "referencia"
}, {
    "TipoDoaçoes": "Categoria 3",
    "DescricaoDoaçoes": "Assistência de Animais",
    "refDoaçoes": "referencia"
}, {
    "TipoDoaçoes": "Categoria 4",
    "DescricaoDoaçoes": "Assegurar roupa para todas as crianças.",
    "refDoaçoes": "referencia"
}, {
    "TipoDoaçoes": "Categoria 5",
    "DescricaoDoaçoes": "Aulas de reforço escolar",
    "refDoaçoes": "referencia"
}, {
    "TipoDoaçoes": "Categoria 6",
    "DescricaoDoaçoes": "Doação de ração para animais.",
    "refDoaçoes": "referencia",

    "Contacto": " 987654321",
    
}];


localStorage.setItem("ImagensOportunidades", JSON.stringify(postar))

localStorage.setItem("Oportunidades", JSON.stringify(postarcoluna))

localStorage.setItem("ImagemDetalhe", JSON.stringify(imagemdetalhe))

localStorage.setItem("ItensDetalhe", JSON.stringify(itensdetalhe))

localStorage.setItem("ImagensDoaçoes", JSON.stringify(postarDoaçoes))

localStorage.setItem("Doaçoes", JSON.stringify(postarcolunaDoaçoes))
