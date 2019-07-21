
let suites = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];

let values = ['Ace', 'King', 'Queen', 'Jack',
              'One','Two','Three','Four','Five','Six','Seven',
              'Eight','Nine','Ten'
  ];

  let deck = [];

  for(let i=0; i< suites.length; i++){
    for(let j=0; j < values.length; j++){
      console.log(values[j] + ' of '+ suites[i]);
      deck.push(values[j] + ' of '+ suites[i]);
    }
  }

console.log(deck);

