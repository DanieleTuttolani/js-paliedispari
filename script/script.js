const userNumber = document.getElementById("numeri");
const userChoice = document.getElementById("scelta");
const btn = document.getElementById("submit")

//! functions

function randomNumber(min = 1, max = 5 ){
    const randomNumber = Math.floor(Math.random() * max) + min

    return randomNumber
}

btn.addEventListener( "click" , function(){
    let cpu = randomNumber()
    let player = parseInt(userNumber.value);
    let finalNumber = player + cpu;
    console.log(finalNumber)
    
   console.log( "la scelta è " + userChoice.value)

   let numberEven = false
   let numberUneven = false 

   if ( finalNumber % 2 ){
        numberUneven = true
        console.log( " e dispari")
   }else{
       numberEven = true
       console.log (" è pari")
    }

    
})