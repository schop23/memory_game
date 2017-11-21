console.log('Up and running!')

var cards = ['queen', 'queen', 'king', 'king']

var cardOne = cards[0]
var cardTwo = cards[2]

var cardsInPlay = []
cardsInPlay.push([0])
    console.log('User flipped ' + cardOne )
cardsInPlay.push([2]) 
    console.log('User flipped ' + cardTwo )
    //if (cardsInPlay.length === 2) {}
    if (cardsInPlay[0] === cardsInPlay[2]) {
        alert('You found a match!')
    }
        else {
            alert('Sorry, try again.')
        }
