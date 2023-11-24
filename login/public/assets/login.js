function validar() {
    var nome = document.querySelector('#nome');
    var senha = document.querySelector('#senha');
    if (nome.value == "atila" && senha.value == "123") {
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
var entrar = document.querySelector('.entrar');
entrar.addEventListener("click", validar);
var botao2 = document.querySelector('.cadastro');
botao2.addEventListener("click", cadastrar);
