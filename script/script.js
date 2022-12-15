const userNumber = document.getElementById("numeri");
const userChoice = document.getElementById("scelta");
const btn = document.getElementById("submit")

//! functions

function randomNumber(min, max ){
    const randomNumber = Math.floor(Math.random() * max + min )

    return randomNumber
}

btn.addEventListener( "click" , function(){
    
    let finalNumber = 
    userNumber.value + randomNumber( 1, 5)
    console.log(finalNumber)
    

   if ( userChoice.value === "even"){

   }
})