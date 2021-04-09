'use strict';

function guessRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 100 + 1);

    return function() {
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
            alert('Загаданное число меньше');
            game();
        } 
        else if (answer < randomNumber) {
            alert('Загаданное число больше');
            game();
        }
        else {
            alert('Поздравляю, Вы угадали!!!');
        }
    }
}

const game = guessRandomNumber();
game();
