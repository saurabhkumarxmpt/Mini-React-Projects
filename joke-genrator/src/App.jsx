import { useState } from "react";
import Joke from "./Joke";
import './index.css'

const App = () => {
  const [showJoke, setShowJoke] = useState(false);

  const handleClick = () => {
    setShowJoke(false); // Reset the state to trigger a re-render
    setTimeout(() => setShowJoke(true), 0); // Immediately set it back to true
  };

  return (
    <div  className="flex justify-center mt-20">
    <div className="h-[400px] w-[600px] bg-green-300 text-center rounded">
      <h1 className="text-center mt-10 text-3xl text-blue-600">Random Joke Generator</h1>
      <button 
      onClick={handleClick}
      className="mt-6 bg-blue-600 text-white p-3 rounded">
      Click here for a joke
      </button>
      
      {showJoke && <Joke />}
    </div>
    </div>
  );
}

export default App;
