let player = '';
let round = 1;
let scoreCard = [];
let playerPoints = 0;
let computerPoints = 0;

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
    if(round <= 5){
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
    
         // Determine the winner
            let result = '';
            let score = 0;
            if (playerChoice === computerChoice) {
                result = 'It\'s a tie!';
            } else if (
                (playerChoice === 'Rock' && computerChoice === 'Scissor') ||
                (playerChoice === 'Paper' && computerChoice === 'Rock') ||
                (playerChoice === 'Scissor' && computerChoice === 'Paper')
            ) {
                result = 'You win!';
                score = 1;
                playerPoints ++;
            } else {
                result = 'Computer wins!';
                computerPoints ++;
            }
    
            //Update UI
            addTableRow(round, playerChoice, computerChoice, result, score);
            round++;
        }
    }else{
        if(playerPoints > computerPoints){
            document.getElementById('winner-announcement').innerText= `Game over, ${player} Wins`;
        }else if(playerPoints < computerPoints){
            document.getElementById('winner-announcement').innerText= "Game over, Computer Wins";
        }else{
            document.getElementById('winner-announcement').innerText= "Game over, It's a Tie";
        }
    } 
}

function addTableRow(round, playerChoice, computerChoice, result, score) {
    const table = document.getElementById('score-table');

    const newRow = document.createElement('tr');

    const roundCell = document.createElement('td');
    roundCell.textContent = round;
    newRow.appendChild(roundCell);

    const playerChoiceCell = document.createElement('td');
    playerChoiceCell.textContent = playerChoice;
    newRow.appendChild(playerChoiceCell);

    const computerChoiceCell = document.createElement('td');
    computerChoiceCell.textContent = computerChoice;
    newRow.appendChild(computerChoiceCell);

    const resultCell = document.createElement('td');
    resultCell.textContent = result;
    newRow.appendChild(resultCell);

    const scoreCell = document.createElement('td');
    scoreCell.textContent = score;
    newRow.appendChild(scoreCell);

    table.appendChild(newRow);
}
