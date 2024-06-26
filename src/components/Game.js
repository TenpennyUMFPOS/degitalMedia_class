// src/components/Game.js
import React, { useState } from 'react';
import { addOrGetPlayer, updateScore } from '../api/players';
import Nav from '../constants/Nav';

const Game = () => {
    const [username, setUsername] = useState('');
    const [player, setPlayer] = useState(null);
    const [score, setScore] = useState(0);

    const handleNameSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await addOrGetPlayer(username);
            setPlayer(response.data);
            setScore(response.data.score);
        } catch (error) {
            console.error(error);
        }
    };

    const handleBananaClick = async () => {
        const newScore = score + 1;
        setScore(newScore);
        try {
            await updateScore(player.username, newScore);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='h-screen w-full bg-black flex flex-col justify-center overflow-x-hidden'>
            <Nav />
            {!player ? (
                <div className='self-center'>
                    <form onSubmit={handleNameSubmit} className='flex flex-col items-center'>
                        <input
                            className='m-4 font-monospace font-extrabold text-white hover:text-green hover:cursor-pointer hover:border-b-2'
                            type="text"
                            placeholder="Enter your name"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <button type="submit" className='m-4 font-monospace font-extrabold text-white hover:text-green hover:cursor-pointer hover:border-b-2'>
                            Start Game
                        </button>
                    </form>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center text-white">
                    <h2 className="text-3xl mb-4">Welcome, {player.username}!</h2>
                    <div className="flex flex-col items-center">
                        <button
                            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded"
                            onClick={handleBananaClick}
                        >
                            Click the Banana <span className="text-3xl">🍌</span>
                        </button>
                        <p className="mt-4 text-xl">Score: {score}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Game;
