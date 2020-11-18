let computerPlay = function() {
    let ran = parseInt(Math.random()*10);
    if (ran>=0 && ran<3){
        return 'rock';
    }else if (ran>=3 && ran<6){
        return 'paper';
    }else return 'scissors';
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
        return "Tie match.";
    }
    else if (playerSelection=="rock" && computerSelection=="paper"){
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection=="paper" && computerSelection=="scissors"){
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection=="scissors" && computerSelection=="rock"){
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }else {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
};

function game() {
    for(let i=0;i<5;i++){
        computerPlay();
        let computerSelection = computerPlay();
        let playerSelection = window.prompt("Enter your choice","rock").toLocaleLowerCase();
        console.log(playRound(playerSelection, computerSelection));
    }
};

