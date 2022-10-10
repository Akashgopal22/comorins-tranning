let player1 = "Player 1";
let player2 = "Player 2";

// to change name
function editNames() {
    player1 = prompt("Change Player1 name");
    player2 = prompt("Change player2 name");

    document.querySelector(".Player1").innerHTML = player1;
    document.querySelector(".Player2").innerHTML = player2;
}

// to roll dice
function rollTheDice() {
  
    setTimeout(function () {
        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        let randomNumber2 = Math.floor(Math.random() * 6) + 1;

        document.querySelector(".img1").setAttribute("src",
            "dice" + randomNumber1 + ".png");

        document.querySelector(".img2").setAttribute("src",
            "dice" + randomNumber2 + ".png");
        if (randomNumber1 === randomNumber2) {
            document.querySelector("h1").innerHTML = "Draw!";
        }

        else if (randomNumber1 < randomNumber2) {
            document.querySelector("h1").innerHTML = (player2 + " WINS!");
        }

        else {
            document.querySelector("h1").innerHTML= (player1 + " WINS!");
        }
    }, 100);
}