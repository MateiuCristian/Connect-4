function drawPiece(piecePos) {
    let canvasElem = document.createElement("canvas"), canvasCtx = canvasElem.getContext('2d');
    canvasCtx.fillStyle = 'green';
    canvasCtx.fillRect(piecePos.x, piecePos.y, 50, 10);
    document.body.append(canvasElem);
}

function placePiece(cellId) {
    let cellPos = document.getElementById(cellId).getBoundingClientRect();
    let piecePos = cellPos;
    drawPiece(piecePos);
}