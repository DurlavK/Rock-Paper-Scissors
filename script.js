const options = document.getElementById("options");
const result = document.getElementById("result");
const playerChoice = document.getElementById("playerChoice");
const compChoice = document.getElementById("compChoice");
const pPoint = document.getElementById("playerPoints");
const cPoint = document.getElementById("compPoints");
const resetModal = document.getElementById("reset-modal");
const resetText = document.getElementById("reset-text");
const closeModal = document.getElementById("close");
const rock = document.getElementById("rock");

let playerPoint = 0;
let compPoint = 0;

options.addEventListener("click", (event)=> 
{
    let x =  event.target.id;
    let y = compPlay();
    result.textContent = playRound(x,y);
    pPoint.textContent = playerPoint;
    cPoint.textContent = compPoint;
    changePlayerChoice(x);
    changeCompChoice(y);
    if(playerPoint == 5 || compPoint == 5){
        showResult();
    }
});

function showResult() {
    resetText.textContent = 
    `Game Over! ${ playerPoint>compPoint ? 'You Won.' : 'You Lost.'} Final Score ${playerPoint} - ${compPoint}.`;
    resetModal.style.display = "block";
}

closeModal.onclick = function() {
    playerPoint = 0;
    compPoint = 0;
    pPoint.textContent = 0;
    cPoint.textContent = 0;
    result.textContent = "";
    resetModal.style.display = "none";
}

const compPlay = function() {
    let ran = parseInt(Math.random()*5);
    if (ran>=0 && ran<1){
        return 'rock';
    }else if (ran>=1 && ran<2){
        return 'paper';
    }else if (ran>=2 && ran<3){
        return 'scissors';
    }else if (ran>=3 && ran<4){
        return 'lizard';
    }else return 'spock';
};

function changePlayerChoice(choice) {
    const x = document.createElement("i");
    x.classList.add("far",`fa-hand-${choice}`,"fa-7x");
    playerChoice.replaceChild(x,playerChoice.childNodes[1]);
    document.getElementById(choice).style.color = 'blue';
    setTimeout(()=>{document.getElementById(choice).style.color = '';},200);
};
function changeCompChoice(choice) {
    const x = document.createElement("i");
    x.classList.add("far",`fa-hand-${choice}`,"fa-7x");
    compChoice.replaceChild(x,compChoice.childNodes[1]);
    document.getElementById(choice).style.color = 'red';
    setTimeout(()=>{document.getElementById(choice).style.color = '';},200);
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
        return "Tie match.";
    }
    else if (playerSelection=="rock" && computerSelection=="paper"){
        compPoint+=1;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection=="rock" && computerSelection=="spock"){
        compPoint+=1;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection=="paper" && computerSelection=="scissors"){
        compPoint+=1;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection=="paper" && computerSelection=="lizard"){
        compPoint+=1;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection=="scissors" && computerSelection=="rock"){
        compPoint+=1;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection=="scissors" && computerSelection=="spock"){
        compPoint+=1;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection=="spock" && computerSelection=="paper"){
        compPoint+=1;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection=="spock" && computerSelection=="lizard"){
        compPoint+=1;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection=="lizard" && computerSelection=="rock"){
        compPoint+=1;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection=="lizard" && computerSelection=="scissors"){
        compPoint+=1;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }else {
        playerPoint++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
};