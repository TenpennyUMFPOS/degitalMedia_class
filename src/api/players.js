// src/api/players.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/players';

export const addOrGetPlayer = (username) => axios.post(API_URL, { username });
export const updateScore = (username, score) => axios.put(`${API_URL}/${username}`, { score });
export const getScoreboard = () => axios.get(`${API_URL}/scoreboard`); 
