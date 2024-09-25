// src/components/MatchHighlights.js

import React, { useState } from 'react';
import indiavsaus from '../assets/indiavsaus.jpg';
import engvsafrica from '../assets/engvsafrica.jpg';
import IndiaVsAustralia from './IndiaVsAustralia';
import EnglandVsSouthAfrica from './EnglandVsSouthAfrica';

function MatchHighlights() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-5xl font-bold text-green-700 mb-6">Latest Match Highlights</h1>
      <p className="text-xl mb-6">
        Relive the most exciting moments from the latest cricket matches! Watch the top performances and thrilling highlights.
      </p>

      {/* Conditional Rendering Based on the Active Section */}
      {activeSection === 'india-vs-australia' ? (
        <IndiaVsAustralia />
      ) : activeSection === 'england-vs-south-africa' ? (
        <EnglandVsSouthAfrica />
      ) : (
        // Main Highlights Section if no section is selected
        <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">Recent Matches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* India vs. Australia Highlight */}
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <img
                src={indiavsaus}
                alt="India vs. Australia"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-green-700">India vs. Australia</h3>
              <p className="text-gray-700">Watch the thrilling highlights from the India vs. Australia series!</p>
              <button
                onClick={() => {
                  setActiveSection('india-vs-australia');
                  window.scrollTo(0, 0); // Ensure scroll to top
                }}
                className="inline-block bg-green-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-green-600 transition duration-300"
              >
                Watch Highlights
              </button>
            </div>

            {/* England vs. South Africa Highlight */}
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <img
                src={engvsafrica}
                alt="England vs. South Africa"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-green-700">England vs. South Africa</h3>
              <p className="text-gray-700">Catch the latest action from the England vs. South Africa match.</p>
              <button
                onClick={() => {
                  setActiveSection('england-vs-south-africa');
                  window.scrollTo(0, 0); // Ensure scroll to top
                }}
                className="inline-block bg-green-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-green-600 transition duration-300"
              >
                Watch Highlights
              </button>
            </div>
            
          </div>
        </section>
      )}
    </div>
  );
}

export default MatchHighlights;
