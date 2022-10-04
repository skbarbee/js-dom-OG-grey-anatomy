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

const meredithGrey = new Character("Meredith Gray", true, ["Chief of Surgery","Mer","Big Grey", "Our Lady of General Surgery","Mer-Der"], "General Surgery" )

const alexKarev = new Character("Alexander Michael Karev", true, ["Alex","Dr. Hottie", "Boy Wonder","Dr. Doucheface"], "Pediatric Surgery" )

const cristinaYang = new Character("Cristina Yang", true, ["Cristine","Twisted Sister", "Single Malt Scotch","Cardio God"], "Cardiothoracic Surgery" )

const derekShepherd = new Character("Derek Christopher Shepherd", false, ["McDreamy","Great God of Neurosurgery", "McAss","Mer-Der"], "NeuroSurgery" )

const markSloan = new Character("Mark Everett Sloan", false, ["McSteamy","Super famous plastics guy", "Pastics Posse","Chief Sloan"], "Plastic Surgery" )

console.log(meredithGrey,callieTorres,alexKarev,cristinaYang,derekShepherd,markSloan)
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