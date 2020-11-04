// Rock Paper Scissors
let sample1;
let shapes = ["rock", "paper", "scissors"];

document.querySelector("form").addEventListener("submit", function(e){
    // Prevents form from submitting
    e.preventDefault();
    sample1 = document.getElementById("shapeAnswer").value;
    
    console.log("Your shape: " + sample1);
    
    function generateNum(){
        return Math.floor(Math.random() * 3) + 1;
    }
    
    function generateShape(i){
        switch(i){
            case 1:
                return "rock";
                break;
                
            case 2:
                return "paper";
                break;
                
            default:
                return "scissors"
                break;
        }
    }
    
    function startGame(x){
        if(x == "rock" && sample1 == "paper"){
            return "Computer decided a shape: " + x + ". You won";
        } else if(x == "paper" && sample1 == "scissors"){
            return "Computer decided a shape: " + x + ". You won";
        } else if(x == "scissors" && sample1 == "rock") {
            return "Computer decided a shape: " + x + ". You won";
        } else if(x == sample1) {
            return "Computer decided a shape: " + x + ". It's a draw";
        } else if(shapes.indexOf(sample1) > -1){
            return "Computer decided a shape: " + x + ". Computer won";
        } else {
            return "Please choose one of the following: Rock, Paper, or Scissors";
        }
    }
    
    console.log(startGame(generateShape(generateNum())));
});