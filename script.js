colorTurn = ["blue", "red"];
lastFreeCell = [5, 5, 5, 5, 5, 5, 5];
dir = [[1, 0], [0, 1], [-1, 0], [0, -1], [1, 1], [-1, -1], [1, -1], [-1, 1]];
isTurnDone = true;

window.onload = function() {
    generateTable();
}

function generateTable() {
    let table = document.getElementById("tableId");
    for (let line = 0; line < 6; ++line) {
        let tableRow = table.insertRow();
        for (let col = 0; col < 7; ++col) {
            let tableCell = tableRow.insertCell();
            tableCell.id = "td " + line.toString() + " " + col.toString();
            tableCell.innerHTML = "<button id=\"bt " + line.toString() + " " + col.toString() + "\" type=\"button\" class=\"btn rounded-circle\"</button>";
            let cellButton = document.getElementById("bt " + line.toString() + " " + col.toString());
            cellButton.addEventListener("click", () => {placePiece(tableCell.id);});
        }
    }
}

function sleep(ms) {
    return new Promise(wait => setTimeout(wait, ms));
}

function changeTurn() {
    let aux = colorTurn[0];
    colorTurn[0] = colorTurn[1];
    colorTurn[1] = aux;
}

function getGameState() {
    for (let k = 0; k < 8; ++k) {
        for (let line = 0; line < 6; ++line) {
            for (let col = 0; col < 7; ++col) {
                let startButton = document.getElementById("bt " + line.toString() + " " + col.toString());
                let sameButtonsCounter = 1;
                for (let len = 1; len <= 3; ++len) {
                    let endButton = document.getElementById("bt " + (line + dir[k][0] * len).toString() + " " + (col + dir[k][1] * len).toString());
                    if (endButton != null && getComputedStyle(startButton).backgroundColor == getComputedStyle(endButton).backgroundColor) {
                        ++sameButtonsCounter;
                    }
                }
                if (sameButtonsCounter == 4 && getComputedStyle(startButton).backgroundColor != "rgb(255, 255, 255)") {
                    if (getComputedStyle(startButton).backgroundColor == "rgb(255, 0, 0)") {
                        return "Red has won.";
                    }
                    return "Blue has won."
                }
            }
        }
    }
    let isDraw = true;
    for (let i = 0; i < 7; ++i) {
        if (lastFreeCell[i] >= 0) {
            isDraw = false;
        }
    }
    if (isDraw == true) {
        return "Draw";
    }
    return "Ongoing";
}

function printOutcome(text) {
    let divOutcome = document.getElementById("divOutcome");
    divOutcome.innerHTML = text;
}

async function placePiece(cellId) {
    if (getGameState() == "Ongoing" && isTurnDone == true && lastFreeCell[Number(cellId[5])] >= 0) {
        isTurnDone = false;
        for (let i = 0; i <= lastFreeCell[Number(cellId[5])]; ++i) {
            document.getElementById("bt " + i.toString() + " " + cellId[5]).setAttribute('style', 'background-color: ' + colorTurn[0] + ' !important;');
            await sleep(200);
            if (i < lastFreeCell[Number(cellId[5])]) {
                document.getElementById("bt " + i.toString() + " " + cellId[5]).setAttribute('style', 'background-color: white !important;');
            }
        }
        --lastFreeCell[Number(cellId[5])];
        if (getGameState() != "Ongoing") {
            printOutcome(getGameState());
        } else {
            changeTurn();
            printOutcome(colorTurn[0]);
        }
        isTurnDone = true;
    }
}
