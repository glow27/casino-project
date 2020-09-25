
let point = 0;
let userScore = 0;

let dice1 = 0;
let dice2 = 0;

Math.floor(Math.random() * (6 - 1 + 1) + 1);

dice1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
dice2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);

userScore = dice1 + dice2;

if (userScore === 7 || userScore === 11) return 'user won!';
if (userScore === 2 || userScore === 3 || userScore === 12) return 'user lost!';

point = userScore;

dice1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
dice2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);

userScore = dice1 + dice2;

if (userScore === point) return 'user won!';
if (userScore === 7) return 'user lost!';
