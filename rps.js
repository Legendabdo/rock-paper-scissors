

function getHumanChoice (a , b ,c) { 
     let input = prompt("enter your choice  : ") ;
     if (input == a) return a;
    else if (input == b) return b;
    else if (input == c) return c;
    const clean = input.toLowerCase(); 

}


function getComputerChoice (rock , paper , scissors) {
    const m = Math.random() ;
    
    if (m < 1/3) 
        return rock ;
    else if (m < 2/3) 
        return paper ;
    else return scissors ;
}

function playGame() {

let humanscore = 0;
let computerscore = 0;



function playRound(computerChoice,humanChoice) {
console.log("computer chose : " +computerChoice );    
if (computerChoice===humanChoice)
    console.log("it's a tie for this round !")

else if (computerChoice==="paper" && humanChoice==="rock" ){
    console.log( `computer wins this round ! , computer score : ${++computerscore}`);
     }
else if(computerChoice==="rock" && (humanChoice==="paper"))
    { console.log( `human wins this round ! , human score : ${++humanscore}`);
}
else if (computerChoice==="rock" && humanChoice==="scissors" )
    {console.log( `computer wins this round ! , computer score : ${++computerscore}`);
     }
else if(computerChoice==="scissors" && humanChoice==="rock")
    {console.log( `human wins this round ! , human score : ${++humanscore}`);}
else if(computerChoice==="paper" && humanChoice ==="scissors" )
    console.log( `human wins this round ! ,human score : ${++humanscore}`);
else if (computerChoice==="scissors" && humanChoice==="paper")
     console.log( `computer wins this round ! ,computer score : ${++computerscore}`);

}        
const humanselection1 = getHumanChoice("rock" , "paper" ,"scissors" );
const computerselection1 = getComputerChoice("rock", "paper","scissors");

playRound(computerselection1 , humanselection1);

const humanselection2 = getHumanChoice("rock" , "paper" ,"scissors" );
const computerselection2 = getComputerChoice("rock", "paper","scissors");

playRound(computerselection2 , humanselection2);

const humanselection3 = getHumanChoice("rock" , "paper" ,"scissors" );
const computerselection3 = getComputerChoice("rock", "paper","scissors");

playRound(computerselection3 , humanselection3);

const humanselection4 = getHumanChoice("rock" , "paper" ,"scissors" );
const computerselection4 = getComputerChoice("rock", "paper","scissors");

playRound(computerselection4 , humanselection4);

const humanselection5 = getHumanChoice("rock" , "paper" ,"scissors" );
const computerselection5 = getComputerChoice("rock", "paper","scissors");

playRound(computerselection5 , humanselection5);

if (humanscore > computerscore)
    console.log(`human score : ${humanscore} , computer score : ${computerscore} , human wins!`);
else if(computerscore>humanscore)
    console.log(`human score : ${humanscore} , computer score : ${computerscore} , computer wins!`);
    else console.log(`human score : ${humanscore} , computer score : ${computerscore} , it's a tie !`)

 
}


playGame()


