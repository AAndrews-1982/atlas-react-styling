// src/components/CoverArt.jsx

import React from 'react';
import coverArt from '../assets/placeholder.svg'; // Path to placeholder image

const CoverArt = () => {
  return (
    <div className="flex justify-center items-center">
      <img 
	src={coverArt} // Using imported image
	alt="Cover Art"
	className="w-100 h-100 object-cover rounded-lg border-2 border-gray-300"
	/>
    </div>
  );
};

export default CoverArt;
