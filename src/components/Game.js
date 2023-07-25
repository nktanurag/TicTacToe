import React, { useState } from 'react';
import Board from './Board';

function Game({props}) {
    const [player1, setPlayer1] = useState(null)
    const [player2, setPlayer2] = useState(null)
    const [player1Name, setPlayer1Name] = useState(null)
    const [player2Name, setPlayer2Name] = useState(null)
    // let player1Name='a', player2Name='b'
    const handleSubmit = (event) => {
        event.preventDefault();
        if(player1Name && player2Name){
            alert('Players name already submitted!')
            return
        }
        if(!player1 || !player2){
            alert('Enter name of players first!')
            return
        }
        setPlayer1Name(() => player1)
        setPlayer2Name(() => player2)
    }
    //console.log(player1Name, player2Name)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  value={player1}
                  placeholder='Player1 Name'
                  onChange={(e) => setPlayer1(() => e.target.value)}
                />
                <input 
                  type="text" 
                  value={player2}
                  placeholder='Player2 Name'
                  onChange={(e) => setPlayer2(() => e.target.value)}
                />
                <button type="submit">submit</button>
            </form>
            <Board player1={player1Name} player2={player2Name}/>
        </div>
    );
}

export default Game;