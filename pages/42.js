import { useState, useEffect } from 'react';

const Game = () => {
    const [score, setScore] = useState(0);
    const [targetPosition, setTargetPosition] = useState({ top: '50%', left: '50%' });
    const [timeLeft, setTimeLeft] = useState(42);
    const [gameOver, setGameOver] = useState(false);
    const [gameWon, setGameWon] = useState(false);

    const moveTarget = () => {
        const top = Math.random() * 90 + '%';
        const left = Math.random() * 90 + '%';
        setTargetPosition({ top, left });
    };

    const handleClick = () => {
        if (!gameOver) {
            const newScore = score + 1;
            setScore(newScore);
            if (newScore >= 42) {
                setGameOver(true);
                setGameWon(true);
            } else {
                moveTarget();
            }
        }
    };

    const resetGame = () => {
        setScore(0);
        setTimeLeft(42);
        setGameOver(false);
        setGameWon(false);
        moveTarget();
    };

    useEffect(() => {
        if (timeLeft > 0 && !gameOver) {
            const timer = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else if (timeLeft === 0) {
            setGameOver(true);
        }
    }, [timeLeft, gameOver]);

    useEffect(() => {
        if (!gameOver) {
            const interval = setInterval(moveTarget, 1000);
            return () => clearInterval(interval);
        }
    }, [gameOver]);

    return (
        <div style={{ 
            position: 'relative', 
            width: '50vw', 
            height: '50vh', 
            margin: 'auto', 
            top: '10vh', 
            border: '2px solid black', 
            borderRadius: '10px', 
            overflow: 'hidden',
            backgroundColor: '#f0f0f0'
        }}>
            <h1 style={{ color: 'black' }}>Score: {score}</h1>
            <h2 style={{ color: 'black' }}>Time Left: {timeLeft}s</h2>
            {gameOver && (
                <h2 style={{ color: 'black' }}>
                    {gameWon ? 'You Win!' : 'Game Over!'}
                </h2>
            )}
            <button onClick={resetGame} style={{ color: 'black', position: 'absolute', top: '10px', right: '10px', fontWeight: 'bold' }}>Reset</button>
            {!gameOver && (
                <div
                    onClick={handleClick}
                    style={{
                        position: 'absolute',
                        top: targetPosition.top,
                        left: targetPosition.left,
                        width: '50px',
                        height: '50px',
                        backgroundColor: 'red',
                        borderRadius: '50%',
                        cursor: 'pointer',
                    }}
                />
            )}
        </div>
    );
};

export default Game;