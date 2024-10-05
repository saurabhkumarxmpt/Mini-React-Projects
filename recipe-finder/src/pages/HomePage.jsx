import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (inputValue !== "") {
      setLoading(true);

      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
        .then((response) => response.json())
        .then((data) => {
          setData(data.meals);
          setLoading(false);
          console.log(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    }
  }, [inputValue]);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="py-8 md:py-16 text-3xl md:text-4xl font-semibold text-center">
        <h1>Recipe Search App</h1>
      </div>

      <div className="w-full max-w-lg px-4">
        <input
          type="text"
          value={inputValue}
          placeholder="Search Recipe"
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full h-[40px] border outline-none pl-4 rounded-md"
        />
      </div>

      <div className="bg-green-200 text-center mt-8 w-full max-w-4xl p-4">
        <h1 className="font-semibold text-xl md:text-2xl">Meals</h1>

        <div className="bg-red-200 max-h-[360px] overflow-y-auto mt-4 p-4">
          {loading ? (
            <p>Loading...</p>
          ) : data ? (
            <ul>
              {data.map((meal) => (
                <li
                  key={meal.idMeal}
                  className="text-lg hover:bg-amber-400 cursor-pointer p-2"
                >
                  <Link to={`/recipe/${meal.idMeal}`}>
                    {meal.strMeal}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>No meals found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
