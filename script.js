const options = document.getElementById("options");
const result = document.getElementById("result");
const playerChoice = document.getElementById("playerChoice");
const compChoice = document.getElementById("compChoice");
const pPoint = document.getElementById("playerPoints");
const cPoint = document.getElementById("compPoints");
const resetModal = document.getElementById("reset-modal");
const resetText = document.getElementById("reset-text");
const closeModal = document.getElementById("close");


let playerPoint = 0;
let compPoint = 0;
options.addEventListener("click", (event)=> 
{
    let x =  event.target.id;
    let y = compPlay();
    console.log(x,y);
    console.log(playRound(x,y));
    result.textContent = playRound(x,y);
    pPoint.textContent = playerPoint;
    cPoint.textContent = compPoint;
    changePlayerChoice(x);
    changeCompChoice(y);
    if(playerPoint == 10 || compPoint == 10){
        reset();
    }
});

function reset() {
    playerPoint = 0;
    compPoint = 0;
    pPoint.textContent = 0;
    cPoint.textContent = 0;
    result.textContent = "";
    resetText.textContent = 
    `Game Over! ${playerPoint>compPoint ? 'You won.' : 'You Lost.'}`;
    resetModal.style.display = "block";
}

closeModal.onclick = function() {
    resetModal.style.display = "none";
}

const compPlay = function() {
    let ran = parseInt(Math.random()*10);
    if (ran>=0 && ran<2){
        return 'rock';
    }else if (ran>=2 && ran<4){
        return 'paper';
    }else if (ran>=4 && ran<6){
        return 'scissors';
    }else if (ran>=6 && ran<8){
        return 'lizard';
    }else return 'spock';
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
        return "Tie match.";
    }
    else if (playerSelection=="rock" && computerSelection=="paper"){compPoint+=1;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection=="rock" && computerSelection=="spock"){compPoint+=1;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection=="paper" && computerSelection=="scissors"){compPoint+=1;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection=="paper" && computerSelection=="lizard"){compPoint+=1;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection=="scissors" && computerSelection=="rock"){compPoint+=1;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection=="scissors" && computerSelection=="spock"){compPoint+=1;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection=="spock" && computerSelection=="paper"){compPoint+=1;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection=="spock" && computerSelection=="lizard"){compPoint+=1;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection=="lizard" && computerSelection=="rock"){compPoint+=1;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection=="lizard" && computerSelection=="scissors"){compPoint+=1;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }else {
        playerPoint++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
};

function changePlayerChoice(choice) {
    const x = document.createElement("i");
    x.classList.add("far",`fa-hand-${choice}`,"fa-7x");
    playerChoice.replaceChild(x,playerChoice.childNodes[3]);
};
function changeCompChoice(choice) {
    const x = document.createElement("i");
    x.classList.add("far",`fa-hand-${choice}`,"fa-7x");
    compChoice.replaceChild(x,compChoice.childNodes[3]);
};

