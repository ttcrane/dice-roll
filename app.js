const diceTriggerEl = document.querySelector(".dice__trigger");
const diceImageEl = document.querySelector(".dice__image");


function randomNum() {
    let number = Math.floor((Math.random()*6)+1);
    return number;
}

function showDice() {
    diceTriggerEl.addEventListener("click", function(){
        let myRandomNumber = randomNum();
        diceImageEl.src = "images/dice" + myRandomNumber + ".png";
    })

}

showDice();