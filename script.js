//your JS code here. If required.
const text = document.querySelector('h1')

window.addEventListener('resize',updateText)

function updateText(){
  text.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`
}

updateText()