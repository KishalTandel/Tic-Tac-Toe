let squares = document.querySelectorAll(".square");
let resetGame = document.querySelector(".reset");
let newGame = document.querySelector(".new");
let msg = document.querySelector(".msg");
let main = document.querySelector("main");
let turnO = true;
let count = 0;

// Win Patterns
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

// Function for checking winning/draw condition
let check = () => {
    for (let pattern of winPatterns) {
       let pos0 = squares[pattern[0]].innerText;
       let pos1 = squares[pattern[1]].innerText;
       let pos2 = squares[pattern[2]].innerText;
       if (pos0 !== "" && pos1 !== "" && pos2 !== "") {
        if (pos0 === pos1 && pos1 === pos2) {            // condition for winning
            main.classList.add("hide");
            newGame.classList.remove("hide");
            msg.classList.remove("hide");
            msg.innerText =`Player ${pos0} won`;
            turnO = true;
            break;
        }else if (count === 9) {                        // condition for draw
            main.classList.add("hide");
            newGame.classList.remove("hide");
            msg.classList.remove("hide");
            msg.innerText =`It's a draw`;
            turnO = true;
         }
       }
    }
};

// for tracking moves played
squares.forEach((square) => {
    square.addEventListener("click", () => {
        if (turnO) {
            square.innerText = "O";
            turnO = false;
        } else {
            square.innerText = "X";
            turnO =true;
        }
        square.disabled = true;
        count++;
        check();
    });
});

// for resetting game
resetGame.addEventListener("click", () => {
    squares.forEach((square) => {
        square.disabled = false;
        square.innerText = "";
        count = 0;
        turnO = true;
});
});

// for starting new game
newGame.addEventListener("click", () => {
    squares.forEach((square) => {
        square.disabled = false;
        square.innerText = "";
});
    newGame.classList.add("hide");
    msg.innerText ="";
    msg.classList.add("hide");
    main.classList.remove("hide");
    count = 0;
    turnO = true;
});
