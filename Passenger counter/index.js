let count = 0
saveEl = document.getElementById("save-el")
countEl = document.getElementById("count-el")

function increment(){
    count += 1
    countEl.innerText = count
}

function decrement(){
    count -= 1
    document.getElementById("count-el").innerText = count
}

function save(){
    let countString = count + " - "
    saveEl.innerHTML += countString
    count = 0
    countEl.innerText = count
}
