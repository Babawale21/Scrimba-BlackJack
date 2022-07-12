cards = []
let sum = 0;
let hasBlackJack = false
let isAlive = false
let message = "";
let player = {
    name: "Walexy",
    chips: 145
}

let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.querySelector(".player-el")
playerEl.textContent = player.name + ": $"+ player.chips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    return randomNumber
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    
    if (sum <= 20) {
    message = "Do you want to draw a new card?"
    }
    else if (sum === 21) {
    message = " You've got a Blackjack!"
    hasBlackJack = true
    }else {
    message = "You're out of the game!"
    isAlive = false
    }

    messageEl.textContent = message
    sumEl.textContent = "Sum: "+ sum
    cardsEl.textContent = "Cards: "
    for (i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] +" "
    }
}
function newCard(){
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
    
}













