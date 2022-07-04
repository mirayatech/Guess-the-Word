const inputs = document.querySelector('.inputs')

function randomWord() {
    let randomObject = wordList[Math.floor(Math.random() * wordList.length)]
    let word = randomObject.word;
    console.log(word)

    let html = ""
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled>`
    }
    inputs.innerHTML = html;


}

randomWord()