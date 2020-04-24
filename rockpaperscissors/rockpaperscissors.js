let throws = ["rock", "paper", "scissors"]
let computerThrow = throws[Math.floor(Math.random() * 3)]

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`Play Rock,Paper,Scissors against AI! \nWhat's your throw?\n> `, (gameThrow) => {
    console.log(`You've thrown ${gameThrow.toLowerCase()}!`)
    setTimeout(function(){ console.log("Computer throws " + computerThrow + "!");
      setTimeout(function(){
        if (gameThrow.toLowerCase() === computerThrow) {
            console.log("The game is a draw!")
        } else if ((gameThrow.toLowerCase() === "rock") && (computerThrow === "scissors")) {
        console.log("Rock blunts scissors. \nYou win!")
        } else if ((gameThrow.toLowerCase() === "rock") && (computerThrow === "paper")) {
            console.log("Paper covers rock. \nYou lose!")
        } else if ((gameThrow.toLowerCase() === "scissors") && (computerThrow === "paper")) {
            console.log("Scissors cuts paper. \nYou win!")
        } else if ((gameThrow.toLowerCase() === "scissors") && (computerThrow === "rock")) {
            console.log("Rock blunts scissors. \nYou lose!")
        } else if ((gameThrow.toLowerCase() === "paper") && (computerThrow === "rock")) {
            console.log("Paper covers rock. \nYou win!")
        } else if ((gameThrow.toLowerCase() === "paper") && (computerThrow === "scissors")) {
            console.log("Scissors cuts paper. \nYou lose!")
        } 
      }, 2000)
    
    }, 2000);
    
    readline.close()
  })