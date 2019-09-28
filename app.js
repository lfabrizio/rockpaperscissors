let userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score"); // to show its in a span tag
const computerScore_span = document.getElementById("computer-score"); // and DOM variable
const scoreBoard_div = document.querySelector(".score-board"); // to show its in a div tag
const result_p = document.querySelector(".result > p");
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

function convertToWord(letter) {
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

function win (userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML =  `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You Win! `;
    userChoice_div.classList.add('green-glow');
    setTimeout(function() { userChoice_div.classList.remove('green-glow') }, 1000);
}

function lose (userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML =  `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You Lost! `;
    userChoice_div.classList.add('red-glow');
    setTimeout(function() { userChoice_div.classList.remove('red-glow') }, 1000);
}

function draw (userChoice, compuerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML =  `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. Draw `;
    userChoice_div.classList.add('gray-glow');
    setTimeout(function() { userChoice_div.classList.remove('gray-glow') }, 1000);
}


function game(userChoice){
const computerChoice = getComputerChoice();
switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
    win(userChoice, computerChoice);
        break;
        case "rp":
        case "ps":
        case "sr":
    lose(userChoice, computerChoice);
        break;
        case "rr":
        case "pp":
        case "ss":
    draw(userChoice, computerChoice);
            break;
}

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