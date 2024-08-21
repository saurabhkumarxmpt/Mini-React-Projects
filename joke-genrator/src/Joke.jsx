import { useState,useEffect } from "react";
const Joke=()=>{
  const[joke,setjoke]=useState(null);

  useEffect(() =>{
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then((resiveData) => resiveData.json())
    .then((jsondata) =>{
      setjoke(jsondata);
    })
    .catch((error) => console.log(error));
    
  },  []);

  return(
    <div className="mt-12 text-[18px]">
    
      {joke ? (
        <div>
          <p>Setup: {joke.setup}</p>
          <p>Punchline: {joke.punchline}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>   
  )
}

export default Joke