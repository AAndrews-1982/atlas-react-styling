// src/components/VolumeControl.jsx

import React from 'react';

const VolumeControl = () => {
  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="volume" className="text-gray-600">Volume</label>
      <input
        id="volume"
        type="range"
        min="0"
        max="100"
        defaultValue="50"
        className="w-32"
      />
    </div>
  );
};

export default VolumeControl;
