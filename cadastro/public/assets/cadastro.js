var botao = document.querySelector('.botao2');
botao.addEventListener("click", logar);
function logar() {
    window.location.href = "/../login/public/login.html";
}
var botaoCadastro = document.querySelector('.botao');
botaoCadastro.addEventListener('click', cadastro);
var grupoUsuarios = [];
function cadastro() {
    var nomeInput = document.querySelector('#name');
    var cpfInput = document.querySelector('#cpf');
    var emailInput = document.querySelector('#email');
    var senhaInput = document.querySelector('#senha');
    var nome = nomeInput.value;
    var cpf = cpfInput.value;
    var email = emailInput.value;
    var senha = senhaInput.value;
    if ((nome.length < 4 || cpf.length !== 11)) {
        alert("Complete seus Dados Corretamente");
    }
    else if ((nome.trim() !== '' && cpf.trim() !== ''
        && email.trim() !== ''
        && senha.trim() !== '')) {
        var usuario = { nome: nome, cpf: cpf, email: email, senha: senha };
        grupoUsuarios.push(usuario);
        console.log(grupoUsuarios);
        alert("Usuário Cadastrado Com Sucesso!!!");
    }
    else {
        alert("Verifique todos os campos");
    }
    nomeInput.value = "";
    cpfInput.value = "";
    emailInput.value = "";
    senhaInput.value = "";
}
