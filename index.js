const cardArea = document.querySelector('#cardArea')



class Character {
    constructor(name, alive, nickname, speciality,imgSrc){
        this.name = name;
        this.alive = alive;
        this.nickname = nickname;
        this.speciality = speciality;
        this.imgSrc = imgSrc
    }
       
}

function makeCard (character) {
    //create card 
   console.log("this worked")
   const card = document.createElement('div')
   card.classList.add('card')
   card.innerHTML = `<h4><b>${character.name}</b></h4>`
   const picture = document.createElement('div')
   picture.classList.add("picture")
   picture.innerHTML = `<img src="${character.imgSrc}" alt="picture of ${character.name}" >`
   const container = document.createElement('div')
   container.classList.add("container")
   const bioButton = document.createElement("button")
   bioButton.classList.add('bioButton')
   bioButton.innerText =  "Bio"
   const statusButton = document.createElement("button")
   statusButton.classList.add('statusButton')
   statusButton.innerText = "Status"

   //create bio div
   const bio = document.createElement('div')
   bio.style.visibility ="hidden"
   bio.innerText=`${character.name} speciality is ${character.speciality}. Their nicknames are ${character.nickname}`

  //create display and hide function 
   bioButton.addEventListener('click',()=>{
    console.log(`${character.name} bio button activated`)
    if (bio.style.visibility === "hidden") {
      bio.style.visibility = "visible"
    } else {
      bio.style.visibility = "hidden"
    }
  })
  //create status div
  const status = document.createElement('div')
   status.style.visibility ="hidden"
   status.innerText =`${character.name} is ${character.alive}.`

  //create display and hide function for status
  statusButton.addEventListener('click',()=>{
    console.log(`${character.name} bio button activated`)
    if (status.style.visibility === "hidden") {
      status.style.visibility = "visible"
    } else {
      status.style.visibility = "hidden"
    }
  })
   
   //add all elements to document
   container.appendChild(bioButton)
   container.appendChild(statusButton)
   cardArea.appendChild(card)
   card.appendChild(picture)
   card.appendChild(container)
   card.appendChild(bio)
   card.appendChild(status)
   }

const callieTorres = new Character("Calliope Iphengenia Torres", "alive", ["Callie","Callie O'Malley", "Ortho Goddess","Dr.T"], "Orthopedic Surgeon","callieTorres.jpeg")

makeCard(callieTorres)

const meredithGrey = new Character("Meredith Gray", "alive", ["Chief of Surgery","Mer","Big Grey", "Our Lady of General Surgery","Mer-Der"], "General Surgery","meredithGray.jpeg" )
makeCard(meredithGrey)

const alexKarev = new Character("Alexander Michael Karev", "alive", ["Alex","Dr. Hottie", "Boy Wonder","Dr. Doucheface"], "Pediatric Surgery","alexKarev.jpeg" )
makeCard(alexKarev)

const cristinaYang = new Character("Cristina Yang", "alive, but no longer working", ["Cristine","Twisted Sister", "Single Malt Scotch","Cardio God"], "Cardiothoracic Surgery","cristinaYang.jpeg" )
makeCard(cristinaYang)

const derekShepherd = new Character("Derek Christopher Shepherd", "deceased", ["McDreamy","Great God of Neurosurgery", "McAss","Mer-Der"], "NeuroSurgery","derekShepherd.jpeg" )
makeCard(derekShepherd)

const markSloan = new Character("Mark Everett Sloan", "deceased", ["McSteamy","Super famous plastics guy", "Pastics Posse","Chief Sloan"], "Plastic Surgery","markSloan.jpeg" )
makeCard(markSloan)




