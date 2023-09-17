import React, { useState } from 'react';

function Why() {
  const options = [
    'To learn something new',
    'For fun and enjoyment',
    'To solve a problem',
    'To help others',
    'To challenge myself',
    'To improve a skill',
    'To explore new opportunities',
    'To express creativity',
  ];

  const [randomWhy, setRandomWhy] = useState(null);

  const Why = () => {
    const randomIndex = Math.floor(Math.random() * options.length);
    const selectedWhy = options[randomIndex];
    setRandomWhy(selectedWhy);
  };

  return (
    <div>
      <h1>Random "Why" Generator</h1>
      <div>
        <button onClick={Why}>Generate Random "Why"</button>
      </div>
      {randomWhy && (
        <div>
          <p>Random "Why": {randomWhy}</p>
        </div>
      )}
    </div>
  );
}

export default Why;
