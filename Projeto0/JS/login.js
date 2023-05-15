let utilizador = [{
    "role": "admin",
    "nome": "admin",
    "password": "admin"
},
{
    "role": "cliente",
    "nome": "cliente123",
    "password": "1234"
}
]
localStorage.setItem("utilizador", JSON.stringify(utilizador));

function registar(){

    let name = document.getElementById('name').value;
    let pw = document.getElementById('pw').value;
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;

    /*if(name.value.length == 0){
        alert('Please fill in email');
    }else if(pw.value.length == 0){
        alert('Please fill in password');
    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');
    }else if(pw.value.length > 8){
        alert('Max of 8');
    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');
    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');
    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');
    }else{*/
        let utilizador = JSON.parse(localStorage.getItem("utilizador")); 
        let novo = {"role": "cliente", "nome": name, "password": pw}
        utilizador.push(novo); 
        localStorage.setItem("utilizador", JSON.stringify(utilizador));
        alert('A sua conta foi criada');
    /*}*/
}



function verificarUtilizador(nome, password){
    let utilizador = JSON.parse(localStorage.getItem("utilizador"))
    let resultado = null; 
    utilizador.forEach(u => { 
        if(u.nome === nome && u.password === password){
            resultado = u; 
        }
    });
    return resultado; 
}

document.getElementById("registo").addEventListener("click", registar);


function login(){
    let userName = document.getElementById('userName').value;
    let userPw = document.getElementById('userPw').value;
    let u = verificarUtilizador(userName, userPw);
    console.log(u)

    window.location.href = "helpmates.html";

    if(u){
        if(u.role === "admin"){
            alert("Logado como admin"); 
        }else{
            alert("Logado como cliente"); 
        }

    }else{
        alert("Este utilizador nao existe"); 
    }
}

document.getElementById("login").addEventListener("click", login);