import React, { useState } from "react";
import Board from "./Board";

export default function Game() {
    const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);

    const current = history[stepNumber];

    const handleClick = (i) => {
        const currentHistory = history.slice(0, stepNumber + 1);
        const squares = current.squares.slice();
        
        if (calculateWinner(squares) || squares[i]) return;
        
        squares[i] = xIsNext ? 'X' : 'O';
        setHistory(currentHistory.concat([{ squares }]));
        setStepNumber(currentHistory.length);
        setXIsNext(!xIsNext);
        console.log(status)
    };

    const jumpTo = (step) => {
        setStepNumber(step);
        setXIsNext(step % 2 === 0); // Ensures correct turn based on move number
    };

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let line of lines) {
            const [a, b, c] = line;
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const winner = calculateWinner(current.squares);
    const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

    return (
        <div className="game">
            <div className="game-board">
                <Board squares={current.squares} onClick={handleClick} />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>
                    {history.map((step, move) => (
                        <li key={move}>
                            <button onClick={() => jumpTo(move)}>
                                {move ? `Go to move #${move}` : 'Go to game start'}
                            </button>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}
