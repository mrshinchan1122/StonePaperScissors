let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreP = document.querySelector("#user-score");
const compScoreP = document.querySelector("#comp-score");

const genCompChoice = ()=> {
    const options =["rock", "paper", "scissors"];
    const randInx = Math.floor(Math.random() * 3);
    return options[randInx];
};

const drawGame = () => {
    msg.style.backgroundColor = "#081b31";
    msg.innerText = "Game was Draw. Play Again";
};

const showWinner = (userWin, userChoice, compChoice)=> {
    if(userWin){
        userScore++;
        userScoreP.innerText = userScore;
        msg.style.backgroundColor = "#3ca953";
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    }else {
        compScore++;
        compScoreP.innerText = compScore;
        msg.innerText = `You lost ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
    //Generate computwr choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper"? false : true;
        }else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors"?false:true;
        }else {
            //rock, paper
            userWin = compChoice === "rock"? false:true;
;        }
            showWinner(userWin, userChoice, compChoice);
    }
};


choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});