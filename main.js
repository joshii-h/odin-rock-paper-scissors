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
