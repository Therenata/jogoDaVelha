let button, quebraLinha, jogada = 1, vencedor = 0
let tabuleiro = new Array(8)
for(let i = 0; i < tabuleiro.length; i++){
    tabuleiro[i] = new Array(8)
}
for(let i = 0; i < tabuleiro.length; i++){
    quebraLinha = document.createElement('br')
    document.body.append(quebraLinha)
    for(let j = 0; j < tabuleiro[i].length; j++){
        button = document.createElement('button')
        button.setAttribute('type', 'button')
        button.setAttribute ('id', 'bt' + i + "" + j)
        button.setAttribute('class', 'btJogo' + i)
        button.setAttribute('onclick', "marca(" + i + "," + j + ")")
        button.append(document.createTextNode(""))
        document.body.append(button)
    }
}