function validar() {
    
    let nome = document.querySelector('#nome') as HTMLInputElement;
    let senha = document.querySelector('#senha') as HTMLInputElement;
   
    if(nome.value == "atila" && senha.value == "123"){
      window.location.assign("/../main/public/index.html");
    }
    else {
      alert("Usuario ou Senha Incorretos");
      nome.value = '';
      senha.value = '';
    }
}

function cadastrar() {
  window.location.assign("/../cadastro/public/cadastro.html");
}
    
let entrar = document.querySelector('.entrar') as HTMLButtonElement;
entrar.addEventListener("click", validar);

let botao2 = document.querySelector('.cadastro') as HTMLButtonElement;
botao2.addEventListener("click" , cadastrar);