var fs = require('fs');

var greetings = []

fs.readFile('greetings.txt', (error, data) => {
  if (error) {
    return console.error(error);
  }
  greetings = data.toString().split("\r\n");
});

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question("What is your name?\n", name => {
  console.log(`\n${greetings[Math.floor(Math.random() * greetings.length)]} ${name}`);
  readline.close();
})