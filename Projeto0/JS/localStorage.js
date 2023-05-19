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
    "Descricao": "Os animais precisam dos nossos cuidados e proteção, ajuda- nos a criar um futuro mais seguro e feliz para eles.",
    "ref": "referencia"
}, {
    "Tipo": "Educação",
    "Descricao": "O voluntariado na educação é uma oportunidade única para contribuir para a formação de uma sociedade mais justa.",
    "ref": "referencia"
}, {
    "Tipo": "Meio ambiente",
    "Descricao": "És preocupado com o ambiente? Faz a tua parte e ajuda-nos a preservar o meio ambiente e a garantir um futuro sustentável, o planeta está nas nossas mãos!",
    "ref": "referencia"
}, {
    "Tipo": "Turismo social",
    "Descricao": "Gostas de viajar? Esta é uma maneira única de explorar novos lugares e, ao mesmo tempo, fazer diferença na vida das pessoas.",
    "ref": "referencia"
}, {
    "Tipo": "Auxílio de doentes",
    "Descricao": "Faça a diferença na vida de alguém, ajude a trazer conforto e apoio para aqueles que mais precisam.",
    "ref": "referencia"
}, {
    "Tipo": "Desporto",
    "Descricao": "És apaixonado pelo desporto? Esta é a tua oportunidade de ajudar a construir uma comunidade mais ativa e saudável.",
    "ref": "referencia"
}];




localStorage.setItem("ImagensOportunidades", JSON.stringify(postar))

localStorage.setItem("Oportunidades", JSON.stringify(postarcoluna))




