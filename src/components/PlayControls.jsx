// src/components/PlayControls.jsx

import React from 'react';
import { HiPlay, HiPause, HiFastForward, HiRewind, HiArrowsRightLeft } from 'react-icons/hi';

const PlayControls = () => {
  return (
    <div className="flex justify-center space-x-4">
      <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
        <HiArrowsRightLeft size={24} />
      </button>
      <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
        <HiRewind size={24} />
      </button>
      <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
        <HiPlay size={24} />
      </button>
      <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
        <HiFastForward size={24} />
      </button>
      <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
        <HiArrowsRightLeft size={24} />
      </button>
    </div>
  );
};

export default PlayControls;
