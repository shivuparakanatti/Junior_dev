
import React from 'react';

const Card = ({ name, description }) => {
  return (
    <div className="w-64 bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Card;
