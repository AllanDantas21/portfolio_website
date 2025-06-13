import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';

interface Ripple {
    x: number;
    y: number;
    id: number;
}

const Game = () => {
    const { t } = useTranslation('common');
    const [mounted, setMounted] = useState(false);
    const [score, setScore] = useState(0);
    const [targetPosition, setTargetPosition] = useState({ top: '50%', left: '50%' });
    const [timeLeft, setTimeLeft] = useState(42);
    const [gameOver, setGameOver] = useState(false);
    const [gameWon, setGameWon] = useState(false);
    const [animateClick, setAnimateClick] = useState(false);
    const [startTimer, setStartTimer] = useState(3);
    const [gameStarted, setGameStarted] = useState(false);
    const [ripples, setRipples] = useState<Ripple[]>([]);

    useEffect(() => { setMounted(true); }, []);

    useEffect(() => {
        if (!gameStarted) {
            if (startTimer > 0) {
                const countdownInterval = setInterval(() => {
                    setStartTimer(prev => prev - 1);
                }, 1000);
                return () => clearInterval(countdownInterval);
            } else {
                setGameStarted(true);
            }
        }
    }, [startTimer, gameStarted]);

    const moveTarget = () => {
        const top = Math.random() * 90 + '%';
        const left = Math.random() * 90 + '%';
        setTargetPosition({ top, left });
    };

    const handleClick = () => {
        if (animateClick) return;
        if (!gameOver) {
            const newScore = score + 1;
            setScore(newScore);
            if (newScore >= 42) {
                setGameOver(true);
                setGameWon(true);
            } else {
                setAnimateClick(true);
                setTimeout(() => {
                    setAnimateClick(false);
                    moveTarget();
                }, 300);
            }
        }
    };

    const resetGame = () => {
        setScore(0);
        setTimeLeft(42);
        setGameOver(false);
        setGameWon(false);
        setAnimateClick(false);
        setStartTimer(2);
        setGameStarted(false);
        moveTarget();
    };

    const handleContainerClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const ripple = { x, y, id: Date.now() };
        setRipples(prev => [...prev, ripple]);
        setTimeout(() => {
            setRipples(prev => prev.filter(r => r.id !== ripple.id));
        }, 600);
    };

    useEffect(() => {
        if (gameStarted && timeLeft > 0 && !gameOver) {
            const timer = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else if (timeLeft === 0 && gameStarted) {
            setGameOver(true);
        }
    }, [gameStarted, timeLeft, gameOver]);

    useEffect(() => {
        if (gameStarted && !gameOver) {
            const interval = setInterval(() => {
                if (!animateClick) {
                    moveTarget();
                }
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [gameStarted, gameOver, animateClick]);

    return (
        mounted ? (
            <>
            <div onClick={handleContainerClick} style={{ 
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
                <h1 style={{ color: 'black' }}>{t('game.score')}: {score}</h1>
                <h2 style={{ color: 'black' }}>{t('game.timeLeft')}: {timeLeft}s</h2>
                {gameOver && (
                    <h2 style={{ color: 'black' }}>
                        {gameWon ? t('game.win') : t('game.over')}
                    </h2>
                )}
                <button onClick={resetGame} style={{ color: 'black', position: 'absolute', top: '10px', right: '10px', fontWeight: 'bold' }}>{t('game.reset')}</button>
                {!gameStarted && (
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(255,255,255,0.8)',
                        zIndex: 2
                    }}>
                        <h1 style={{ color: 'black' }}>Começando em: {startTimer}</h1>
                    </div>
                )}
                {gameStarted && !gameOver && (
                    <div
                        onClick={handleClick}
                        className={animateClick ? 'pop-animation' : ''}
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
                {ripples.map(ripple => (
                    <span key={ripple.id} className="ripple" style={{ left: ripple.x, top: ripple.y }} />
                ))}
            </div>
            <style jsx>{`
                @keyframes pop {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.5); }
                    100% { transform: scale(1); }
                }
                .pop-animation {
                    animation: pop 0.3s ease-out;
                }
                .ripple {
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    background: rgba(0, 0, 0, 0.3);
                    border-radius: 50%;
                    transform: translate(-50%, -50%) scale(0);
                    pointer-events: none;
                    animation: ripple-animation 600ms linear;
                }
                @keyframes ripple-animation {
                    to {
                        transform: translate(-50%, -50%) scale(4);
                        opacity: 0;
                    }
                }
            `}</style>
            </>
        ) : null
    );
};

export const getStaticProps: GetStaticProps = async ({ locale = 'pt' }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common']))
        }
    }
}

export default Game;