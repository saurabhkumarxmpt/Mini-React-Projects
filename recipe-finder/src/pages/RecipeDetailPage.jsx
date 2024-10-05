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
                     <div className="flex py-20 px-[170px]">
                        <div className="">
                            <img src={recipe.strMealThumb} alt={recipe.strMeal} className="size-[350px] rounded-md"/>
                        </div>
                        <div className="bg-green-200 pl-10 pr-20 rounded-xl w-auto py-7 ml-28 ">
                            <h1 className="text-3xl py-5">{recipe.strMeal}</h1>
                            <p>Catagory: <span>{recipe.strCategory}</span></p>
                        </div>
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