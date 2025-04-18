function getcomputerchoice() {
    random_num = Math.random()
    let computer_guess="guess"

    if (random_num >= 0 && random_num < 0.33) {
        computer_guess="Rock"
    }
    else if (random_num >= 0.33 && random_num < 0.66) {
        computer_guess="Paper"
    }
    else {
        computer_guess="Scissors"
    }
    return computer_guess
}

function gethumanchoice() {
    let userInput = prompt("Rock, Paper or Scissors ? :");
    return userInput
}


function playround(humanchoice,computerchoice) {
    let win="Default"
    if (humanchoice=="Scissors" && computerchoice =="Paper") {
        console.log("Vous avez gagné ! Le ciseaux bat le papier")
        win = "Win"
        return win
    }

    if (humanchoice=="Rock" && computerchoice=="Scissors") {
        console.log("Vous avez gagné ! La pierre bat le ciseaux")
        win = "Win"
        return win
    }

    if (humanchoice=="Paper" && computerchoice=="Rock") {
        console.log("Vous avez gagné ! Le feuille bat le caillou")
        win = "Win"
        return win
    }

    if (computerchoice=="Scissors" && humanchoice=="Paper") {
        console.log("Vous avez perdu ! Le ciseaux bat le papier")
        win = "Loose"
        return win
    }

    if (computerchoice=="Rock" && humanchoice=="Scissors") {
        console.log("Vous avez perdu ! La pierre bat le ciseaux")
        win = "Loose"
        return win
    }

    if (computerchoice=="Paper" && humanchoice=="Rock") {
        console.log("Vous avez perdu ! Le feuille bat le caillou")
        win = "Loose"
        return win
    }

    else {
        console.log("Egalite, vous recommencez !")
        win = "Even"
        return win
    }
}




function playgame() {
    let compteur_joueur=0
    let compteur_ordi=0
    while (compteur_joueur<3 && compteur_ordi<3) {
        let humanselection=gethumanchoice()
        let computerselection=getcomputerchoice()
        let score = "Score actuel => J1: "+compteur_joueur +" "+compteur_ordi+" :J2" 
        let result=playround(humanselection,computerselection)
        if (result=="Win") {
            compteur_joueur++
            score = "Score actuel => J1: "+compteur_joueur +" "+compteur_ordi+" :J2" 
            console.log(score)
        }

        if (result=="Loose") {
            compteur_ordi++
            score = "Score actuel => J1: "+compteur_joueur +" "+compteur_ordi+" :J2" 
            console.log(score)
        }
        

    }

    if (compteur_joueur==3) {
        console.log("Bravo, vous avez remporté la partie "+compteur_joueur +" à "+compteur_ordi+" !")
    }

    else {
        console.log("Dommage, vous avez perdu la partie "+compteur_joueur +" à "+compteur_ordi+" !")
    }

}