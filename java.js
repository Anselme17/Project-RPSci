function getcomputerchoice() {
    random_num = Math.random()
    let computer_guess="guess"

    if (random_num >= 0 && random_num < 0.33) {
        computer_guess="Rock"
    }
    else if (random_num >= 0,33 && random_num < 0.66) {
        computer_guess="Paper"
    }
    else {
        computer_guess="Scissors"
    }
    return computer_guess
}

let computer_guess=getcomputerchoice()
console.log(computer_guess)


function gethumanchoice() {
    let userInput = prompt("Rock, Paper or Scissors ? :");
    return userInput
}

console.log(gethumanchoice());