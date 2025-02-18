let player = '';
let round = 0;
let scoreCard = [];

function saveName() {
    player = document.getElementById('PlayerName').value;
    console.log(player);
    if (player.trim() === '') {
        alert('Please enter your name');
    } else {
        player = player.toUpperCase();
        document.getElementById('table-player-name').innerHTML = player;
    }
}

function getPlayerChoice() {
    // Get the selected radio button value
    const choices = document.getElementsByName('choice');
    let selectedChoice = '';

    for (let choice of choices) {
        if (choice.checked) {
            selectedChoice = choice.value;
            break;
        }
    }

    if (selectedChoice === '') {
        alert('Please select a choice');
        return null;
    }

    console.log('Player Choice:', selectedChoice);
    return selectedChoice;
}

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissor'];
    const randomNumber = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomNumber];

    console.log('Computer Choice:', computerChoice);
    return computerChoice;
}

function playGame() {
    if(player === '') {
        alert('Please enter your name');
        return;
    }else{
        const playerChoice = getPlayerChoice();
    if (!playerChoice) return; // If no choice is selected, stop execution

    const computerChoice = getComputerChoice();

    // Update UI
    document.getElementById('player-choice').innerText = playerChoice;
    document.getElementById('computer-choice').innerText = computerChoice;
    }
}
