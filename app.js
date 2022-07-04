const inputs = document.querySelector('.inputs')
const resetButton = document.querySelector('.reset-btn')
const hint = document.querySelector('.hint span')
const typingInput = document.querySelector('.typing-input')
let word;

function randomWord() {
    let randomObject = wordList[Math.floor(Math.random() * wordList.length)]
    word = randomObject.word;
    hint.innerText = randomObject.hint

    console.log(word)

    let html = ""
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled>`
    }
    inputs.innerHTML = html;

}

randomWord()

function initGame(e) {
    let key = e.target.value.toLowerCase();

    if (key.match(/^[A-Za-z]+$/)) {
        console.log(key)

        if (word.includes(key)) { // if user found in the word

            for (let i = 0; i < word.length; i++) {
                // showing matching letter in input
                if (word[i] === key) {
                    inputs.querySelectorAll('input')[i].value = key
                }
            }

        } else {
            console.log('letter not found')
        }

    }
    typingInput.value = ""
}

resetButton.addEventListener('click', randomWord)
typingInput.addEventListener('input', initGame)
document.addEventListener('keydown', () => typingInput.focus())