
let suites = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];

let values = ['Ace', 'King', 'Queen', 'Jack',
              'One','Two','Three','Four','Five','Six','Seven',
              'Eight','Nine','Ten'
  ];

  let deck = createDeck();


let playerCards = [ getNextCard(), getNextCard()];
console.log("Welcome to blackjack game.");
console.log(" "+   playerCards[0]);
console.log(" "+   playerCards[1]);

function getNextCard(){
  return deck.shift();
}

function createDeck(){
let deck = [];

  for(let i=0; i< suites.length; i++){
    for(let j=0; j < values.length; j++){
      //console.log(values[j] + ' of '+ suites[i]);
      deck.push(values[j] + ' of '+ suites[i]);
    }
  }
  console.log(deck);
  return deck;
}