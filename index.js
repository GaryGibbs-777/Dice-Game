document.querySelector("button").addEventListener("click", diceRoll);

function diceRoll() {
// Variables for rolling dice
var randomNum1 = Math.random() * 6;
var randomNum2 = Math.random() * 6;

// Making variables display random whole numbers from 1 to 6
randomNum1 = Math.ceil(randomNum1);
randomNum2 = Math.ceil(randomNum2);

//Displays the dice roll everytime the browser is refreshed
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNum1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNum2 + ".png");




// Displays a message depending if player one or player two wins, and a message for a draw
if (randomNum2 > randomNum1) {
   document.querySelector(".winner").innerHTML = "Player Two Wins! 🏆";
} 
else if (randomNum1 > randomNum2) {
    document.querySelector(".winner").innerHTML = "Player One Wins! 🏆";
} else {
    document.querySelector(".winner").innerHTML = "It's a Draw! You both win 🏆";
}

    }