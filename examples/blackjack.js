

let textArea=document.getElementById('text-area');
textArea.innerText='Hello world!';

let okButton=document.getElementById('ok-button');
okButton.innerText='Ok!';
okButton.addEventListener('click', function(){
    textArea.innerText="Button Clicked";
});

let suites = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];

let values = ['Ace', 'King', 'Queen', 'Jack',
              'One','Two','Three','Four','Five','Six','Seven',
              'Eight','Nine','Ten'
  ];

  let deck = createDeck();


let playerCards = [ getCardString(getNextCard()),
                    getCardString(getNextCard())];
console.log("Welcome to blackjack game.");
console.log(" "+   playerCards[0]);
console.log(" "+   playerCards[1]);

function getNextCard(){
  return deck.shift();
}

function getCardString(card){
  return card.value + ' of ' + card.suit;
}


let card = {
  suit: 'Hearts',
  value: 'Ace'
};

function createDeck(){
let deck = [];

  for(let i=0; i< suites.length; i++){
    for(let j=0; j < values.length; j++){
      //console.log(values[j] + ' of '+ suites[i]);
      //deck.push(values[j] + ' of '+ suites[i]);
      let card = { suit: suites[i], value: values[j]};
      deck.push(card);
    }
  }
  console.log(deck);
  return deck;
}

