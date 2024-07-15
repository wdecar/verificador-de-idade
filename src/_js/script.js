function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var resu = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[Erro] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var image = document.createElement('img')
        image.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                image.setAttribute('src', 'src/_imagens/menino2.png')
            } else if (idade >= 10 && idade < 20) {
                // Jovem
                image.setAttribute('src', 'src/_imagens/jovemhomem2.png')
            } else if (idade >= 21 && idade < 50) {
                // Adulto
                image.setAttribute('src', 'src/_imagens/homemadulto2.png')
            } else {
                // Idoso
                image.setAttribute('src', 'src/_imagens/idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                image.setAttribute('src', 'src/_imagens/menina2.png')
            } else if (idade >= 10 && idade < 20) {
                // Jovem
                image.setAttribute('src', 'src/_imagens/jovemmulher2.png')
            } else if (idade >= 20 && idade < 50) {
                // Adulto
                image.setAttribute('src', 'src/_imagens/mulheradulta2.png')
            } else {
                // Idosa
                image.setAttribute('src', 'src/_imagens/mulheridosa2.png')
            }
        }

        resu.style.textAlign = 'center'
        resu.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        resu.appendChild(image)
    }
}
