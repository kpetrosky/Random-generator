import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DiceRoller from './components/pages/RandomDiceRoller';
import VerticalNavBar from './components/VerticalNavBar';
import Who from './components/pages/Who';
import What from './components/pages/What';
import Where from './components/pages/Where';
import When from './components/pages/When';
import Why from './components/pages/Why';
import How from './components/pages/How';

function App() {
  // Define a state variable for a counter with an initial value of 0
  const [count, setCount] = useState(0);

  // Move the useRef inside the component body
  const myRef = useRef();

  return (
    <Router>
      <div className="App">
        <VerticalNavBar />
        <Routes>
          <Route path="/" element={<DiceRoller />} />
          <Route path="/who" element={<Who />} />
          <Route path="/what" element={<What />} />
          <Route path="/where" element={<Where />} />
          <Route path="/when" element={<When />} />
          <Route path="/why" element={<Why />} /> {/* This should point to the Why component */}
          <Route path="/how" element={<How />} />
        </Routes>

        {/* Display the counter and a button to increment it */}
        <div>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>

        {/* Example of attaching the ref to an element */}
        <div ref={myRef}>This is a DOM element</div>
      </div>
    </Router>
  );
}

export default App;
