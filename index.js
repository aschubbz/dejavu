let rand = Math.round(Math.random() *100) +1;
let userInput
do{
     userInput = prompt("enter a number between 1 and 100;")

    if (userInput > rand) {
        alert("too high");
    }else if (userInput < rand) {
        alert("too low");
    }else {alert("congrats")}

    

}while(userInput != rand)