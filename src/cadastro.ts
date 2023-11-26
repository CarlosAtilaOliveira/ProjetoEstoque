let botao = document.querySelector('.botao2') as HTMLButtonElement;
botao.addEventListener("click", logar);

function logar() {
    window.location.href = "/../login/public/login.html";
}


let botaoCadastro = document.querySelector('.botao') as HTMLButtonElement;
botaoCadastro.addEventListener('click', cadastro);

let grupoUsuarios: { nome: string, cpf: string, email: string, senha: string }[] = [];

function cadastro() {
    let nomeInput = (document.querySelector('#name') as HTMLInputElement);
    let cpfInput = (document.querySelector('#cpf') as HTMLInputElement);
    let emailInput = (document.querySelector('#email') as HTMLInputElement);
    let senhaInput = (document.querySelector('#senha') as HTMLInputElement);

    let nome = nomeInput.value;
    let cpf = cpfInput.value;
    let email = emailInput.value;
    let senha = senhaInput.value;

    if ((nome.length < 4 || cpf.length !== 11)) {

        alert("Complete seus Dados Corretamente");

    } 
    else if ((nome.trim() !== '' && cpf.trim() !== '' 
    && email.trim() !== '' 
    && senha.trim() !== '')) {

        let usuario = { nome, cpf, email, senha }
        grupoUsuarios.push(usuario);
        console.log(grupoUsuarios);
        alert("Usuário Cadastrado Com Sucesso!!!");

    } else {
        alert("Verifique todos os campos");

    }
    nomeInput.value = "";
    cpfInput.value = "";
    emailInput.value = "";
    senhaInput.value = "";
}