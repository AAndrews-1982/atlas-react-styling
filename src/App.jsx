// src/App.jsx

import React from 'react';
import CoverArt from './components/CoverArt'; // Imports Cover Art
import CurrentlyPlaying from './components/CurrentlyPlaying'; // Imports CurrentPlaying
import Footer from "./components/Footer"; // Imports Footer
import MusicPlayer from "./MusicPlayer"; // Imports the Music Player

function App() {
  return (
    <div className="h-full flex flex-col justify-between p-8 min-h-screen">
	<CoverArt /> {/* Render CoverArt */}
	<CurrentlyPlaying />
      <Footer />
    </div>
  );
}

export default App;
