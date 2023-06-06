let password = document.getElementById('password')
let confirmPassword = document.getElementById('confirmPassword')
let part = null

function changed(value){
    if (value === 'login'){
        const login = document.getElementById('formLogin')
        const cadastro = document.getElementById('formCadastro')
        login.style.display = 'block'
        cadastro.style.display = 'none'
    }else{
        const login = document.getElementById('formLogin')
        const cadastro = document.getElementById('formCadastro')
        login.style.display = 'none'
        cadastro.style.display = 'block'
    }
}

function validatePassword() {
  if (password.value != confirmPassword.value) {
    confirmPassword.setCustomValidity("Senhas diferentes!")
    confirmPassword.reportValidity()
    return false
  } else {
    confirmPassword.setCustomValidity("")
    return true
  }
}

confirmPassword.addEventListener('input', validatePassword)

const form1 = document.querySelector('#formCadastro form')
form1.addEventListener('submit', (event) => {
    event.preventDefault()
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const nickname = document.getElementById('nickname').value
    const date_birth = document.getElementById('date_birth').value
    const password = document.getElementById('password').value
    localStorage.setItem('name', name)
    localStorage.setItem('email', email)
    localStorage.setItem('nickname', nickname)
    localStorage.setItem('date_birth', date_birth)
    localStorage.setItem('password', password)
    console.log('oiiii')
})
