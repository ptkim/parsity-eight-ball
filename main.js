//Step 1 defining a name that someone can enter their name
let userName = 'Don';

//Step 2 ternary expression based on name 
if (userName) {
    console.log(`Hello, ${userName}`);
} else {
    console.log('Hello');
}

//step 3 - create variable userQuestion. be a string that is the question
let userQuestion = 'Am I going to win?';

//step 4 - console log userQuestion, stating what was asked
console.log(userQuestion);

//step 5 - generate random number
let randomNumber = Math.floor(Math.random() * 8);

//step 6 - varible eightBall, empty string
let eightBall = '';

//step 7 = take randomNumber and assign to eightBall 

if (randomNumber === 0) {
    eightBall = 'It is certain';
} else if (randomNumber === 1) {
    eightBall = 'It is decidely so';
} else if (randomNumber === 2) {
    eightBall = 'Reply hazy try again';
} else if (randomNumber === 3) {
    eightBall = 'Cannot predict now';
} else if (randomNumber === 4) {
    eightBall = 'Do not count on it';
} else if (randomNumber === 5) {
    eightBall = 'My sources say no';
} else if (randomNumber === 6) {
    eightBall = 'Outlook not so good';
} else if (randomNumber === 7) {
    eightBall = 'Signs point to yes';
} else {
    eightBall = 'Try again';
}

//step 8
console.log (eightBall);
