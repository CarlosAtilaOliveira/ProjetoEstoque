function logar(){
    window.location.href = "/../login/public/login.html";
}

let botao = document.querySelector('.botao2') as HTMLButtonElement;
botao.addEventListener("click", logar);