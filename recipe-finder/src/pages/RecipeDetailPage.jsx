import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";

const RecipeDetail=()=>{
    const {id} =useParams();
    const[recipe,setrecipe]=useState(null);
    const[loading,setloading]=useState(true);

    useEffect(()=>{
        fetch( `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((response) => response.json())
        .then((data)=>{
        setrecipe(data.meals[0]);
        setloading(false);
        })
        .catch((error) => {
            console.error("Error in the api", error);
            setloading(false)
        })
    },[id]);
    return(
        <div>
            {
                loading ? (
                    <p className="text-center pt-20 text-2xl">Loading...</p>
                ): recipe ?(
                    <div>
                     <div className="flex py-20 px-[170px] bg-slate-200 justify-center">
                        <div className="">
                            <img src={recipe.strMealThumb} alt={recipe.strMeal} className="size-[350px] rounded-xl shadow-lg"/>
                        </div>
                        <div className="bg-blue-300 pl-10 pr-20 rounded-xl w-auto py-7 ml-28 shadow-lg ">
                            <h1 className="text-3xl pb-10">{recipe.strMeal}</h1>
                            <p className="pb-2 text-lg"><span className="font-semibold">Catagory:</span> {recipe.strCategory}</p>
                            <p className="text-lg pb-2"><span className="font-semibold">Nationality:</span> {recipe.strArea}</p>
                            <a href={recipe.strYoutube} className="text-lg pb-2 text-red-600"><span className="font-semibold text-black">Video Link:</span> Youtube</a>
                        </div>
                     </div>
                     <div className="bg-red-400">
                            <h2>fdbh</h2>
                     </div>
                    </div>  
                ):(
                    <p>recipe not found.</p>
                )

            }
        </div>
    )
}

export default RecipeDetail