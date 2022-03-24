function yourName() {
  let name = prompt("What is your name?");
  document.write("Nice to meet you, " + name);
}

function guessNumber() {
  let answer;
  let guesses = 0;

  do {
    guesses++;
    answer = prompt("Guess a number between 1 and 10");
  } while (parseInt(answer) !== 7)

  if (parseInt(answer) === 7) {
    document.write("It took you " + guesses + " times to guess my number")
  }

}

function rating() {
  let output = '';
  let rating = prompt("Scale of 1-5 how happy are you?");

  for (let i = 0; i < rating; i++) {
    output += "<img src='images/star.png' />";
  }

  document.write(output);

}

// rating = 3
// output = ''
// i = 0
// output = '<img>'

// i = 1
// output = '<img>' + '<img>'
// i = 2

// output = '<img><img>' = '<img>'
// i = 3


// Mac:  cmd + /
// PC:   control + /
// De-Indent: shift + tab
