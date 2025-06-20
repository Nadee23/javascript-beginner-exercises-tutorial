
function sing() {
    let song = ""
    for (let i = 1; i <= 12; i++) {
        if (i != 5 && i != 11 && i != 12) {
            song += "let it be, "
        }
        if (i === 5) {
            song += "there will be an answer, "
        }
        if (i === 11) {
            song += "whisper words of wisdom, "
        }
        if (i === 12) {
            song += "let it be"
        }

    }


    return song
}
//Your code above ^^^

console.log(sing());