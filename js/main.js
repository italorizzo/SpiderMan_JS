const retornoTitulo = document.getElementById("titulo")
const retornoDescricao = document.getElementById("descricao")
const image = document.getElementById("ilustration")

function openModal(modalName) {
  let modal = document.getElementById(modalName)
  if (modal) {
    modal.style.display = 'flex'
  }
}

function exibir(cardId) {
  fetch('../js/detailCard.json')
    .then(response => response.json())
    .then(json => {
      var dados = json[cardId]
      if (dados) {
        retornoTitulo.innerHTML = dados.titulo
        retornoDescricao.innerHTML = dados.descricao
        image.src = dados.img
      }
    })
    .catch(error => {
      console.log(error)
    })
}

function closeModal(modalName) {
  let modal = document.getElementById(modalName)
  if (modal) {
    modal.style.display = 'none'
  }
}