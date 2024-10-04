import { useState,useEffect } from "react"


const SearchPage=()=>{
    const[inputValue,setinputValue]=useState("");
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        if (inputValue !== "") {
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
    return(
        <div className="flex justify-center flex-col items-center">
            <div className="py-16 text-4xl font-semibold">
                <h1>Recipe Serach App</h1>
            </div>
            <div>
                    <input 
                    type="text"
                    value={inputValue}
                    placeholder="Search Recipe"
                    onChange={(e) => setinputValue(e.target.value)}
                    className="w-[400px] h-[40px] border outline-none pl-4 rounded-md"
                     />
                </div>
            <div className="bg-green-200 text-center">
                <h1 className="font-semibold text-2xl">Meals</h1>
                <div className="bg-red-200 text-center max-w-60 max-h-[360px] px-[300px] mt-10 overflow-hidden overflow-y-auto">
                {loading && <p>Loading...</p>}
                {!loading && data && (
        <ul>
          {data.map((meal) => (
            <li key={meal.idMeal}>{meal.strMeal}</li>
          ))}
        </ul>
      )}
                </div>
            </div>
        </div>
    )
}

export default SearchPage