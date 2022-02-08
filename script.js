//CHAMANDO TAGS
const container = document.getElementById('container')
const torrePaiUm = document.getElementById('torrePaiUm')
const torrePaiDois = document.getElementById('torrePaiDois')
const torrePaiTres = document.getElementById('torrePaiTres')
const button = document.getElementById('btnReset')
const victoryMessage = document.getElementById('bottomPart')

//CRIANDO E ADICIONANDO CLASSES ÀS TORRES 
const torreUm = document.createElement('div')
const torreDois = document.createElement('div')
const torreTres = document.createElement('div')

torreUm.classList.add('box-1')
torreDois.classList.add('box-2')
torreTres.classList.add('box-3')

torrePaiUm.appendChild(torreUm)
torrePaiDois.appendChild(torreDois)
torrePaiTres.appendChild(torreTres)

//CRIANDO E ADICIONANDO CLASSES AOS DISCOS DISCOS
const discoUm = document.createElement('div')
const discoDois = document.createElement('div')
const discoTres = document.createElement('div')
const discoQuatro = document.createElement('div')

discoUm.id = 'disco-1'
discoDois.id = 'disco-2'
discoTres.id = 'disco-3'
discoQuatro.id = 'disco-4'

torrePaiUm.appendChild(discoUm)
torrePaiUm.appendChild(discoDois)
torrePaiUm.appendChild(discoTres)
torrePaiUm.appendChild(discoQuatro)

//FUNÇÃO DE VERIFICAR SE O PLAYER É VITORIOSO
function isVictory() {
    if(torrePaiTres.childElementCount === 5) {
        const mensagem = document.createElement('h2')
        mensagem.innerText = 'Parabéns! Você venceu!'
        victoryMessage.appendChild(mensagem)

        torrePaiUm.removeEventListener("click", trocarDiscos)
        torrePaiDois.removeEventListener("click", trocarDiscos)
        torrePaiTres.removeEventListener("click", trocarDiscos)
    }
}

//FUNÇÃO DE TROCAR DISCOS
let isSelected = true;
let discoArmazenado = [];

function trocarDiscos(event) {
    if(isSelected && event.currentTarget.childElementCount !== 1) {
        isSelected = false
        discoArmazenado.push(event.currentTarget.lastElementChild)
        console.log('selecionei');
    } else if(!isSelected) {
        console.log(event.currentTarget.childElementCount);
        if(
            event.currentTarget.childElementCount === 1 ||
            event.currentTarget.lastElementChild.clientWidth > discoArmazenado[0].clientWidth
        ) {
            event.currentTarget.appendChild(discoArmazenado.pop())
            isSelected = true
        } else{
            isSelected = true
        }
    }
    isVictory()
}

//FUNÇÃO DE RESETAR O JOGO
function resetarJogo() {
    // document.location.reload(true)
    torrePaiUm.appendChild(discoUm)
    torrePaiUm.appendChild(discoDois)
    torrePaiUm.appendChild(discoTres)
    torrePaiUm.appendChild(discoQuatro)
}

//ATRIBUINDO EVENTOS DE CLIQUE
torrePaiUm.addEventListener('click', trocarDiscos)
torrePaiDois.addEventListener('click', trocarDiscos)
torrePaiTres.addEventListener('click', trocarDiscos)

button.addEventListener('click', resetarJogo)
