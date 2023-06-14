let password = document.getElementById('password')
let confirmPassword = document.getElementById('confirmPassword')
let part = null

const dateOfBirthInput = document.getElementById("date_birth")

dateOfBirthInput.addEventListener("input", validateDateOfBirth)

function changed(value){
    if (value === 'login'){
      const login = document.getElementById('formLogin')
      const cadastro = document.getElementById('formCadastro')
      const abaLogin = document.getElementById('login')
      const abaCadastro = document.getElementById('cadastro')
      abaLogin.style.color = 'white'
      abaCadastro.style.color = '#ffffff7c'
      login.style.display = 'block'
      cadastro.style.display = 'none'
    }else{
      const login = document.getElementById('formLogin')
      const cadastro = document.getElementById('formCadastro')
      const abaLogin = document.getElementById('login')
      const abaCadastro = document.getElementById('cadastro')
      abaLogin.style.color = '#ffffff7c'
      abaCadastro.style.color = 'white'
      login.style.display = 'none'
      cadastro.style.display = 'block'
    }
}

function validateDateOfBirth() {
  const dateOfBirth = document.getElementById("date_birth").value
  const [day, month, year] = dateOfBirth.split("/")
  const today = new Date()
  const minimumAgeDate = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate())
  const inputDate = new Date(year, month - 1, day)
  if (inputDate > minimumAgeDate) {
    const errorMessage = "Você deve ter pelo menos 1 ano de idade para se cadastrar."
    document.getElementById("date_birth").setCustomValidity(errorMessage)
    return false
  }
  document.getElementById("date_birth").setCustomValidity("")
  return true
}


function validatePassword() {
  validateDateOfBirth()
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
    const email = document.getElementById('email').value
    const emailArray = JSON.parse(localStorage.getItem('email')) || []
    if (emailArray.includes(email)){
      const validar = document.querySelector('.validarCadastro')
      validar.style.display = 'block'
    }else{
      const nomeArray = JSON.parse(localStorage.getItem('name')) || []
      const emailArray = JSON.parse(localStorage.getItem('email')) || []
      const nicknameArray = JSON.parse(localStorage.getItem('nickname')) || []
      const nascimentoArray = JSON.parse(localStorage.getItem('date_birth')) || []
      const passwordArray = JSON.parse(localStorage.getItem('password')) || []
      
      const name = document.getElementById('name').value
      const email = document.getElementById('email').value
      const nickname = document.getElementById('nickname').value
      const date_birth = document.getElementById('date_birth').value
      const password = document.getElementById('password').value
      
      nomeArray.push(name)
      emailArray.push(email)
      nicknameArray.push(nickname)
      nascimentoArray.push(date_birth)
      passwordArray.push(password)
      
      localStorage.setItem('name', JSON.stringify(nomeArray))
      localStorage.setItem('email', JSON.stringify(emailArray))
      localStorage.setItem('nickname', JSON.stringify(nicknameArray))
      localStorage.setItem('date_birth', JSON.stringify(nascimentoArray))
      localStorage.setItem('password', JSON.stringify(passwordArray))
      
      window.location.href = '../../Projeto/index.html'
    }
})
const form2 = document.querySelector('#formLogin form')
form2.addEventListener('submit', (event) => {
  event.preventDefault()

  const storedEmailArray = JSON.parse(localStorage.getItem('email')) || []
  const storedPasswordArray = JSON.parse(localStorage.getItem('password')) || []
  let loggedInEmail = ''

  const email = document.getElementById('email-logs').value
  const password = document.getElementById('password_log').value

  const emailIndex = storedEmailArray.indexOf(email)
  if (emailIndex !== -1 && storedPasswordArray[emailIndex] === password) {
      loggedInEmail = email
      localStorage.setItem('loggedInEmail', loggedInEmail)
      window.location.href = '../../Projeto/index.html'
  } else {
    if(emailIndex == -1){
      const validar = document.querySelector('.validarLogin')
      validar.style.display = 'block'
      const validarPassword = document.querySelector('.validarLoginPassword')
      validarPassword.style.display = 'none'
    }else{
      const validarPassword = document.querySelector('.validarLoginPassword')
      validarPassword.style.display = 'block'
    }
  }
})