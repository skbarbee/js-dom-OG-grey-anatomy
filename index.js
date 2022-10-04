const cardArea = document.querySelector('#cardArea')


class Character {
    constructor(name, alive, nickname, speciality ){
        this.name = name;
        this.alive = alive;
        this.nickname = nickname;
        this.speciality = speciality;
    }
}

const callieTorres = new Character("Calliope Iphengenia Torres", true, ["Callie","Callie O'Malley", "Ortho Goddess","Dr.T"], "Orthopedic Surgeon" )
console.log(callieTorres)

// console.log (cardArea)
// const makeCards = ()=>{
//     for (let i=0; i<characters.length; i++){
//         //create a div
//         const playerCard = document.createElement('div')
//         //add class
//         playerCard.classList.add(characters[i])
//         playerCard.innerText = characters[i]
       

//         //add cards to exisiting div
//         cardArea.appendChild(playerCard)
//     }
    
// }
// document.addEventListener("DOMContentLoaded",()=>{
//     makeCards()
// })