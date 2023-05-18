const trBox = document.querySelector('.trBox')
const arBox = document.querySelector('.arBox')
const showBtn = document.querySelector('.showBtn')
const sentBtn = document.querySelector('.sentBtn')





sentBtn.addEventListener('click', meaning)


function meaning() {
    arBox.style.display = "none"

    let random= Math.floor(Math.random()* sentTable.length)
    trBox.innerText = sentTable[random][1]
    arBox.innerText = sentTable[random][2]
    console.log(sentTable[random][1])
    sentTable.splice(random,1)
    console.log(sentTable)

    }
  
    
    showBtn.addEventListener('click', (()=> {
        arBox.style.display = "block"
    }))