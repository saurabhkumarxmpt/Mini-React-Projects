import React, { useEffect, useState } from "react";

const App = () => {
  const [button, setButton] = useState("");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (button !== "") { // Fetch only if the button (input) is not empty
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${button}`)
        .then((response) => response.json())
        .then((data) => {
          setData(data.meals); // Update with `data.meals` because the API returns the meals array
          setLoading(false);
          console.log(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    }
  }, [button]); // Re-run the effect whenever `button` changes

  return (
    <div>
      <input
        type="text"
        value={button}
        onChange={(e) => setButton(e.target.value)}
      />
      <h1>Meals</h1>
      {loading && <p>Loading...</p>}
      {!loading && data && (
        <ul>
          {data.map((meal) => (
            <li key={meal.idMeal}>{meal.strMeal}</li> // Display the meal names
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
