
//document.getElementById("count-el").innerHTML = count
let count = 0
let countEl = document.getElementById("count-el")
countEl.innerHTML = count
function increment() {
    count += 1
    countEl.textContent = count
}

let saveEl = document.getElementById("save-el")

function save() {
    saveStr= count + " | " 
    saveEl.textContent += saveStr
    count = 0
    countEl.textContent = 0
}


function reset() {
    count = 0
    countEl.textContent = 0
}

// 1. Grab the save-el paragrah and store it in a variable called saveEl
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph