let button, quebraLinha, jogada = 1, vencedor = 0
let tabuleiro = new Array(3)
for(let i = 0; i < tabuleiro.length; i++){
    tabuleiro[i] = new Array(3)
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
        // if(i % 2 == 1 && j % 2 == 0){
        //     button.style.backgroundColor = "black"
        // }
        // if(i % 2 == 0 && j % 2 == 1){
        //     button.style.backgroundColor = "black"
        // }
        button.append(document.createTextNode(""))
        document.body.append(button)
    }
}