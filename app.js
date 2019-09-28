const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score"); // to show its in a span tag
const computerScore_span = document.getElementById("computer-score"); // and DOM variable
const scoreBoard_div = document.querySelector(".score-board"); // to show its in a div tag
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r"); // get the button rock
const paper_div = document.getElementById("p"); // get the button paper
const scissors_div = document.getElementById("s"); // get the button scissors
// now we have cached the DOM ( storing for future use)
// now what happenes when you click on them buttons


function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber];
}
function game(userChoice){
const computerChoice = getComputerChoice();

}



function main() {
rock_div.addEventListener('click', function() {
    Game("r");
})

paper_div.addEventListener('click', function() {
    game("p");
})

scissors_div.addEventListener('click', function() {
    game("s");
})
}
main();