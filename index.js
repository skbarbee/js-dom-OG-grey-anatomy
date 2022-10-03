const searchArea = document.querySelector("#search")
const playerCards = document.querySelector("#player-cards")
const characters 

const makeCards = ()=>{
    for (let i=0; i<7; i++){
        //create a div
        const playerCard = document.createElement('div')
        //add class
        playerCard.classList.add('playerCard')
        playerCards.appendChild(playerCard)
    }
}