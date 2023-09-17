import React, { useState } from 'react';

function What() {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  const [randomItem, setRandomItem] = useState(null);

  const What = () => {
    // Generate a random index to select an item from the array
    const randomIndex = Math.floor(Math.random() * items.length);
    setRandomItem(items[randomIndex]);
  };

  return (
    <div>
      <h1>Random Item Generator</h1>
      <div>
        <button onClick={What}>Generate Random Item</button>
      </div>
      {randomItem && (
        <div>
          <p>Random Item: {randomItem}</p>
        </div>
      )}
    </div>
  );
}

export default What;
