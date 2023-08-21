var randomNumber = Math.floor((Math.random() * 10) + 1);

const readline = require('readline');

let rl = readline.createInterface(process.stdin, process.stdout);

rl.question('What is your name? ', (name) => {
  console.log();
  console.log(`Hello ${name[0].toUpperCase() + name.slice(1)}, welcome to dVeek's Guess Game`);
  console.log();

  rl.question('Please guess a number: ', (myGuess) => {
    console.log();
    //console.log(`You guessed the number ${myGuess}`);
    console.log();
    if (myGuess == randomNumber) {
      console.log(`That was absolutely a good guess! Bravo!`);
    }
    else if (myGuess >= 1 && myGuess <= 10 && myGuess !== randomNumber) {
      console.log(`Arrgh..that was close!`);
    }
    else if (myGuess < 1) {
      console.log(`Oh no! That's too low!`);
    }
    else if (myGuess > 10) {
      console.log(`Oops! That was too high!`);
    }
    console.log();
    console.log(`Thank you for playing dVeek's Guess game! We do hope you try again!`);
    rl.close();
  });
});