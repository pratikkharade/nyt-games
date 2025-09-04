import React, { useState } from 'react';
import solution from "./solution";
import Confetti from "react-confetti";

export default function Puzzle() {
    const size = 5;
    const [showConfetti, setShowConfetti] = useState(false);

    const [grid, setGrid] = useState(
        Array(size)
            .fill(null)
            .map(() => Array(size).fill(""))
    );

    const [status, setStatus] = useState(null);

    const handleChange = (row, col, value) => {
        if (value.length > 1) return;
        const newGrid = grid.map((r) => [...r]);
        newGrid[row][col] = value.toUpperCase();
        setGrid(newGrid);
        setStatus(null); // reset message while typing
    };

    const handleSubmit = () => {
        const isCorrect = grid.every((row, i) =>
            row.every((cell, j) => {
                if (cell === "" && solution[i][j] === "-1") return true
                return cell === solution[i][j]
            })
        );

        if (isCorrect) {
            setShowConfetti(true)
            setStatus("✅ Correct crossword!");
        } else {
            setShowConfetti(false)
            setStatus("❌ Incorrect crossword. Try again!");
        }
    };

    return (
        <div className="crossword-container">
            <div className="crossword-grid">
                {grid.map((row, rowIndex) =>
                    row.map((cell, colIndex) => (
                        <div id={`${rowIndex}-${colIndex}`}
                            className={`${rowIndex}-${colIndex} ` +
                                `${(rowIndex === 0 && solution[rowIndex][colIndex] !== "-1") ? colIndex : ""}`}
                            key={`${rowIndex}-${colIndex}`}>
                            <input
                                id={`input-${rowIndex}-${colIndex}`}
                                type="text"
                                value={cell}
                                onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
                                maxLength={1}
                                className={`crossword-cell ${solution[rowIndex][colIndex] === "-1" ? "disabled-crossword-cell" : ""}`}
                                disabled={solution[rowIndex][colIndex] === "-1"}
                            />
                        </div>
                    ))
                )}
            </div>
            <button onClick={handleSubmit} className="submit-btn">
                Submit
            </button>
            {status && <p className="status-message">{status}</p>}
            {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
        </div>
    );
}