'use strict';

function guessRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    let counter = 0;
    let tries = 10;

    return function() {
        if (counter === 10){
            confirm('Попытки закончились, хотите сыграть еще?');
        }


        let answer = prompt("Угадай число от 1 до 100");
        if (answer === null) {
            alert('Игра окончена');
            return;
        }
        if (isNaN(answer) || answer.trim() === '') {
            alert('Введите число!');
            game();
        } 
        else if (answer > randomNumber) {
            counter++;
            alert(`Загаданное число меньше, у вас осталось ${tries - counter} попыток`);
            game();
        } 
        else if (answer < randomNumber) {
            counter++;
            alert(`Загаданное число больше, у вас осталось ${tries - counter} попыток`);
            game();
        }
        else {
            let consent = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
            if (consent === true) {
                game();
            }
        }
    }
}

const game = guessRandomNumber();
game();
