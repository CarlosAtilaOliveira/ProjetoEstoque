function validar() {
    
    let nome = document.querySelector('#nome');
    let senha = document.querySelector('#senha');
   
    if(nome.value == "atila" && senha.value == "123"){
      window.location.assign("/../main/public/index.html");
    }
    else {
      alert("Usuario ou Senha Incorretos");
      nome.value = '';
      senha.value = '';
    }
}

function cadastrar () {
  window.location.assign("/../cadastro/public/cadastro.html");
}
    
let entrar = document.querySelector('.entrar');
entrar.addEventListener("click", validar);

let botao2 = document.querySelector('.cadastro');
botao2.addEventListener("click" , cadastrar);
