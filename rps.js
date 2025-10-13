const resultdiv =document.querySelector('#result');
const scorediv =document.querySelector('#score');





function getComputerChoice (rock , paper , scissors) {
    const m = Math.random() ;
    
    if (m < 1/3) 
        return rock ;
    else if (m < 2/3) 
        return paper ;
    else return scissors ;
}
function playRound(computerChoice,humanChoice) {
  if (computerChoice === humanChoice) return "It's a tie!";
    else if (
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) return "Computer wins this round!";
    else return "You win this round!";

}   

let humanscore = 0;
let computerscore = 0;
const rps = document.querySelectorAll("button");

rps.forEach(button => {
    button.addEventListener('click', () => {
        const humanselection = button.textContent.toLowerCase();
        const computerselection = getComputerChoice("rock", "paper", "scissors");
        const result = playRound(computerselection, humanselection);

        // increment scores first
        if(result === "You win this round!") humanscore++;
        else if(result === "Computer wins this round!") computerscore++;

        // update displays
        scorediv.textContent = `Player: ${humanscore} | Computer: ${computerscore}`;
        resultdiv.textContent = `You chose ${humanselection}, computer chose ${computerselection}. ${result}`;

        // check for game winner
        if(humanscore === 5 || computerscore === 5){
            const winner = humanscore === 5 ? "You win the game!" : "Computer wins the game!";
            resultdiv.textContent = winner;

            // reset scores after a short delay
            setTimeout(() => {
                humanscore = 0;
                computerscore = 0;
                scorediv.textContent = `Player: ${humanscore} | Computer: ${computerscore}`;
                resultdiv.textContent = "";
            }, 2000);
        }
    });
});

