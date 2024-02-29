const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector("#machine-scores")
const buttonYour = document.querySelector(".button-your span")
const buttonMachine = document.querySelector(".button-machine span")

let humanScoreNumber = 0
let machineScoreNumber = 0

const PlayHuman = (humanChoice) => {
    const machineChoice = PlayMachine()
    PlayTheGame(humanChoice, machineChoice)

    // Atualiza os emojis escolhidos
    buttonYour.innerHTML = getEmoji(humanChoice)
    buttonMachine.innerHTML = getEmoji(machineChoice)
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
        (human === 'rock' && machine === 'scissors')) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = 'Você ganhou! 🥳'
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Você perdeu! 😢'
    }
}

// Função auxiliar para obter o emoji correspondente à escolha
const getEmoji = (choice) => {
    switch (choice) {
        case 'rock':
            return '&#x1F44A';
        case 'paper':
            return '&#x270B';
        case 'scissors':
            return '&#x270C';
        default:
            return '';
    }
}