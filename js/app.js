const gameBoard = document.querySelector(".gameBoard")
//const playerTurnStatus = document.querySelector("#status")
const resetButton = document.querySelector(".reset")
const sq1 = document.querySelector("#sq1")
const sq2 = document.querySelector("#sq2")
const sq3 = document.querySelector("#sq3")
const sq4 = document.querySelector("#sq4")
const sq5 = document.querySelector("#sq5")
const sq6 = document.querySelector("#sq6")
const sq7 = document.querySelector("#sq7")
const sq8 = document.querySelector("#sq8")
const sq9 = document.querySelector("#sq9")








// const playerTurnX = document.createElement("div");
// playerTurnX.id = "status";
// playerTurnX.innerHTML = "<p> It is X's Turn"

// const playerTurnO = document.createElement("div");
// playerTurnO.id = "status";
// playerTurnO.innerHTML = "<p> It is O's Turn"
// playerTurnStatus.replaceWith(playerTurnO)

// const winningMessage = () => `Player ${currentPlayer} has won!`;
// const drawMessage = () => `Game ended in a draw!`;
// const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;



//(number % 2 === 0) maybe use if else to toggle clicks. May need a click event counter
let playerTurn = 0
let currentPlayer = ""
let gameState = ["", "", "", "", "", "", "", "", ""];

// // if (playerTurn % 2 === 0) {
//     "O"
// } else {
//     "X"
// }

//PlayerStatus - Turn
// Erase the text in .status then replace the text in status on Click  based off of player turn





//conditions needed to win Tic-Tac-Toe
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],

    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];




//   const resetBoard = () => {
//      console.log("resetButton was clicked")

//   }




const clickCell = () => {

    const playerTurnStatus = document.querySelector("#status")
    
    playerTurn += 1
   
    //     element[i].textContent = "X"
    
    if (playerTurn % 2 === 0) {
        const playerTurnO = document.createElement("div");
        playerTurnO.id = "status";
        playerTurnO.innerHTML = "<p> It is X's Turn </p>"
        playerTurnStatus.replaceWith(playerTurnO)
        currentPlayer= "X"
    
    } else {
        const playerTurnX = document.createElement("div");
        playerTurnX.id = "status";
        playerTurnX.innerHTML = "<p> It is O's Turn</p>"
        playerTurnStatus.replaceWith(playerTurnX)
        currentPlayer = "O"

    }


// const handlePlayerChange = () => {
//     if (playerTurn % 2 === 0) {
//         currentPlayer = "X";
//     }else {
//     currentPlayer = "O";
//     }
// }

    
    console.log(currentPlayer)
    console.log("the number of times clicked is" , playerTurn)
}

const turnPlay1 = () => {
    //if cell is "" then currentPlayer
    if (sq1.innerText === "") {
    sq1.textContent = currentPlayer
    }
}
const turnPlay2 = () => {
    //if cell is "" then currentPlayer
    if (sq2.innerText === "") {
    sq2.textContent = currentPlayer
    }
}
const turnPlay3 = () => {
    //if cell is "" then currentPlayer
    if (sq3.innerText === "") {
    sq3.textContent = currentPlayer
    }
}
const turnPlay4 = () => {
    //if cell is "" then currentPlayer
    if (sq4.innerText === "") {
    sq4.textContent = currentPlayer
    }
}
const turnPlay5 = () => {
    //if cell is "" then currentPlayer
    if (sq5.innerText === "") {
    sq5.textContent = currentPlayer
    }
}
const turnPlay6 = () => {
    //if cell is "" then currentPlayer
    if (sq6.innerText === "") {
    sq6.textContent = currentPlayer
    }
}
const turnPlay7 = () => {
    //if cell is "" then currentPlayer
    if (sq7.innerText === "") {
    sq7.textContent = currentPlayer
    }
}
const turnPlay8 = () => {
    //if cell is "" then currentPlayer
    if (sq8.innerText === "") {
    sq8.textContent = currentPlayer
    }
}
const turnPlay9 = () => {
    //if cell is "" then currentPlayer
    if (sq9.innerText === "") {
    sq9.textContent = currentPlayer
    }
}


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

    //resetButton.addEventListener("click", resetBoard)
    


})
