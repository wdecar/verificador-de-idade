# Verificador de Idade

Este é um projeto simples de verificação de idade desenvolvido em HTML, CSS e JavaScript. O objetivo é determinar a faixa etária e gênero do usuário com base no ano de nascimento e exibir uma imagem correspondente. 

## Estrutura do Projeto

projeto/
│
├── src/
│ ├── _css/
│ │ └── style.css
│ ├── _imagens/
│ │ ├── menino2.png
│ │ ├── jovemhomem2.png
│ │ ├── homemadulto2.png
│ │ ├── idoso.png
│ │ ├── menina2.png
│ │ ├── jovemmulher2.png
│ │ ├── mulheradulta2.png
│ │ └── mulheridosa2.png
│ └── _js/
│ └── script.js
└── modelo.html

## Funcionalidades

- Verificação da idade com base no ano de nascimento fornecido.
- Determinação do gênero com base na seleção do usuário.
- Exibição de uma mensagem com a idade calculada e o gênero.
- Exibição de uma imagem correspondente à faixa etária e gênero.

## Como Usar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/projeto-verificador-idade.git
Navegue até o diretório do projeto:

Navegue até o diretório do projeto:
cd projeto-verificador-idade
Abra o arquivo modelo.html no seu navegador:

Pode ser aberto diretamente clicando duas vezes no arquivo ou arrastando-o para o navegador.
Use a aplicação:

Insira o ano de nascimento e selecione o gênero.
Clique no botão "Verificar" para ver o resultado.
Arquivos do Projeto
modelo.html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="src/_css/style.css">
    <title>Verificador de Idade</title>
</head>
<body>
    <header>
        <h1>Verificador de Idade</h1>
    </header>
    <section>
        <div>
            <p> 
                <label>Ano de nascimento:
                    <input type="number" name="txtano" id="txtano" min="0"> 
                </label>
            </p>
            <p>Sexo:
                <input type="radio" name="radsex" id="mas" checked>
                <label for="mas">Masculino</label>
                <input type="radio" name="radsex" id="fem">
                <label for="fem">Feminino</label>
            </p>
            <p>
                <input type="button" value="Verificar" onclick="verificar()">
            </p>
        </div>
        <div id="res">
            Preencha os dados acima para ver o resultado!
        </div>
    </section>
    <footer>
        <p>&copy; Curso em Vídeo</p>
    </footer>    
    <script src="src/_js/script.js"></script>
</body>
</html>
body {
    background-color: #f4f4f4;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    text-align: center;
}

header {
    background-color: #333;
    color: white;
    padding: 10px 0;
}

section {
    margin: 20px auto;
    width: 50%;
}

div {
    background: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

input[type="number"] {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
}

input[type="button"] {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    background: #333;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

input[type="button"]:hover {
    background: #555;
}

#res {
    margin-top: 20px;
}

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

Observação
Este projeto foi realizado como parte de um teste de conhecimentos do curso de JavaScript pelo eximiu Professor Gustavo Guanabara do Curso em Vídeo.


Este `README.md` fornece uma visão geral do projeto, instruções de uso, descrição dos arquivos e uma observação sobre o propósito do projeto e o curso do Professor Gustavo Guanabara do Curso em Vídeo.




