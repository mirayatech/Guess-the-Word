const inputs = document.querySelector('.inputs')
const resetButton = document.querySelector('.reset-btn')
const hint = document.querySelector('.hint span')
const wrongLetter = document.querySelector('.wrong-letter span')
const typingInput = document.querySelector('.typing-input')
let word;
let correctLetters = []
let incorrectLetters = []

function randomWord() {
    // getting random object form wordList
    let randomObject = wordList[Math.floor(Math.random() * wordList.length)]
    word = randomObject.word; // getting word of random object
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
    if (key.match(/^[A-Za-z]+$/) && !incorrectLetters.includes(` ${key}`) && !correctLetters.includes(key)) {
        if (word.includes(key)) { //if user letter found in the word
            for (let i = 0; i < word.length; i++) {
                // showing matched letter in the input value
                if (word[i] == key) {
                    correctLetters += key;
                    inputs.querySelectorAll("input")[i].value = key;
                }
            }
        } else {
            incorrectLetters.push(` ${key}`);
        }
        wrongLetter.innerText = incorrectLetters;
    }
    typingInput.value = "";

}

resetButton.addEventListener('click', randomWord)
typingInput.addEventListener('input', initGame)
document.addEventListener('keydown', () => typingInput.focus())