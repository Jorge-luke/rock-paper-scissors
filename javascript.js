
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

    /*
    console.log("computer choice is "+result+", "+a);
    */


    return result;
}


function getHumanChoice() {
    
    let result = prompt('Type "Rock", "Paper" or "Scissors" and press ENTER: ');

    let lowerResult = result.toLowerCase();
    console.log("your choice was "+lowerResult);

    let a;
    switch(lowerResult){
        case "rock":
        a = 1;
        break;

        case "paper":
        a=2;
        break;

        case "scissors":
        a = 3;
        break;

        default:
        a = 4;
        break;
    }
    return(a);
}


let a = getComputerChoice;
let b = getHumanChoice;


let humanScore = 0;
let computerScore=0;


function playRound(){

a = getComputerChoice();
b = getHumanChoice();
   
        if( a==1 && b==2){
        humanScore = humanScore + 1;
        console.log("you win. paper beats rock.");
        }else if (a==1 && b==3){
        computerScore = computerScore+1;
        console.log("you lose. rock beats scissors.");
        } else if (a==2 && b==1){
        computerScore=computerScore+1;
        console.log("you lose. paper beats rock.");
        }else if (a==2 && b==3){
        humanScore=humanScore+1;
        console.log("you win. Scissors beats paper.");
        }else if (a==3 && b==1){
        humanScore=humanScore+1;
        console.log("You win. Rock beats scissors.");
        }else if(a==3 && b==2){
        computerScore=computerScore+1;
        console.log("You lose. Scissors beats paper.");
        }else if (a == b){
        console.log("Draw! you both showed the same thing!");
        }
    }
    
playRound();
playRound();
playRound();
playRound();
playRound();




console.log("Computer scored "+computerScore+" and you've got "+humanScore);

if(computerScore>humanScore){
    console.log("You lose!");
} else if (computerScore<humanScore){
    console.log("You win!!");
}else{
    console.log("Nobody Won!");
}


