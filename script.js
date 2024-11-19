// okay so , no auto complete

// get user input
// generate computer input/choice -> connect them to values

//compare them
// make user score and computer score , and compare and then tell who won or draw

function getUserInput(usrInput) {
  usrInput = prompt("Choose: rock , paper , sicssor");
  return usrInput;
}

function generateComputerChoice() {
  pcInput = Math.floor(Math.random() * 3) + 1;
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

function round(usrInput, pcChoice) {
  let usrScore = 0;
  let pcScore = 0;
  for (let i = 1; i < 3; i++) {
    if (
      (usrInput.toLowerCase() == "rock" && pcChoice == "scissor") ||
      (usrInput.toLowerCase() == "paper" && pcChoice == "rock") ||
      (usrInput.toLowerCase() == "scissor" && pcChoice == "paper")
    ) {
      usrScore++;
    } else {
      pcScore++;
    }
    console.log(`Round ${i + 1}: User: ${usrInput}, PC: ${pcChoice}`);
    console.log(`Current Score: User ${usrScore} - PC ${pcScore}`);

    usrInput = getUserInput(); // for next round
    pcChoice = generateComputerChoice();
  }

  console.log("Final Score:");
  console.log(`User: ${usrScore} vs Pc: ${pcScore}`);
  if (usrScore > pcScore) {
    console.log("You Win");
  } else if (usrScore < pcScore) {
    console.log("Computer Wins");
  } else {
    console.log("Its a draw");
  }
}

function playGame() { // just a wrapper function cuz idk how to make it get first input
  const usrInput = getUserInput();
  const pcChoice = generateComputerChoice();
  round(usrInput, pcChoice);
}

playGame();
