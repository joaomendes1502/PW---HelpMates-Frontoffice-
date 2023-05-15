//Ou API's -> link fica no sitio do atividades.json

fetch('Oportunidades.json') //Vai buscar o ficheiro
  .then(response => response.json())
  .then(data => {
    // A variavel data é um array com todos os elementos do ficheiro JSON
    //Igual a LocalStorage a partir daqui
    data.forEach(oportunidade => { 
        let html = '<div class="col-md-4">'+
                        '<figure>'+
                        '<a href="OportunidadesDetalhe.html?id='+oportunidade.id+'"><img src="'+oportunidade.imagem+'" class="img-fluid"></a>'+
                            '<figcaption class="bg-dark text-light">Desde '+oportunidade.preco+' pax</figcaption>'+
                            '<p>'+oportunidade.nome+'</p>'+
                        '</figure>'+
                    '</div>';
        
        if(oportunidade.categoria == "maritimos"){
            document.getElementById("maritimos").innerHTML += html;
        }else if(oportunidade.categoria == "terrestres"){
            document.getElementById("terrestres").innerHTML += html;
        }else{
            document.getElementById("aereos").innerHTML += html;
        }
    });
  })
  .catch(error => console.error(error));