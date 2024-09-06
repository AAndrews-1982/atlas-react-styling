// src/components/CoverArt.jsx

import React from 'react';
import coverArt from '../assets/placeholder.svg'; // Path for cover image

const CoverArt = () => {
  return (
    <div className="w-32 h-32 overflow-hidden rounded-lg border border-gray-300">
      <img src={coverArt} alt="Cover Art" className="w-full h-full object-cover" />
    </div>
  );
};

export default CoverArt;

