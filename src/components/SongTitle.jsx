// src/components/SongTitle.jsx

import React from 'react';

const SongTitle = ({ title, author }) => {
  return (
    <div className="text-center">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{author}</p>
    </div>
  );
};

export default SongTitle;
