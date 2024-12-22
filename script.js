function startGame() {
  const secretNumber = Math.floor(Math.random() * 100) + 1;

  function guessNumber() {
      let userInput = prompt("Угадай число от 1 до 100");

      if (userInput === null) {
          alert("Игра окончена");
          return;
      }

      if (isNaN(userInput) || userInput.trim() === "") {
          alert("Введи число!");
          guessNumber();
          return;
      }

      userInput = Number(userInput);

      if (userInput > secretNumber) {
          alert("Загаданное число меньше");
          guessNumber();
      } else if (userInput < secretNumber) {
          alert("Загаданное число больше");
          guessNumber();
      } else {
          alert("Поздравляю, Вы угадали!!!");
      }
  }

  guessNumber();
}

startGame();
