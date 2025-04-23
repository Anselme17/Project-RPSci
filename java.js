

function getcomputerchoice() {
    let random_num = Math.random()
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
    let compteur_joueur = 0;
    let compteur_ordi = 0;
    let score = "Score actuel => J1: " + compteur_joueur + " " + compteur_ordi + " :J2"; 

    let buttonRock = document.querySelector("#butrock");
    let buttonPaper = document.querySelector("#butpaper");
    let buttonScissors = document.querySelector("#butscissors");
    let containercontent = document.querySelector("p");

    buttonRock.addEventListener("click", () => {
        let computerselection = getcomputerchoice(); // Nouveau choix à chaque tour
        let result = playround("Rock", computerselection);
        updateScore(result);
    });

    buttonPaper.addEventListener("click", () => {
        let computerselection = getcomputerchoice();
        let result = playround("Paper", computerselection);
        updateScore(result);
    });

    buttonScissors.addEventListener("click", () => {
        let computerselection = getcomputerchoice();
        let result = playround("Scissors", computerselection);
        updateScore(result);
    });

    function updateScore(result) {
        if (result == "Win") {
            compteur_joueur++;
        } 
        else if (result == "Loose") {
            compteur_ordi++;
        }
        score = "Score actuel => J1: " + compteur_joueur + " " + compteur_ordi + " :J2";
        const scorehtml = document.createElement("div");
        scorehtml.textContent=score
        containercontent.appendChild(scorehtml)
    
        if (compteur_joueur == 5) {
            console.log("Bravo, vous avez remporté la partie " + compteur_joueur + " à " + compteur_ordi + " !");
        }
    
        if (compteur_ordi == 5) {
            console.log("Dommage, vous avez perdu la partie " + compteur_joueur + " à " + compteur_ordi + " !");
        }
    }
}

playgame();