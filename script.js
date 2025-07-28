const appData = {
    secretNumber: 0,

    start() {
        this.secretNumber = Math.floor(Math.random() * 100) + 1;
        this.asking();
        this.logger();
    },

    asking() {
        let userInput = prompt("Угадай число от 1 до 100");

        if (userInput === null) {
            alert("Игра окончена");
            return;
        }

        if (isNaN(userInput) || userInput.trim() === "") {
            alert("Введи число!");
            this.asking();
            return;
        }

        userInput = Number(userInput);

        if (userInput > this.secretNumber) {
            alert("Загаданное число меньше");
            this.asking();
        } else if (userInput < this.secretNumber) {
            alert("Загаданное число больше");
            this.asking();
        } else {
            alert("Поздравляю, Вы угадали!!!");
        }
    },

    logger() {
        console.log("=== Информация об объекте appData ===");
        for (let key in this) {
            if (typeof this[key] === 'function') {
                console.log(`Метод: ${key}`);
            } else {
                console.log(`Свойство: ${key} = ${this[key]}`);
            }
        }
        console.log("=== Конец информации ===");
    }
};

appData.start();