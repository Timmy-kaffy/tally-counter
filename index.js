// //camelCase
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el") //passing in arguments

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

//creating a function for save and make it responsive    
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr //textContent shows all hidden text while innerText only shows human-readable element.

    //to set the counter back to zero after saving
    count = 0
    countEl.textContent = count

    console.log(count) //this will show the output on console
}

 





