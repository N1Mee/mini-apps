let start = document.getElementById('start')
let game = document.getElementById('game')
let time = document.getElementById('time')
let timeh1 = document.getElementById('time-header')
let resulth1 = document.getElementById('result-header')
let result = document.getElementById('result')
let inputTime = document.getElementById('game-time')
let score = 0
let isGameActive

start.addEventListener('click', startGame)

function startGame(){
    score = 0
    isGameActive = true
    start.classList.add('hide')
    game.style.backgroundColor = 'white'
    timeh1.classList.remove('hide')
    resulth1.classList.add('hide')
    time.innerText = inputTime.value
    inputTime.setAttribute('disabled', 'disabled')

    let interval = setInterval(() => {
        let currentTime = +time.innerText
        if (currentTime <= 0) {
            clearInterval(interval);
            endGame()
        }
        else {
            currentTime = currentTime - 0.1
            time.innerText = currentTime.toFixed(1)
        }
     }, 100);

    renderBox()
}

function renderBox(){
    if (!isGameActive) {
        return;
        }
    game.innerHTML='';
    let randomSize = getRandom(30, 100)
    let maxDelta = 300 - randomSize
    let div = document.createElement('div')
    div.style.width = randomSize+'px';
    div.style.height = randomSize+'px';
    div.style.position = 'absolute'
    div.style.backgroundColor = 'black'
    div.style.top = getRandom(0, maxDelta)+'px'
    div.style.left = getRandom(0, maxDelta)+'px'
    div.style.cursor = 'pointer'
    div.classList.add('box')
    game.appendChild(div)
}


game.addEventListener('click', gameBoxClick)

function gameBoxClick(event){
    if (event.target.classList.contains('box')) {
        score++;
        renderBox()
    }    
}

function getRandom(min, max) {
    return (Math.floor(Math.random() * (max - min) + min)) 
  }

function endGame(){
    isGameActive = false;
    game.innerHTML='';
    start.classList.remove('hide')
    game.style.backgroundColor = '#CCCCCC'
    timeh1.classList.add('hide')
    resulth1.classList.remove('hide')
    inputTime.removeAttribute('disabled');
    result.innerText = score
}

inputTime.addEventListener('change', (event) => {
    time.innerText = inputTime.value
    timeh1.classList.remove('hide')
    resulth1.classList.add('hide')
})