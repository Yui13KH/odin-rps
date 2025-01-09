function getUserInput() {
  const usrInput = prompt("Choose: rock, paper, scissor");
  return usrInput;
}

function generateComputerChoice() {
  const pcInput = Math.floor(Math.random() * 3) + 1;
  let pcChoice;
  switch (pcInput) {
    case 1:
      pcChoice = "rock";
      break;
    case 2:
      pcChoice = "paper";
      break;
    case 3:
      pcChoice = "scissor";
      break;
  }
  return pcChoice;
}

function round() {
  let usrScore = 0;
  let pcScore = 0;

  for (let i = 0; i < 3; i++) {
    const usrInput = getUserInput(); // Get user input in each round
    const pcChoice = generateComputerChoice(); // Generate computer choice in each round

    if (
      (usrInput.toLowerCase() === "rock" && pcChoice === "scissor") ||
      (usrInput.toLowerCase() === "paper" && pcChoice === "rock") ||
      (usrInput.toLowerCase() === "scissor" && pcChoice === "paper")
    ) {
      usrScore++;
      console.log(`You win this round!`);
    } else if (usrInput.toLowerCase() === pcChoice) {
      console.log(`It's a draw this round!`);
    } else {
      pcScore++;
      console.log(`Computer wins this round!`);
    }

    console.log(`Round ${i + 1}: User: ${usrInput}, PC: ${pcChoice}`);
    console.log(`Current Score: User ${usrScore} - PC ${pcScore}`);
  }

  console.log("Final Score:");
  console.log(`User: ${usrScore} vs PC: ${pcScore}`);
  if (usrScore > pcScore) {
    console.log("You Win!");
  } else if (usrScore < pcScore) {
    console.log("Computer Wins!");
  } else {
    console.log("It's a draw!");
  }
}

function playGame() {
  round();
}

playGame();
