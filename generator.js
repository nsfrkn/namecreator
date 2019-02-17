var input = document.getElementById("words")
var nicknames = document.getElementById("nicknames")

// generates nicknames.
function generate() {
    var chars = ["a", "e", "i", "u", "o"]
    var words = input.value
    var wordsChars = words.split('') // initial characters
    var newChars = wordsChars.slice() // this array will change every loop and will get back to initial state.

    for (let index = 0; index < 10; index++) {
        for (let i = 1; i < wordsChars.length; i += 2) {
            newChars.splice(i, 0, chars[Math.floor((Math.random() * chars.length))])
        }
        var text = document.createElement("p")
        text.append(newChars.join(''))
        nicknames.append(text)
        newChars = wordsChars.slice() // set newChars to initial state
    }

}