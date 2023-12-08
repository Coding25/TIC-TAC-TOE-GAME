let boxes = document.querySelectorAll(".box");
let msg = document.querySelector("#msg");
let msg_cont = document.querySelector(".message");
let msg_cons = document.querySelector(".new_game");
let turn = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("button was clicked");
        if (turn) {
            box.innerText = "O";
            turn = false;
        } else {
            box.innerText = "X";
            turn = true;
        }
        box.disabled = true;
        checkwinner();
    })
});

const resetgame = () => {
    turn = true;
    enablebox();
    msg_cont.classList.add("hide");
};

const disablebox = () => {
    for (let box of boxes) {
        box.disabled = true;
        box.innerText="";
    }
};

const enablebox = () => {
    for (let box of boxes) {
        box.disabled = false;
    }
};

const showWinner = (winner) => {
    msg.innerText = (`Congratulations, Winner is ${winner}`);
    msg_cont.classList.remove("hide");
    disablebox();
};

const checkwinner = () => {
    for (let pattern of winpatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("Winner", pos1);
                showWinner(pos1);
            }
        }
    }
};

msg_cons.addEventListener("click", resetgame);