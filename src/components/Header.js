import React, { useState } from 'react';
import './YourCSSFile.css'; // Import your CSS file
import DiceRoller from './components/pages/RandomDiceRoller';

function App() {
  // Define a state variable for counting
  const [count, setCount] = useState(0);

  return (
    <div className="center-container">
      {/* Header */}
      <header>
        <h1>Random Generator</h1>
      </header>

      {/* Your DiceRoller component */}
      <DiceRoller />

      {/* Display the counter and a button to increment it */}
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </div>
  );
}

export default App;
