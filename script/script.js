const userText = document.getElementById("userText");
const btn = document.getElementById("submit")

//! functions

function reverseWord(word) {
    let reverseResault;

    for ( i = word.lenght - 1 ; i >= 0 ; i--){
        reverseResault += word[i];
    }

    return reverseResault;
}

let prova = reverseWord("prova");
console.log(prova)


