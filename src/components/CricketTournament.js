import React from 'react';
import tournament from '../assets/tournament.jpg'

const CricketTournament = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto bg-white rounded-lg shadow-lg border border-green-300">
      <h2 className="text-4xl font-bold mb-6 text-center text-green-700">
        Cricket Tournament 2024
      </h2>
      <div className="space-y-4 text-gray-700">
        <p>
          The Cricket Tournament 2024 is set to be one of the most exciting events of the year, bringing together the best teams from around the world.
        </p>
        <p>
          Stay tuned for updates on fixtures, match schedules, player line-ups, and more. Be part of the action and experience the thrill of the game!
        </p>
        <img 
          src={tournament} 
          alt="Cricket Tournament" 
          className="w-full h-auto rounded-md shadow-md" 
        />
        <p>
          Follow us for live updates and exclusive coverage of the matches.
        </p>
      </div>
    </div>
  );
};

export default CricketTournament;
