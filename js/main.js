var arrQoutes = [
  '"Do not take life too seriously. You will not get out alive." <p>--Elbert Hubbard</p>',
  "Be yourself; everyone else is already taken <p>― Oscar Wilde</p>",
  "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best. <p> ― Marilyn Monroe </p>",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. <p> ― Albert Einstein </p>",
  "So many books, so little time. <p>― Frank Zappa</p>",
  "A room without books is like a body without a soul. <p>― Marcus Tullius Cicero </p>",
  "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind. <p>― Bernard M. Baruch</p>",
  "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth. <p>― William W. Purkey</p>",
  "You know you're in love when you can't fall asleep because reality is finally better than your dreams. <p>― Dr. Seuss</p>",
  "You only live once, but if you do it right, once is enough. <p>― Mae West</p>",
];
var lastTime = -1;
function changeQoutes() {
  var randIndx = Math.floor(Math.random() * arrQoutes.length);
  while (lastTime == randIndx) {
    randIndx = Math.floor(Math.random() * arrQoutes.length);
  }
  console.log(randIndx);
  document.getElementById("qoute").innerHTML = arrQoutes[randIndx];

  lastTime = randIndx;
}
