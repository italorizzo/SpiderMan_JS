const nomeLocal = document.getElementById("nomeLocal")
const emailLocal = document.getElementById("emailLocal")
const userLocal = document.getElementById("userLocal")
const dateLocal = document.getElementById("dateLocal")

const perfil = document.getElementById("perfil")

function openPerfil(){
    if (perfil.style.display === 'block') {
        perfil.style.display = 'none'
    } else {
        perfil.style.display = 'block'
    }
    const nameArray = JSON.parse(localStorage.getItem('name')) || []
    const emailArray = JSON.parse(localStorage.getItem('email')) || []
    const nicknameArray = JSON.parse(localStorage.getItem('nickname')) || []
    const dateOfBirthArray = JSON.parse(localStorage.getItem('date_birth')) || []
    
    const firstNome = nameArray.length > 0 ? nameArray[0] : ""
    const firstEmail = emailArray.length > 0 ? emailArray[0] : ""
    const firstNickname = nicknameArray.length > 0 ? nicknameArray[0] : ""
    const firstDateOfBirth = dateOfBirthArray.length > 0 ? dateOfBirthArray[0] : ""
    
    nomeLocal.innerText = firstNome
    emailLocal.innerText = firstEmail
    userLocal.innerText = firstNickname
    dateLocal.innerText = firstDateOfBirth
}