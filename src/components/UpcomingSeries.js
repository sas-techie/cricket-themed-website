// src/components/UpcomingSeries.js
import React from 'react';
import indiavsaus from '../assets/indiavsaus.jpg'

function UpcomingSeries() {
  return (
    <div className="min-h-screen p-8 bg-white">
      <h1 className="text-4xl font-bold text-green-700 mb-4">Upcoming Series: India vs. Australia</h1>
      <img
        src={indiavsaus}
        alt="India vs Australia"
        className="w-64 h-64 object-cover rounded-lg shadow-lg mb-6"
      />
      <p className="text-lg text-gray-700">
        The cricketing giants India and Australia are set to face off in an exciting series starting soon.
        Fans can expect thrilling matches, star performances, and intense rivalries as the two top teams battle it out.
      </p>
      <p className="mt-4 text-gray-700">
        Both teams have a rich history of competitive matches, and this series is expected to be no different, 
        with world-class players from both sides ready to give their best on the field.
      </p>
    </div>
  );
}

export default UpcomingSeries;
