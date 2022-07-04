function randomWord() {
    let randomObjectWord = wordList[Math.floor(Math.random() * wordList.length)]
    console.log(randomObjectWord)
}

randomWord()