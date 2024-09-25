import React, { useState } from 'react';
import { BrowserRouter as Router,} from 'react-router-dom'; 
import RegistrationForm from './components/RegistrationForm';
import JuniorCricketLeague from './components/JuniorCricketLeague';
import MatchHighlights from './components/MatchHighlights';
import CricketTournament from './components/CricketTournament';
import PlayerOfTheMonth from './components/PlayerOfTheMonth';
import UpcomingSeries from './components/UpcomingSeries';
import WomensCricketChampionship from './components/WomensCricketChampionship'; 

import bat from './assets/bat.jpg';
import cricket_mania from './assets/cricket_mania.jpg';
import junior_cricket from './assets/junior_cricket.jpg';
import women_cricket from './assets/women_cricket.jpg';

function App() {
  const [activeSection, setActiveSection] = useState(null); // Track which section/card is active

  const handleClick = (section) => {
    setActiveSection(section);  // Set the active section on click
    window.scrollTo(0, 0);      // Scroll to the top when a section is clicked
  };

  const handleBackToHome = () => {
    setActiveSection(null);     // Reset active section to null to go back to home
    window.scrollTo(0, 0);      // Scroll to the top when going back to home
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <header className="bg-gradient-to-r from-green-500 to-green-700 p-8 text-white text-center shadow-lg">
          <h1 className="text-5xl font-bold mb-2">Cricket Mania</h1>
          <p className="text-2xl italic">Experience the Thrill of Cricket</p>
          <img
            src={cricket_mania}
            alt="Cricket"
            className="w-200 h-60 mx-auto my-4 rounded-lg shadow-lg"
          />
        </header>

        {/* Main Content */}
        <main className="p-8 max-w-screen-lg mx-auto">
          {/* Conditionally render the active section or show the cards */}
          {activeSection === null && (
            <>
              {/* Upcoming Tournaments Section */}
              <section className="mb-12">
                <h2 className="text-4xl font-semibold mb-6 text-green-700">Upcoming Tournaments</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Cricket Tournament Card */}
                  <div
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer"
                    onClick={() => handleClick('cricket-tournament')}
                  >
                    <img
                      src={bat}
                      alt="Tournament"
                      className="w-full h-49 object-cover mb-4 rounded-lg"
                    />
                    <h3 className="text-2xl font-bold mb-2">Cricket Tournament 2024</h3>
                    <p className="text-gray-700">Join us for the exciting tournament with teams from all over the country.</p>
                  </div>

                  {/* Junior Cricket League */}
                  <div
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer"
                    onClick={() => handleClick('junior-cricket-league')}
                  >
                    <img
                      src={junior_cricket}
                      alt="Junior Cricket"
                      className="w-full h-57 object-cover mb-4 rounded-lg"
                    />
                    <h3 className="text-2xl font-bold mb-2">Junior Cricket League</h3>
                    <p className="text-gray-700">The best platform for young talents to showcase their skills.</p>
                  </div>

                  {/* Women's Cricket Championship */}
                  <div
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer"
                    onClick={() => handleClick('womens-cricket-championship')}
                  >
                    <img
                      src={women_cricket}
                      alt="Women's Cricket"
                      className="w-full h-50 object-cover mb-4 rounded-lg"
                    />
                    <h3 className="text-2xl font-bold mb-2">Women's Cricket Championship</h3>
                    <p className="text-gray-700">Empowering women through the spirit of cricket.</p>
                  </div>
                </div>
              </section>

              {/* Cricket News Section */}
              <section>
                <h2 className="text-4xl font-semibold mb-6 text-green-700">Cricket News</h2>
                <div className="space-y-6">
                  <div
                    className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer"
                    onClick={() => handleClick('match-highlights')}
                  >
                    <h3 className="text-2xl font-bold mb-2">Latest Match Highlights</h3>
                    <p className="text-gray-700">Catch up on the latest highlights from the recent cricket matches.</p>
                  </div>
                  
                  <div
                    className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer"
                    onClick={() => handleClick('player-of-the-month')}
                  >
                    <h3 className="text-2xl font-bold mb-2">Player of the Month: Virat Kohli</h3>
                    <p className="text-gray-700">Virat Kohli continues to dominate with exceptional performances.</p>
                  </div>

                  <div
                    className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer"
                    onClick={() => handleClick('upcoming-series')}
                  >
                    <h3 className="text-2xl font-bold mb-2">Upcoming Series: India vs. Australia</h3>
                    <p className="text-gray-700">Don't miss the thrilling action as India faces Australia in an epic series.</p>
                  </div>
                </div>
              </section>
            </>
          )}

          {/* Render Active Section's Component with Back to Home Button */}
          {activeSection !== null && (
            <>
              <button
                onClick={handleBackToHome}
                className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-600 transition duration-300 mb-6"
              >
                &larr; Back to Home
              </button>

              {/* Render the content dynamically */}
              {activeSection === 'cricket-tournament' && <CricketTournament />}
              {activeSection === 'junior-cricket-league' && <JuniorCricketLeague />}
              {activeSection === 'womens-cricket-championship' && <WomensCricketChampionship />}
              {activeSection === 'match-highlights' && <MatchHighlights />}
              {activeSection === 'player-of-the-month' && <PlayerOfTheMonth />}
              {activeSection === 'upcoming-series' && <UpcomingSeries />}
            </>
          )}

          {/* Add Registration Form Section */}
          <section className="my-12">
            <RegistrationForm />
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-green-500 to-green-700 p-6 text-white text-center shadow-inner">
          <p className="text-lg">&copy; 2024 XYZ Organization. All Rights Reserved.</p>
          <p className="text-sm mt-2">“Cricket is a team game. If you want fame for yourself, go play an individual game.”</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
