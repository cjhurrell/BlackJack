let dealerHandValue = 0;
let playerHandValue = 0;

let dealerHand = [];
let playerHand = [];

let deck = [createDeck()]


function createDeck() {
    const suits = ['H', 'D', 'C', 'S'];
    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    let deck = [];
    
    for (let suit of suits) {
        for (let value of values) {
            deck.push({ suit: suit, value: value });
        }
    }
    
    return deck;
}

createDeck()

console.log(deck)
