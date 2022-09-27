
// declare the choices
let options = ["rock", "paper", "scissors"];
// created a function that returns the prompt choose your weapon - Rock Paper or scissors
let playerSelection = function () {
  return prompt("Choose your weapon - Rock, Paper or Scissors?");
};
// created a function that return the length of the array randomly so either rock, paper or scissors can be thrown randomly
let computerSelection = function computerPlay() {
  return options[Math.floor(Math.random() * options.length)];
};
//Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock" ++
//make your function case insensitive (so users can input rock, ROCK, RocK or any other variation) ++


// created a function called playRound that takes in two parameters, player selecton and computer selection

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() == "rock") {
    if (computerSelection == "rock") {
      console.log('You draw!  You both chose "Rock"!');
      return;
    } else {
      if (computerSelection == "paper") {
        console.log('You lose!  "Paper" beats "Rock"!');
        return false;
      } else {
        if (computerSelection == "scissors") {
          console.log('You win!  "Rock" beats "Scissors"!');
          return true;
        }
      }
    }
  }
    // the toLowercase method is making the choices case sensitive so you can enter Rock or rock.
  if (playerSelection.toLowerCase() == "paper") {
    if (computerSelection == "paper") {
      console.log('You draw!  You both chose "Paper"!');
      return;
    } else {
      if (computerSelection == "rock") {
        console.log('You win!  "Paper" beats "Rock"!');
        return true;
      } else {
        if (computerSelection == "scissors") {
          console.log('You lose!  "Scissors" beats "Paper"!');
          return false;
        }
      }
    }
  }
  if (playerSelection.toLowerCase() == "scissors") {
    if (computerSelection == "scissors") {
      console.log('You draw!  You both chose "Scissors"!');
      return;
    } else {
      if (computerSelection == "rock") {
        console.log('You lose!  "Rock" beats "Scissors"!');
        return false;
      } else {
        if (computerSelection == "paper") {
          console.log('You win!  "Scissors" beats "Paper"!');
          return true;
        }
      }
    }
  } else {
    if (playerSelection.toLowerCase() != "rock" || "paper" || "scissors") {
      console.log(
        'This is not a choice.  Choose "Rock", "Paper" or "Scissors"!'
      );
    }
  }
}

//Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end. ++
//At this point you should still just be using console.log() to display the results of each round and the winner at the end.
function game() {
  
  let round = 1;
  let playerWins = 0;
  let computerWins = 0;
  let playRoundReturn = 0;
   // This while loop is running until the round reaches 5 and is called the playround function with playerSelection and computerSelection as arguments.
  while (round <= 5) {
    playRoundReturn = playRound(playerSelection(), computerSelection());
    // these if statements are basically created a scoreboard for each round
    if (playRoundReturn === true) {
      playerWins++;
    } else {
      if (playRoundReturn === false) {
        computerWins++;
      }
    }
    round++;
  }
  // these if statements are comparing the scores between the player and the computer
  if (playerWins < computerWins) {
    console.log("You lose! The Computer has beaten you at the game.");
  } else {
    if (playerWins > computerWins) {
      console.log("You win! You have beaten the computer at the game.");
    }
  }
}

// we are calling the game function so it can start.

game();
