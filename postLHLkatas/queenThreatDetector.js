generateBoard = (WQ, BQ) => {
    let board = []
    let row = []
    let r = 0
    while (board.length < 8) {
        row = []
        let c = 0
        while (row.length < 8) {
            if 
            (
            ((c === WQ[1]) && (r === WQ[0])) ||
            ((c === BQ[1]) && (r === BQ[0]))
            )
            

            {
            row.push("1")
            } else {
            row.push("0")}
            ++c
        }
        
        board.push(row)
        ++r
        }
    if (WQ[01] === BQ[00]){console.log(true)}
    else if (WQ[00] === BQ[00]){console.log(true)}
    else if (WQ[01] === BQ[00]){console.log(true)}
    else if (WQ[01] === BQ[01]){console.log(true)}
    else if (WQ[00] === BQ[01]){console.log(true)}
    
    return board
}
       //         r  c
let whiteQueen = [2, 2];
let blackQueen = [5, 5];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
//console.log(queenThreat(generatedBoard));
