function generateRandomChoice() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;
    switch (randomChoice) {
      case 1:
        return "rock";
      case 2:
        return "paper";
      case 3:
        return "scissor";
    }
  }
  
  function validateNumberInput(input) {
    return !isNaN(input) && input > 0;
  }
  
  function getNumberOfTimesToPlay() {
    let numberOfTimesToPlay = prompt("How many times do you want to play?");
    while (!validateNumberInput(numberOfTimesToPlay)) {
      numberOfTimesToPlay = prompt("Please enter a valid number greater than 0.");
    }
    return parseInt(numberOfTimesToPlay);
  }
  
  function validatePlayerChoice(input) {
    const validChoices = ["rock", "paper", "scissor"];
    return validChoices.includes(input.toLowerCase());
  }
  
  function getPlayerChoice() {
    let playerChoice = prompt("Choose rock, paper, or scissor").toLowerCase();
    while (!validatePlayerChoice(playerChoice)) {
      playerChoice = prompt("Invalid choice! Please choose rock, paper, or scissor.");
    }
    return playerChoice;
  }
  
  function playGame() {
    let numberOfTimesToPlay = getNumberOfTimesToPlay();
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < numberOfTimesToPlay; i++) {
      let playerChoice = getPlayerChoice();
      let computerChoice = generateRandomChoice();
  
      console.log(`Player chose ${playerChoice} and the computer chose ${computerChoice}`);
  
      if (playerChoice === computerChoice) {
        console.log("It was a draw");
      } else if (
        (playerChoice === "rock" && computerChoice === "scissor") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissor" && computerChoice === "paper")
      ) {
        console.log("You won");
        playerScore++;
      } else {
        console.log("You lost");
        computerScore++;
      }
    }
  
    if (playerScore > computerScore) {
      console.log(`${playerScore} to ${computerScore} You won the game`);
    } else if (playerScore < computerScore) {
      console.log(`${computerScore} to ${playerScore} You lost the game`);
    } else {
      console.log("It was a draw");
    }
  }
  
  playGame();

