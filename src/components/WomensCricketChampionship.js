// src/components/WomensCricketChampionship.js
import React from 'react';
import women from '../assets/women.jpg'

const WomensCricketChampionship = () => {
  return (
    <div className="p-8 max-w-screen-lg mx-auto">
      <h1 className="text-4xl font-bold text-green-700 mb-4">Women's Cricket Championship</h1>
      <p className="text-lg text-gray-700 mb-6">
        The Women's Cricket Championship is an exciting tournament that showcases the incredible talent and skills of female cricketers from around the world. Join us in celebrating their achievements and supporting women's cricket!
      </p>
      <img
        src={women}
        alt="Women's Cricket Championship"
        className="w-full h-83 object-cover rounded-lg mb-4"
      />
      <p className="text-lg text-gray-700">
        Stay tuned for match schedules, player profiles, and all the latest news about the championship!
      </p>
    </div>
  );
};

export default WomensCricketChampionship;
