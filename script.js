const sps = ["🌑","📄","✄"]
const comp = document.querySelector('.computer')
r = document.getElementById('result')
const playerScore = document.getElementById('playerScore')
const computerScore = document.getElementById('computerScore')
let player_score = 0
let computer_score = 0
function choose(ch){
    c = sps[Math.floor(Math.random()*sps.length)]
    comp.innerText = c
    if(c==='🌑' && ch==='✄'){
        r.innerText = 'computer won'
        computer_score++
    }
    if(c==='🌑' && ch==='📄'){
        r.innerText = 'you won'
        player_score++
    }
    if(c==='📄' && ch==='🌑'){
        r.innerText = 'computer won'
        computer_score++
    }
    if(c==='📄' && ch==='✄'){
        r.innerText = 'you won'
        player_score++
    }
    if(c==='✄' && ch==='🌑'){
        r.innerText = 'you won'
        player_score++
    }
    if(c==='✄' && ch==='📄'){
        r.innerText = 'computer won'
        computer_score++
    }
    if(c === ch){
        r.innerText = 'draw'
    }

    playerScore.innerText = `😎 ${player_score}`
    computerScore.innerText = `💻 ${computer_score}`
}