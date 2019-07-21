
// DOM
let newGameButton = document.getElementById('new-game-button'),
  textArea = document.getElementById('text-area'),
  hitButton = document.getElementById('hit-button'),
  stayButton = document.getElementById('stay-button');

//textArea.innerText='Hello world!';
textArea.style.display = "none";

hitButton.style.display = "none";
stayButton.style.display = "none";

newGameButton.addEventListener('click', function () {
  textArea.style.display = "block";
  textArea.innerText = "Game Started";
  newGameButton.style.display = 'none';
  hitButton.style.display = 'inline';
  stayButton.style.display = 'inline';
});

let suites = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];

let values = ['Ace', 'King', 'Queen', 'Jack',
  'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven',
  'Eight', 'Nine', 'Ten'
];

let deck = createDeck();


let playerCards = [getCardString(getNextCard()),
getCardString(getNextCard())];
console.log("Welcome to blackjack game.");
console.log(" " + playerCards[0]);
console.log(" " + playerCards[1]);

function getNextCard() {
  return deck.shift();
}

function getCardString(card) {
  return card.value + ' of ' + card.suit;
}


let card = {
  suit: 'Hearts',
  value: 'Ace'
};

function createDeck() {
  let deck = [];

  for (let i = 0; i < suites.length; i++) {
    for (let j = 0; j < values.length; j++) {
      //console.log(values[j] + ' of '+ suites[i]);
      //deck.push(values[j] + ' of '+ suites[i]);
      let card = { suit: suites[i], value: values[j] };
      deck.push(card);
    }
  }
  console.log(deck);
  return deck;
}

