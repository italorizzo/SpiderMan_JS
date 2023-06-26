const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')

document.getElementById("date_birth").addEventListener("input", validateDateOfBirth)
confirmPassword.addEventListener('input', validatePassword)

function changed(value) {
  const login = document.getElementById('formLogin')
  const cadastro = document.getElementById('formCadastro')
  const abaLogin = document.getElementById('login')
  const abaCadastro = document.getElementById('cadastro')

  const isLogin = value === 'login'

  abaLogin.style.color = isLogin ? 'white' : '#ffffff7c'
  abaCadastro.style.color = isLogin ? '#ffffff7c' : 'white'
  login.style.display = isLogin ? 'block' : 'none'
  cadastro.style.display = isLogin ? 'none' : 'block'
}

function validateDateOfBirth() {
  const dateOfBirth = document.getElementById("date_birth").value
  const [day, month, year] = dateOfBirth.split("/")
  const inputDate = new Date(`${year}-${month}-${day}`)
  const minimumAgeDate = new Date()
  minimumAgeDate.setFullYear(minimumAgeDate.getFullYear() - 1)

  const errorMessage = inputDate > minimumAgeDate ? "Você deve ter pelo menos 1 ano de idade para se cadastrar." : ""
  document.getElementById("date_birth").setCustomValidity(errorMessage)
}

function validatePassword() {
  validateDateOfBirth()
  confirmPassword.setCustomValidity(password.value !== confirmPassword.value ? "Senhas diferentes!" : "")
}

function handleFormSubmit(event, formType) {
  event.preventDefault()
  const form = event.target

  if (formType === 'cadastro') {
    handleCadastro(form)
  } else if (formType === 'login') {
    handleLogin(form)
  }
}

function handleCadastro(form) {
  const email = form.email.value
  const storedEmailArray = JSON.parse(localStorage.getItem('email')) || []

  if (storedEmailArray.includes(email)) {
    form.querySelector('.validarCadastro').style.display = 'block'
  } else {
    const name = form.name.value
    const nickname = form.nickname.value
    const dateOfBirth = form.date_birth.value
    const password = form.password.value

    const nomeArray = JSON.parse(localStorage.getItem('name')) || []
    const nicknameArray = JSON.parse(localStorage.getItem('nickname')) || []
    const nascimentoArray = JSON.parse(localStorage.getItem('date_birth')) || []
    const passwordArray = JSON.parse(localStorage.getItem('password')) || []

    nomeArray.push(name)
    storedEmailArray.push(email)
    nicknameArray.push(nickname)
    nascimentoArray.push(dateOfBirth)
    passwordArray.push(password)

    localStorage.setItem('name', JSON.stringify(nomeArray))
    localStorage.setItem('email', JSON.stringify(storedEmailArray))
    localStorage.setItem('nickname', JSON.stringify(nicknameArray))
    localStorage.setItem('date_birth', JSON.stringify(nascimentoArray))
    localStorage.setItem('password', JSON.stringify(passwordArray))
    localStorage.setItem('loggedInEmail', email)

    window.location.href = '../index.html'
  }
}

function handleLogin(form) {
  const email = form.email_logs.value
  const password = form.password_log.value
  const storedEmailArray = JSON.parse(localStorage.getItem('email')) || []
  const storedPasswordArray = JSON.parse(localStorage.getItem('password')) || []
  const emailIndex = storedEmailArray.indexOf(email)

  if (emailIndex !== -1 && storedPasswordArray[emailIndex] === password) {
    localStorage.setItem('loggedInEmail', email)
    window.location.href = '../index.html'
  } else {
    const validar = form.querySelector('.validarLogin')
    const validarPassword = form.querySelector('.validarLoginPassword')

    validar.style.display = emailIndex === -1 ? 'block' : 'none'
    validarPassword.style.display = emailIndex !== -1 ? 'block' : 'none'
  }
}