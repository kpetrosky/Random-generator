import React, { useState } from 'react';

function When() {
  const [randomDateTime, setRandomDateTime] = useState(null);

  const When = () => {
    const year = Math.floor(Math.random() * 100) + 2000; // Random year between 2000 and 2099
    const month = Math.floor(Math.random() * 12) + 1; // Random month between 1 and 12
    const day = Math.floor(Math.random() * 31) + 1; // Random day between 1 and 31
    const hour = Math.floor(Math.random() * 24); // Random hour between 0 and 23
    const minute = Math.floor(Math.random() * 60); // Random minute between 0 and 59
    const second = Math.floor(Math.random() * 60); // Random second between 0 and 59

    // Create a Date object with the random values
    const randomDate = new Date(year, month - 1, day, hour, minute, second);

    // Update the state with the random date and time
    setRandomDateTime(randomDate.toLocaleString());
  };

  return (
    <div>
      <h1>Random Date and Time Generator</h1>
      <div>
        <button onClick={When}>Generate Random Date and Time</button>
      </div>
      {randomDateTime && (
        <div>
          <p>Random Date and Time: {randomDateTime}</p>
        </div>
      )}
    </div>
  );
}

export default When;
