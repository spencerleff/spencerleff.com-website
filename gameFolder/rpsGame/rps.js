let userScore = 0;
let compScore = 0;
const rpsUserScore_span = document.getElementById("rpsUserScore");
const rpsCompScore_span = document.getElementById("rpsCompScore");
const rpsScoreboard_div = document.querySelector(".rpsScoreboard");
const rpsresult_div = document.querySelector(".rpsResult");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter == "r") return "Rock";
  else if (letter == "p") return "Paper";
  else if (letter == "s") return "Scissors";
}

function game(userChoice) {
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

function win(userChoice, computerChoice) {
  userScore++; 
  rpsUserScore_span.innerHTML = userScore;
  rpsCompScore_span.innterHTML = compScore;

  if (convertToWord(userChoice) == "Rock") {
    rpsresult_div.innerHTML = convertToWord(userChoice) + " crushes " + convertToWord(computerChoice) + ". You win!";
  }
  else if (convertToWord(userChoice) == "Paper") {
    rpsresult_div.innerHTML = convertToWord(userChoice) + " covers " + convertToWord(computerChoice) + ". You win!";
  }
  else if (convertToWord(userChoice) == "Scissors") {
    rpsresult_div.innerHTML = convertToWord(userChoice) + " cuts " + convertToWord(computerChoice) + ". You win!"
  }
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow') }, 500);

}

function lose(userChoice, computerChoice) {
  compScore++; 
  rpsUserScore_span.innerHTML = userScore;
  rpsCompScore_span.innerHTML = compScore;

  if (convertToWord(userChoice) == "Rock") {
    rpsresult_div.innerHTML = convertToWord(userChoice) + " is covered by " + convertToWord(computerChoice) + ". You lose!";
  }
  else if (convertToWord(userChoice) == "Paper") {
    rpsresult_div.innerHTML = convertToWord(userChoice) + " is cut by " + convertToWord(computerChoice) + ". You lose!";
  }
  else if (convertToWord(userChoice) == "Scissors") {
    rpsresult_div.innerHTML = convertToWord(userChoice) + " is crushed by " + convertToWord(computerChoice) + ". You lose!"
  }
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow') }, 500);

}

function draw(userChoice, computerChoice) {
  rpsUserScore_span.innerHTML = userScore;
  rpsCompScore_span.innerHTML = compScore;
  rpsresult_div.innerHTML = convertToWord(userChoice) + " ties " + convertToWord(computerChoice) + ". It's a draw!";
  document.getElementById(userChoice).classList.add('gray-glow');
  setTimeout(function() { document.getElementById(userChoice).classList.remove('gray-glow') }, 500);

}

function main() {
  rock_div.addEventListener('click', function() {
    game("r");
  })

  paper_div.addEventListener('click', function() {
    game("p");
  })

  scissors_div.addEventListener('click', function() {
    game("s");
  })
}

main();
