colorTurn = ["red", "yellow"]

function placePiece(cellId) {
    let finalPos = 0;
    let id = setInterval(function() {
        document.getElementById("bt " + finalPos.toString() + " " + cellId[5]).setAttribute('style', 'background-color:' + colorTurn[0] + ' !important;');
        console.log(document.getElementById("bt " + finalPos.toString() + " " + cellId[5]).style.backgroundColor);
        ++finalPos;
        if (finalPos == 4) {
            clearInterval(id);
        }
    }, 75);
    swap
}
