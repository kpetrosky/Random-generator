import React, { useState } from 'react';

function Where() {
  const locations = [
    'New York City, USA',
    'Paris, France',
    'Tokyo, Japan',
    'London, UK',
    'Sydney, Australia',
    'Rome, Italy',
    'Cairo, Egypt',
    'Rio de Janeiro, Brazil',
    'Cape Town, South Africa',
    'Moscow, Russia',
  ];

  const [randomLocation, setRandomLocation] = useState(null);

  const Where = () => {
    const randomIndex = Math.floor(Math.random() * locations.length);
    const selectedLocation = locations[randomIndex];
    setRandomLocation(selectedLocation);
  };

  return (
    <div>
      <h1>Random Location Generator</h1>
      <div>
        <button onClick={Where}>Generate Random Location</button>
      </div>
      {randomLocation && (
        <div>
          <p>Random Location: {randomLocation}</p>
        </div>
      )}
    </div>
  );
}

export default Where;
