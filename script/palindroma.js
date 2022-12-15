const userText = document.getElementById("userText");
const btn = document.getElementById("submit")

//! functions

function reverseWord(word) {
    let reverseResault ="";

    for ( i = word.length - 1 ; i >= 0 ; i--){
        reverseResault += word[i];
        
    }
    
    console.log(reverseResault)
    return reverseResault;
}
function ambivalenceCheck(a, b){
    let ambivalent = false
    if ( a === b){
        ambivalent= true
        console.log("si, è palindroma")
    }else {
        console.log("le parola inserita non  è palindroma")
    }

    return ambivalent;
}

btn.addEventListener( "click" , function(){
    const userWord = reverseWord(userText.value);
    const check = ambivalenceCheck(userWord, userText.value)
})


