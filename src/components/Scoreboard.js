// src/components/Scoreboard.js

import React, { useState, useEffect } from 'react';
import { getScoreboard } from '../api/players';
import Nav from '../constants/Nav';

const Scoreboard = () => {
    const [scoreboard, setScoreboard] = useState([]);

    useEffect(() => {
        fetchScoreboard();
    }, []);

    const fetchScoreboard = async () => {
        try {
            const response = await getScoreboard();
            setScoreboard(response.data);
        } catch (error) {
            console.error('Error fetching scoreboard:', error);
        }
    };

    return (
        <div className='h-screen w-full bg-black flex flex-col  '>
            <Nav />
            <div className='text-white self-center bg w-full flex justify-center '>
                <div className='self-center items-center w-5/6'>

                    {scoreboard.map((player, index) => (
                        <div className='flex flex-row justify-evenly m-4 font-monospace font-extrabold text-white hover:text-green hover:cursor-pointer hover:border-b-2  ' key={player._id}>
                            <p>{index + 1}. </p>
                            <p>{player.username}</p>
                            <p> - Score: {player.score}</p>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
};

export default Scoreboard;
