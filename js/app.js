//Create document querySelector links to the HTML doc.
const gameBoard = document.querySelector(".gameBoard")
const resetButton = document.querySelector(".reset")
const statusWin = document.querySelector("#status")
const sq1 = document.querySelector("#sq1")
const sq2 = document.querySelector("#sq2")
const sq3 = document.querySelector("#sq3")
const sq4 = document.querySelector("#sq4")
const sq5 = document.querySelector("#sq5")
const sq6 = document.querySelector("#sq6")
const sq7 = document.querySelector("#sq7")
const sq8 = document.querySelector("#sq8")
const sq9 = document.querySelector("#sq9")



//variable used to alternate player turns
let playerTurn = 1
//Once turn starts this variable with be either X or O
let currentPlayer = ""
//This will store the turns completed by the players
let gameState = ["", "", "", "", "", "", "", "", ""];

//gameActive = true means game is playing. 
let gameActive = true





const clickCell = () => {

    const playerTurnStatus = document.querySelector("#status")


    if (playerTurn % 2 === 0) {
        statusWin.textContent = "It is X's Turn"
        currentPlayer = "X"

    } else {
        statusWin.textContent = "It is O's Turn"
        currentPlayer = "O"
    }

    



    //Logic to determine if X is the winner
    if (gameState[0] === "X" && gameState[1] === "X" && gameState[2] === "X") {
        statusWin.textContent = "X Wins!"
        gameActive = false
    } else if (gameState[3] === "X" && gameState[4] === "X" && gameState[5] === "X") {
        statusWin.textContent = "X Wins!"
        gameActive = false
    } else if (gameState[6] === "X" && gameState[7] === "X" && gameState[8] === "X") {
        statusWin.textContent = "X Wins!"
        gameActive = false
    } else if (gameState[0] === "X" && gameState[3] === "X" && gameState[6] === "X") {
        statusWin.textContent = "X Wins!"
        gameActive = false
    } else if (gameState[1] === "X" && gameState[4] === "X" && gameState[7] === "X") {
        statusWin.textContent = "X Wins!"
        gameActive = false
    } else if (gameState[2] === "X" && gameState[5] === "X" && gameState[8] === "X") {
        statusWin.textContent = "X Wins!"
        gameActive = false
    } else if (gameState[0] === "X" && gameState[4] === "X" && gameState[8] === "X") {
        statusWin.textContent = "X Wins!"
        gameActive = false
    } else if (gameState[2] === "X" && gameState[4] === "X" && gameState[6] === "X") {
        statusWin.textContent = "X Wins!"
        gameActive = false
    }


    //logic to determine if O is the winner
    if (gameState[0] === "O" && gameState[1] === "O" && gameState[2] === "O") {
        statusWin.textContent = "O Wins!"
        gameActive = false
    } else if (gameState[3] === "O" && gameState[4] === "O" && gameState[5] === "O") {
        statusWin.textContent = "O Wins!"
        gameActive = false
    } else if (gameState[6] === "O" && gameState[7] === "O" && gameState[8] === "O") {
        statusWin.textContent = "O Wins!"
        gameActive = false
    } else if (gameState[0] === "O" && gameState[3] === "O" && gameState[6] === "O") {
        statusWin.textContent = "O Wins!"
        gameActive = false
    } else if (gameState[1] === "O" && gameState[4] === "O" && gameState[7] === "O") {
        statusWin.textContent = "O Wins!"
        gameActive = false
    } else if (gameState[2] === "O" && gameState[5] === "O" && gameState[8] === "O") {
        statusWin.textContent = "O Wins!"
        gameActive = false
    } else if (gameState[0] === "O" && gameState[4] === "O" && gameState[8] === "O") {
        statusWin.textContent = "O Wins!"
        gameActive = false
    } else if (gameState[2] === "O" && gameState[4] === "O" && gameState[6] === "O") {
        statusWin.textContent = "O Wins!"
        gameActive = false
    }

    //Logic to determine a Draw. Once all array slots are filled. The game results in a draw.
    const results = gameState.includes("");
    if (results == false) {
        statusWin.textContent = "The game is a Draw."
    }

}

    
//selects the ID of a square then inputs the currentPlayers letter into the square. 
    const turnPlay1 = () => {
        if (sq1.innerText === "" && gameActive == true) {
        sq1.textContent = currentPlayer
        gameState.splice(0, 1 , currentPlayer)
        playerTurn += 1
        }
    }
    const turnPlay2 = () => {
        if (sq2.innerText === "" && gameActive == true) {
        sq2.textContent = currentPlayer
        gameState.splice(1, 1 , currentPlayer)
        playerTurn += 1
        }
    }
    const turnPlay3 = () => {
        if (sq3.innerText === "" && gameActive == true) {
        sq3.textContent = currentPlayer
        gameState.splice(2, 1 , currentPlayer)
        playerTurn += 1
        }
    }
    const turnPlay4 = () => {
        if (sq4.innerText === "" && gameActive == true) {
        sq4.textContent = currentPlayer
        gameState.splice(3, 1 , currentPlayer)
        playerTurn += 1
        }
    }
    const turnPlay5 = () => {
        if (sq5.innerText === "" && gameActive == true) {
        sq5.textContent = currentPlayer
        gameState.splice(4, 1 , currentPlayer)
        playerTurn += 1
        }
    }
    const turnPlay6 = () => {
        if (sq6.innerText === "" && gameActive == true) {
        sq6.textContent = currentPlayer
        gameState.splice(5, 1 , currentPlayer)
        playerTurn += 1
        }
    }
    const turnPlay7 = () => {
        if (sq7.innerText === "" && gameActive == true) {
        sq7.textContent = currentPlayer
        gameState.splice(6, 1 , currentPlayer)
        playerTurn += 1
        }
    }
    const turnPlay8 = () => {
        if (sq8.innerText === "" && gameActive == true) {
        sq8.textContent = currentPlayer
        gameState.splice(7, 1 , currentPlayer)
        playerTurn += 1
        }
    }
    const turnPlay9 = () => {
        if (sq9.innerText === "" && gameActive == true) {
        sq9.textContent = currentPlayer
        gameState.splice(8, 1 , currentPlayer)
        playerTurn += 1
        }
    }

   
//DOM interactions with eventListeners
    document.addEventListener("DOMContentLoaded", () => {
        gameBoard.addEventListener("click", clickCell)
        sq1.addEventListener("click", turnPlay1)
        sq2.addEventListener("click", turnPlay2)
        sq3.addEventListener("click", turnPlay3)
        sq4.addEventListener("click", turnPlay4)
        sq5.addEventListener("click", turnPlay5)
        sq6.addEventListener("click", turnPlay6)
        sq7.addEventListener("click", turnPlay7)
        sq8.addEventListener("click", turnPlay8)
        sq9.addEventListener("click", turnPlay9)

    })