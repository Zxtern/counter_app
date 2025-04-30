import { useState } from 'react';
import './App.css';

function App() {
  //I declared a state variable 'num' and a function 'setNum' to update the value of 'num'
  //Initial value is set to 0
  const [num, setNum] = useState(0); //num to display current number and setNum to update it when a button is clicked.
  
  return (
    //Main container
    <div className="app-container">
      {/* Displays the current value of the 'num' variable */}
      <h1 className="counter-heading">Current Number: {num}</h1>
      
      {/* Container for buttons, to allow adding or subtracting 1 */}
      <div className="button-container">
        {/* Button to increment the 'num' value by 1 */}
        <button 
          className="counter-button" 
          onClick={() => setNum(num + 1)}  // onClick calls setNum with num + 1 to increment the value
        >
          Add 1
        </button>
        
        {/* Button to decrement the 'num' value by 1 */}
        <button 
          className="counter-button" 
          onClick={() => setNum(num - 1)}  // onClick calls setNum with num - 1 to decrement the value
        >
          Subtract 1
        </button>
      </div>
    </div>
  );
  
}

export default App;
