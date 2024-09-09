// src/components/CurrentlyPlaying.jsx

import React from 'react';
import CoverArt from './CoverArt';
import SongTitle from './SongTitle';
import PlayControls from './PlayControls';
import VolumeControl from './VolumeControl';

const CurrentlyPlaying = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
      <CoverArt /> {/* Renders the Cover Art */}
	<div classname="mt-4">
      <SongTitle title="Song Title" author="Artist Name" />
      <div className="mt-4 flex flex-col items-center space-y-4">
        <PlayControls />
        <VolumeControl />
       </div>
     </div>
   </div>
  );
};

export default CurrentlyPlaying;
