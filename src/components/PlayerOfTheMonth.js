// src/components/PlayerOfTheMonth.js
import React from 'react';
import virat from '../assets/virat.png';

function PlayerOfTheMonth() {
  return (
    <div className="min-h-screen p-8 bg-white">
      <h1 className="text-4xl font-bold text-green-700 mb-4">Player of the Month: Virat Kohli</h1>
      <img
        src={virat}
        alt="Virat Kohli"
        className="w-64 h-64 object-cover rounded-lg shadow-lg mb-6"
      />
      <p className="text-lg text-gray-700">
        Virat Kohli continues to dominate the cricket world with his exceptional performances. 
        He has been awarded the Player of the Month for his outstanding contribution in the latest series.
      </p>
      <p className="mt-4 text-gray-700">
        Kohli's consistency and leadership have inspired millions of fans across the globe. His ability to score 
        runs in all conditions makes him one of the best cricketers in the world.
      </p>
    </div>
  );
}

export default PlayerOfTheMonth;
