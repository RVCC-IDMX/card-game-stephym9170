/* app.js */

import Deck from './deck.js'
import { select, listen } from './util';
import './style.css';

const computerCardSlot = document.select('.computer-card-slot')
const computerDeck = document.select('.computer-deck')
const text = document.select('.text')

let inRound = false

document.listen('click', () => {
  if (inRound) {
    cleanBeforeRound()
  } else{
    flipCards()
  }
})

startGame()
function startGame() {
const deck = new Deck()
deck.shuffle()

cleanBeforeRound()

}
function cleanBeforeRound() {
  inRound = false
computerCardSlot.innerHTML = ''
text.innerText = ''

updateDeckCount()
if (isRoundWinner) {
  text.innerText = 'Win'
  computerDeck.push(computerCard)
} else {
  text.innerText = 'Lose'
}
}
function flipCards(){
  inRound = true

  const computerCard = computerDeck.pop()
  computerCardSlot.appendChild(computerCard.getHTML())

updateDeckCount()
}

function updateDeckCount() {
  computerDeck.innerText = computerDeck.numberofCards
}
function isRoundWinner(){
  if (isRoundWinner){

  }
}

console.info(computerCard)
