import React from 'react';
import Square from './Square';
import { useState } from 'react';

function Board({player1, player2}) {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true)

    const handleClick = (i) => {
        if(!player1 || !player2){
            alert('Submit name of players first!')
            return
        }
        if(squares[i] || calculateWinner(squares))return 
        const newSquares = squares.slice()
        newSquares[i] = xIsNext ? 'X' : 'O'
        xIsNext ? setXIsNext(false) : setXIsNext(true)
        setSquares(newSquares)
    }
    
    const winner = calculateWinner(squares)
    let gameStatus=''
    if(winner === 'tie')gameStatus = "It's tie."
    else if(winner){
        if(winner === 'X')gameStatus = `Game Over. Winner - ${player1}!`
        else gameStatus = `Game Over. Winner - ${player2}!`
    }
    else{
        if(xIsNext)gameStatus = `Game on. It's ${player1} Turn!`
        else gameStatus = `Game on. It's ${player2} Turn!`
    }

    return (
        <>
            {
                player1 && 
                player2 && 
                <div className='player--details'>
                    <h2>Player1 - {player1}</h2>
                    <h2>Player2 - {player2}</h2>
                </div>
            }
            {player1 && player2 && <div className="status">{gameStatus}</div>}
            <div className='row'>
                <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
            </div>
            <div className='row'>
                <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
                <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
            </div>
            <div className='row'>
                <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
            </div>
        </>
    );
}
function calculateWinner(squares) {
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    let moves=9
    for(let i=0;i<9;i++){
        if(squares[i]) moves--
    }
    for(let i=0;i<lines.length;i++){
        const [a, b, c] = lines[i]
        if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) return squares[a];
    }
    if(moves === 0)return "tie"
    return null;
}
export default Board;