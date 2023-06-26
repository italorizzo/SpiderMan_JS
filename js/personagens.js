document.getElementById('button-pesquisar').addEventListener('click', pesquisar);

function pesquisar() {
  valorSearch = document.getElementById('Pesquisar-input').value;
  if (valorSearch == 'FRIENDLY NEIGHBORHOOD SPIDER-MAN') {
    window.scrollTo(1,1000)
  }
    else if (valorSearch == 'THE AMAZING SPIDER-MAN') {
        window.scrollTo(1,1500)
    }
    else if (valorSearch == 'SPIDER-MAN') {
        window.scrollTo(1,2000)
    }
    else if (valorSearch == 'ARANHAVERSO') {
        window.scrollTo(1,2500)
    }
    else if (valorSearch == 'Amazing fantasy') {
        window.scrollTo(1,3000)
    }
    else if (valorSearch == 'The Amazing spider-man') {
        window.scrollTo(1,3500)
    }
    else if (valorSearch == 'The amazing spider-man 2009') {
        window.scrollTo(1,4300)
    }
    else if (valorSearch == 'Homem aranha - 1967 a 2008') {
        window.scrollTo(1,4800)
    }
    else if (valorSearch == 'Vilões spider-man') {
        window.scrollTo(1,5300)
    }
    else {
        window.alert('Seção não encontrada')
    }
}