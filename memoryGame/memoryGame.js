const cardArray = [
    {
        name: 'fries',
        img: '../memoryGame/Images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: '../memoryGame/Images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: '../memoryGame/Images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: '../memoryGame/Images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: '../memoryGame/Images/milkshake.png',
    },
    {
        name: 'pizza',
        img: '../memoryGame/Images/pizza.png',
    },
    {
        name: 'fries',
        img: '../memoryGame/Images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: '../memoryGame/Images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: '../memoryGame/Images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: '../memoryGame/Images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: '../memoryGame/Images/milkshake.png',
    },
    {
        name: 'pizza',
        img: '../memoryGame/Images/pizza.png',
    },
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds  = []
const cardsWon  = []

function createBoard () {
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', '../memoryGame/Images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', '../memoryGame/Images/blank.png')
        cards[optionTwoId].setAttribute('src', '../memoryGame/Images/blank.png')
        alert('You have clicked the same image!')
    }else if (cardsChosen[0] === cardsChosen[1]){
        alert('You found a match')
        cards[optionOneId].setAttribute('src', '../memoryGame/Images/white.png')
        cards[optionTwoId].setAttribute('src', '../memoryGame/Images/white.png')
        cards[optionOneId].removeEventListener('click',flipCard)
        cards[optionTwoId].removeEventListener('click',flipCard)
        cardsWon.push(cardsChosen)
    }else {
        cards[optionOneId].setAttribute('src', '../memoryGame/Images/blank.png')
        cards[optionTwoId].setAttribute('src', '../memoryGame/Images/blank.png')
        alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenIds = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'Congratulations'
    }
}

function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if (cardsChosen.length === 2){
        setTimeout( checkMatch, 100)
    }
}

createBoard()