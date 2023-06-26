const logar = document.getElementById('logar')
const cadastrado = localStorage.getItem('loggedInEmail')
if (cadastrado) {
    const menu_logado = document.getElementById('header-logado')
    const menu_deslogado = document.getElementById('header-deslogado')
    menu_logado.style.display = 'block'
    menu_deslogado.style.display = 'none'
}

function openLogin(){
    window.location.href = '../login.html'
}