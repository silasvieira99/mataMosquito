//ajustar o tamanho de exibição do game de acordo com o tamanho da tela.

var altura = 0
var largura = 0
var vidas = 1
var tempo = 30
var tempoMosquito = 1500

//recuperar o nivel via href
var nivel = window.location.search
nivel = nivel.replace('?', '')

//criando os niveis
if(nivel === 'normal'){

    tempoMosquito = 1500

} else if(nivel === 'dificil'){
    tempoMosquito = 1000


} else if(nivel === 'lendario'){
    tempoMosquito = 750

}


function ajustaTela(){
    altura = window.innerHeight
    largura = window.innerWidth

}

ajustaTela()

//criando cronometro
var cronometro = setInterval(function(){

    tempo--

    if(tempo < 0){

        window.location.href = 'winer.html'

    }else{

    document.getElementById('cronometro').innerHTML = 'Tempo restante: ' + tempo

    }
    

}, 1000)


function posicaoRandom(){
    //remover mosquito anterior caso exista
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        //tirando uma vida caso o mosquito nao seja morto
        if(vidas > 3){
            window.location.href = 'game-over.html'

        }else{

            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
            
            vidas++
        }    
    }

    //gerar de posições de forma randomica do elemento

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    //criar o elemnto html
    var mosquito = document.createElement('img')

    //acessar os atributos desse elemento
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoMosquito() + " " + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY +'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function clickMosquito(){
        this.remove()
    }
    

    console.log(tamanhoMosquito())
    console.log(ladoAleatorio())


    //inserindo o elemento no body
    document.body.appendChild(mosquito)
}

posicaoRandom()

//criar tamanhos de mosquitos variados.
function tamanhoMosquito(){

    var classe = Math.floor(Math.random() * 3)

    switch (classe) {

        case 0:

            return 'mosquito1'
            
        case 1:

            return 'mosquito2'
        
        case 2: 

            return 'mosquito3'
    }

}

//alternar o lado da img 
function ladoAleatorio(){

    var classe = Math.floor(Math.random() * 2)

    switch (classe) {

        case 0:

            return 'ladoA'
        
        case 1:

            return 'ladoB'
    }
    console.log(ladoAleatorio())
}

// criando e removendo os mosquitos a cada ciclo de tempo
setInterval(function(){
    posicaoRandom()
}, tempoMosquito)


//iniciar o game verificando dificuldade
function iniciarGame(){

    var nivel = document.getElementById('dificuldade').value

    if(nivel === ''){
        alert('Selecione um nível para iniciar o jogo')
        return false
    }

    

}
