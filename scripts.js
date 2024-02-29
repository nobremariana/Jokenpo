const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector("#machine-scores")
const ButtonYour= document.querySelector(".button-your")
const Buttonmachine= document.querySelector(".button-machine")

let humanScoreNumber = 0
let machineScoreNumber = 0


const PlayHuman = (humanChoice) => {
    PlayTheGame(humanChoice, PlayMachine())
}

const PlayMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const PlayTheGame = (human, machine) => {
    console.log('Humano:' + human + 'Maquina:' + machine)

    if (human === machine) {
        result.innerHTML = "Deu empate 😐"
    } else if ((human === 'paper' && machine === 'rock') ||
        (human === 'scissors' && machine === 'paper') ||
        (human === 'paper' && machine === 'rock')) {
           
            humanScoreNumber++
           humanScore.innerHTML = humanScoreNumber
            result.innerHTML = 'Você ganhou! 🥳'
    } else{
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Você perdeu! 😢'
    }
}