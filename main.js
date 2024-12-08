var healthPlayer    =   5
var healthPC        =   5


function expandRules() {
    var rulesBox = document.getElementById("js-rule-selector")
    rulesBox.style.display = "block";
}
function closeRules(){
    var rulesBox = document.getElementById("js-rule-selector")
    rulesBox.style.display = "none"
}
//get random hand from computer
function getComputerChoice() {
    const computerHand = ["rock", "paper", "scissor"]
    const random = Math.floor(Math.random() * computerHand.length);
    return computerHand[random]
}

function removeLive(entity, damage) {
    if (entity != 'pc') {
        const heartId = `${entity}_${healthPlayer}`;
        const heartElement = document.getElementById(heartId);
        healthPlayer -= damage
        if (heartElement) {

            heartElement.style.display = 'none';
        }
    }
    else {
        const heartId = `${entity}_${healthPC}`;
        const heartElement = document.getElementById(heartId);
        healthPC -= damage
        if (heartElement) {

            heartElement.style.display = 'none';
        }
    }
}
function finalGameEnd(entity){
    console.log(entity)
    if (entity == "player"){
        alert("Hey you won!")
    }
    else {
        alert("Hey, you loose!")
    }
}
function win() {
    if (healthPC > 1) {
        removeLive("pc", 1)
    }
    else {
        finalGameEnd("player")
    }
}
function loose() {
    if (healthPlayer > 1) {
        removeLive("player", 1)
    }else {
        finalGameEnd("pc")
    }
}

function playerSelection(attack){
    console.log(attack)
    pc = getComputerChoice()
    
    if (attack == pc) {
        console.log("tie");
    }
    if (attack == 'rock'){
        if (pc == 'scissor') {
            console.log("you win")
            win()
        }
        else{
            console.log("you loose " + pc)
            loose()
        }
    }
    if (attack =='scissor'){
        if (pc == 'paper') {
            console.log("you win")
            win()
        }
        else{
            console.log("you loose " + pc)
            loose()
        }
    }
    if (attack == 'paper') {
        if (pc == 'rock') {
            console.log("you win")
            win()
        }
        else{
            console.log("you loose " + pc)
            loose()
        }
    }
}
function restart() {
    window.location.reload();
}