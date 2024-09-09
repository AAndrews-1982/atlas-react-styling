// src/MusicPlayer.jsx

import React from 'react';
import CurrentlyPlaying from './components/CurrentlyPlaying';

export default function MusicPlayer() {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
      <CurrentlyPlaying />
      {/* You can add more components or content here if needed */}
    </div>
  );
}
