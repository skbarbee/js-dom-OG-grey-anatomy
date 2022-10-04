const cardArea = document.querySelector('#cardArea')


class Character {
    constructor(name, alive, nickname, speciality,imgSrc){
        this.name = name;
        this.alive = alive;
        this.nickname = nickname;
        this.speciality = speciality;
        this.imgSrc = imgSrc
    }

        makeCard () {
            //create card border
            console.log("this worked")
            const card = document.createElement('div')
            card.classList.add('card')
            card.innerHTML = `<h4><b>${this.name}</b></h4>`
            const picture = document.createElement('div')
            picture.classList.add("picture")
            picture.innerHTML = `<img src="${this.imgSrc}" alt="picture of ${this.name}" style="width:100%">`
            const container = document.createElement('div')
            container.classList.add("container")
            container.innerHTML = `<button type="button">Bio</button> <button type="button">Status</button>`
            cardArea.appendChild(card)
            card.appendChild(picture)
            card.appendChild(container)
        }
     
       
}



const callieTorres = new Character("Calliope Iphengenia Torres", true, ["Callie","Callie O'Malley", "Ortho Goddess","Dr.T"], "Orthopedic Surgeon","data:image/jpeg;base64,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")
callieTorres.makeCard()
const meredithGrey = new Character("Meredith Gray", true, ["Chief of Surgery","Mer","Big Grey", "Our Lady of General Surgery","Mer-Der"], "General Surgery" )
meredithGrey.makeCard()
const alexKarev = new Character("Alexander Michael Karev", true, ["Alex","Dr. Hottie", "Boy Wonder","Dr. Doucheface"], "Pediatric Surgery" )
alexKarev.makeCard()
const cristinaYang = new Character("Cristina Yang", true, ["Cristine","Twisted Sister", "Single Malt Scotch","Cardio God"], "Cardiothoracic Surgery" )
cristinaYang.makeCard()
const derekShepherd = new Character("Derek Christopher Shepherd", false, ["McDreamy","Great God of Neurosurgery", "McAss","Mer-Der"], "NeuroSurgery" )
derekShepherd.makeCard()
const markSloan = new Character("Mark Everett Sloan", false, ["McSteamy","Super famous plastics guy", "Pastics Posse","Chief Sloan"], "Plastic Surgery" )
markSloan.makeCard()
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