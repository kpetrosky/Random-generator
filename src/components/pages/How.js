// RandomHowGenerator.js
import React, { useState } from 'react';

const How = () => {
  // Define an array of possible "How" options
  const howOptions = [
    'How does it work?',
    'How can you improve this?',
    'How did you learn this skill?',
    'How would you approach this problem?',
    // Add more "How" questions as needed
  ];

  // Create a state variable to store the randomly selected "How" question
  const [randomHow, setRandomHow] = useState('');

  // Function to generate a random "How" question
  const generateRandomHow = () => {
    const randomIndex = Math.floor(Math.random() * howOptions.length);
    setRandomHow(howOptions[randomIndex]);
  };

  return (
    <div className="how-generator">
      <h2>Random "How" Generator</h2>
      <button onClick={generateRandomHow}>Generate Random "How" Question</button>
      {randomHow && <p>{randomHow}</p>}
    </div>
  );
};

export default How;
