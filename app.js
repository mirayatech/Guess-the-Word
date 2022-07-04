const inputs = document.querySelector('.inputs')
const resetButton = document.querySelector('.reset-btn')
const hint = document.querySelector('.hint span')

function randomWord() {
    let randomObject = wordList[Math.floor(Math.random() * wordList.length)]
    let word = randomObject.word;
    hint.innerText = randomObject.hint

    console.log(word)

    let html = ""
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled>`
    }
    inputs.innerHTML = html;

}

randomWord()

resetButton.addEventListener('click', randomWord)