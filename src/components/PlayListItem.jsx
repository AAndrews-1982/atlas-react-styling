// src/components/PlayListItem.jsx

import React from 'react';

const PlayListItem = ({ title, genre, length }) => {
  return (
    <div className="flex justify-between items-center p-2 border-b border-gray-300">
      <div>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-gray-600 text-sm">{genre}</p>
      </div>
      <p className="text-gray-600">{length}</p>
    </div>
  );
};

export default PlayListItem;

