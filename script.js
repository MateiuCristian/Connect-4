function drawPiece(piecePos) {
    let canvasElem = document.getElementById("myCanvas"), canvasCtx = canvasElem.getContext('2d');
    window.devicePixelRatio = 2;
    canvasElem.width *= window.devicePixelRatio;
    canvasElem.height *= window.devicePixelRatio;
    canvasCtx.beginPath();
    console.log(piecePos.x, piecePos.y);
    canvasCtx.arc(100, 100, 20, 0, Math.PI * 2);
    console.log(canvasCtx);
    canvasCtx.stroke();

   // canvasCtx.stroke();
}

function placePiece(cellId) {
    let cellPos = document.getElementById(cellId).getBoundingClientRect();
    let piecePos = cellPos;
    drawPiece(piecePos);
}
