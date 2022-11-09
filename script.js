const saveEl = document.getElementById("save-el")
const countEl = document.getElementById("count-el")
let count = 0
let topText = document.getElementById("top-text")
const container = document.getElementById("container")
const incrementBtn = document.getElementById('increment-btn')
const saveBtn = document.getElementById('save-btn')

console.log('det virker')

incrementBtn.addEventListener('click', increment())
saveBtn.addEventListener('click', save())

function increment() {
    count += 1
    countEl.textContent = count
    container.style.backgroundImage = "url(Beethoven.jpg)"
    topText.textContent = "Let me help!"
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0 
    count = 0 
    container.style.backgroundImage = "url(Smiling.jpg)"
    topText.textContent = "We did it!"
}
