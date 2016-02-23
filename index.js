// Libraries
var colors = require('colors/safe');

// Variables
var cardColorStringArray = ['red', 'red', 'blue', 'blue'],
    cardSuitNameStringArray = ['Hearts', 'Diamonds', 'Spades', 'Clubs'],
    cardTypeNameStringArray = ['Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace'],
    cardValueIntegerArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];

// Functions
// Chooses random card index from the deck
function chooseCard(deck) {
  return getRandomInteger(0, deck.length);
}
// Generates one card
function generateCard(cardColorString,
                      cardSuitNameString,
                      cardTypeNameString,
                      cardValueInteger)
{
  return {
    cardColorString: cardColorString,
    cardNameString: cardTypeNameString + ' of ' + cardSuitNameString,
    cardValueInteger: cardValueInteger
  };
}
// Generates deck
function generateDeck(cardColorStringArray,
                      cardSuitNameStringArray,
                      cardTypeNameStringArray,
                      cardValueIntegerArray)
{
  var cardNumber = 0,
      cardTypeLength = cardTypeNameStringArray.length,
      cardSuitLength = cardColorStringArray.length,
      deck = {};
  for (var cardTypeIndex = 0;
       cardTypeIndex < cardTypeLength;
       cardTypeIndex++)
    {
      for (var cardSuitIndex = 0;
           cardSuitIndex < cardSuitLength;
           cardNumber++, cardSuitIndex++)
      {
        deck[cardNumber] = generateCard(cardColorStringArray[cardSuitIndex],
                                        cardSuitNameStringArray[cardSuitIndex],
                                        cardTypeNameStringArray[cardTypeIndex],
                                        cardValueIntegerArray[cardTypeIndex]);
      }
    }
  deck.length = cardNumber;
  return deck;
}
// Gets random number from interval (doesn't include right border)
function getRandomInteger(min, max) {
  return Math.floor((Math.random() * (max - min))) + min;
}
// Logs card
function logCard(cardIndex, deck) {
  console.log(colors[deck[cardIndex].cardColorString](deck[cardIndex].cardNameString));
}

// Code
var deck = generateDeck(cardColorStringArray,
                        cardSuitNameStringArray,
                        cardTypeNameStringArray,
                        cardValueIntegerArray);
logCard(chooseCard(deck), deck);
