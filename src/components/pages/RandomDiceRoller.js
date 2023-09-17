import React, { useState } from 'react';

function RandomDiceRoller() {
  const [diceValue, setDiceValue] = useState(null);

  const rollDice = () => {
    // Generate a random number between 1 and 6
    const randomValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(randomValue);
  };

  return (
    <div>
      <h1>Random Dice Roller</h1>
      <div>
        <button onClick={rollDice}>Roll the Dice</button>
      </div>
      {diceValue !== null && (
        <div>
          <p>You rolled: {diceValue}</p>
        </div>
      )}
    </div>
  );
}

export default RandomDiceRoller;
