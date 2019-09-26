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
rock_div.addEventListener('click', function() {
    console.log("hey, you clicked on rock");
})

paper_div.addEventListener('click', function() {
    console.log("hey, you clicked on paper");
})

scissors_div.addEventListener('click', function() {
    console.log("hey, you clicked on scissors");
})

