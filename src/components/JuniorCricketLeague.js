// src/components/JuniorCricketLeague.js

import React from 'react';

function JuniorCricketLeague() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-5xl font-bold text-green-700 mb-6">Junior Cricket League</h1>
      <p className="text-xl mb-6">
        Welcome to the Junior Cricket League, the best platform for young talents to showcase their skills and develop into the cricket stars of tomorrow!
      </p>

      {/* League Details Section */}
      <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-3xl font-semibold text-green-700 mb-4">League Details</h2>
        <p className="text-lg text-gray-700">
          The Junior Cricket League will feature teams from across the country, competing in a round-robin format. The league is focused on fostering young talent and promoting the future of cricket.
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-700">
          <li>Age group: 10-16 years</li>
          <li>Round-robin format with knockout stages</li>
          <li>Venues: Various cities across the country</li>
          <li>Registration opens: 1st October 2024</li>
          <li>League starts: 1st December 2024</li>
        </ul>
      </section>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <a
          href="/register"
          className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
        >
          Register Now!
        </a>
      </div>
    </div>
  );
}

export default JuniorCricketLeague;
