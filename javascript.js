
/*



returns a random floating point number between 0 and 1 (1 not included)
multiplying this by 3, returns a floating point number between 0 and 3 (3 not included)
round down the number to the nearest Integer
Add one, to to able to include 3.
returns 1, 2 or 3
transform the value of 1 into rock
transform the value of 2 into paper
transform the value of 3 into scissors
function returns rock, paper or scissors.

*/
function getComputerChoice() {
  let result = Math.floor(Math.random()*3)+1;
    let a;
    switch (result){
        case 1:
        a = "Rock";
        break;
        case 2:
        a = "Paper";
        break;
        case 3:
        a = "Scissors";
        break;
    }
    return result;
}


const container = document.createElement("div");
const body = document.querySelector("body");
const btnRock = document.createElement("button");
btnRock.textContent = "Rock button";
const btnPaper = document.createElement("button");
btnPaper.textContent = "Paper button";
const btnScissors = document.createElement("button");
btnScissors.textContent = "Scissors button";
container.appendChild(btnRock); 
container.appendChild(btnPaper); 
container.appendChild(btnScissors); 
body.appendChild(container);
let a = getComputerChoice;
//let b = getHumanChoice;
const matchResult= document.createElement("div");
body.appendChild(matchResult);
let roundCount = 0;
let humanScore = 0;
let computerScore=0;
let scoreboard = document.createElement("div");
body.appendChild(scoreboard);
const finalResult = document.createElement("div");
const roundText = document.createElement("div");
roundText.textContent = `Round ${roundCount+1}!`;
body.appendChild(roundText);
body.appendChild(finalResult);


function playRound(b){

    roundCount++;
    roundText.textContent = `Round ${roundCount+1}!`;

    a = getComputerChoice();

    if( a==1 && b==2){
    humanScore++;
    matchResult.textContent = "you win. paper beats rock.";
    }else if (a==1 && b==3){
    computerScore++;
    matchResult.textContent = "you lose. rock beats scissors.";
    } else if (a==2 && b==1){
    computerScore=computerScore+1;
    matchResult.textContent = "you lose. paper beats rock.";
    }else if (a==2 && b==3){
    humanScore++;
    matchResult.textContent = "you win. Scissors beats paper.";
    }else if (a==3 && b==1){
    humanScore++;
    matchResult.textContent = "You win. Rock beats scissors.";
    }else if(a==3 && b==2){
    computerScore++;
    matchResult.textContent = "You lose. Scissors beats paper.";
    }else if (a == b){
    matchResult.textContent = "Draw! you both showed the same thing!";
    }

    scoreboard.textContent=`The Computer scored ${computerScore}
     and you've got ${+humanScore}.`;
  





finalResult.textContent="Who is gonna be the Winner?";

if(computerScore==5){
    finalResult.textContent="You lose!";
    btnRock.remove();
    btnPaper.remove();
    btnScissors.remove();
    roundText.remove();
    matchResult.remove();
} else if (humanScore == 5){
    finalResult.textContent="You win!!";
    btnRock.remove();
    btnPaper.remove();
    btnScissors.remove();
    roundText.remove();
    matchResult.remove();
    }
    }    

btnRock.addEventListener("click", () => playRound(1));
btnPaper.addEventListener("click", () => playRound(2));
btnScissors.addEventListener("click", () => playRound(3));