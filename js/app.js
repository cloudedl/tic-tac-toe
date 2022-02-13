const gameBoard = document.querySelector(".gameBoard")
//const playerTurnStatus = document.querySelector("#status")
const resetButton = document.querySelector(".reset")


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


  const resetBoard = () => {
      console.log("resetButton was clicked")

  }

const clickCell = () => {

    const playerTurnStatus = document.querySelector("#status")
    
    playerTurn += 1
    // let element = document.getElementsByClassName('boardSquare');
    // for(let i=0;i<element.length;i++){
    //   if(element[i].innerHTML == ""){
    //     element[i].textContent = "X"
    //   } else{
    //     console.log("ran")
    //   }
    // }

    if (playerTurn % 2 === 0) {
        const playerTurnO = document.createElement("div");
        playerTurnO.id = "status";
        playerTurnO.innerHTML = "<p> It is O's Turn </p>"
        playerTurnStatus.replaceWith(playerTurnO)
    
    } else {
        const playerTurnX = document.createElement("div");
        playerTurnX.id = "status";
        playerTurnX.innerHTML = "<p> It is X's Turn</p>"
        playerTurnStatus.replaceWith(playerTurnX)

    }

    

    console.log("the number of times clicked is" , playerTurn)
    // if (playerTurn % 2 == 0) {
    //     console.log("playerTurn Even")
    // } else {
    //     console.log("player turn odd")
    // }
   

}


document.addEventListener("DOMContentLoaded", () => {
    gameBoard.addEventListener("click", clickCell)
    resetButton.addEventListener("click", resetBoard)
    


})