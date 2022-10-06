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
        picture.innerHTML = `<img src="${this.imgSrc}" alt="picture of ${this.name}" >`
        const container = document.createElement('div')
        container.classList.add("container")
        const bioButton = document.createElement("button")
        //create bio div
        const bio = document.createElement('div')
        bio.innerText=`${this.name} specaility is ${this.speciality}. Their nicknames are ${this.nickname}`
        
        bioButton.innerHTML = `<button onclick = "bioDiv()" class = "bio" type="button"> Bio </button>`
        const statusButton = document.createElement("button")
        statusButton.innerHTML = `<button class= "status" type="button">Status</button>`
        statusButton.addEventListener('click',()=>{
            console.log(`${this.name}'s status button works`)
        })
        
        container.appendChild(bioButton)
        container.appendChild(statusButton)
        cardArea.appendChild(card)
        card.appendChild(picture)
        card.appendChild(container)
        card.appendChild(bio)
        }
       
        
        
        
    //    bioButton (){
    //        let button = document.querySelectorAll('.bio')
    //        //console.log(button)
    //        this.button.addEventListener("click", function (){
    //         console.log("it worked")
    //        })
    
           
        
      
        
       
       
}



const callieTorres = new Character("Calliope Iphengenia Torres", true, ["Callie","Callie O'Malley", "Ortho Goddess","Dr.T"], "Orthopedic Surgeon","callieTorres.jpeg")

callieTorres.makeCard()

const meredithGrey = new Character("Meredith Gray", true, ["Chief of Surgery","Mer","Big Grey", "Our Lady of General Surgery","Mer-Der"], "General Surgery","meredithGray.jpeg" )
meredithGrey.makeCard()
const alexKarev = new Character("Alexander Michael Karev", true, ["Alex","Dr. Hottie", "Boy Wonder","Dr. Doucheface"], "Pediatric Surgery","alexKarev.jpeg" )
alexKarev.makeCard()
const cristinaYang = new Character("Cristina Yang", true, ["Cristine","Twisted Sister", "Single Malt Scotch","Cardio God"], "Cardiothoracic Surgery","cristinaYang.jpeg" )
cristinaYang.makeCard()
const derekShepherd = new Character("Derek Christopher Shepherd", false, ["McDreamy","Great God of Neurosurgery", "McAss","Mer-Der"], "NeuroSurgery","derekShepherd.jpeg" )
derekShepherd.makeCard()
const markSloan = new Character("Mark Everett Sloan", false, ["McSteamy","Super famous plastics guy", "Pastics Posse","Chief Sloan"], "Plastic Surgery","markSloan.jpeg" )
markSloan.makeCard()

const bioDiv = ()=> {
    const bio = document.querySelectorAll(".bio")
    if (bio.style.display === "none") {
      bio.style.display = "flex";
      console.log("show bio")
    } else {
      bio.style.display = "none";
      console.log('hide bio')
    }
  }
document.addEventListener('DOMContentLoaded', bioDiv())
// const cardAreaListener = cardArea.addEventListener('click', (e)=> {
//    e.target.id
// })