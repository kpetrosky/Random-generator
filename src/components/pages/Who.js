import React, { useState } from 'react';

function Who() {
  const options = [
    'Alice',
    'Bob',
    'Charlie',
    'David',
    'Eva',
    'Frank',
    'Grace',
    'Hannah',
    'Isaac',
    'Jane',
  ];

  const [randomWho, setRandomWho] = useState(null);

  const Who = () => {
    const randomIndex = Math.floor(Math.random() * options.length);
    const selectedWho = options[randomIndex];
    setRandomWho(selectedWho);
  };

  return (
    <div>
      <h1>Random "Who" Generator</h1>
      <div>
        <button onClick={Who}>Generate Random "Who"</button>
      </div>
      {randomWho && (
        <div>
          <p>Random "Who": {randomWho}</p>
        </div>
      )}
    </div>
  );
}

export default Who;
