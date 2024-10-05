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
                     <div className="bg-red-400 flex justify-between py-10 px-[170px] ">
                        <div className="bg-emerald-500 w-full  max-w-[50%] rounded-lg">
                            <h1 className="text-lg font-semibold text-center py-4 ">{recipe.strMeal} Ingredients
                            </h1>

                            <div className="bg-white justify-between px-20 py-10 rounded-b-lg">
                                <div className="flex justify-between">
                                <ul>
                                    <li>{recipe.strIngredient1}</li>
                                    <li>{recipe.strIngredient2}</li>
                                    <li>{recipe.strIngredient3}</li>
                                    <li>{recipe.strIngredient4}</li>
                                    <li>{recipe.strIngredient5}</li>
                                    <li>{recipe.strIngredient6}</li>
                                    <li>{recipe.strIngredient7}</li>
                                    <li>{recipe.strIngredient8}</li>
                                    <li>{recipe.strIngredient9}</li>
                                    <li>{recipe.strIngredient10}</li>
                                    <li>{recipe.strIngredient11}</li>
                                    <li>{recipe.strIngredient12}</li>
                                    <li>{recipe.strIngredient13}</li>
                                    <li>{recipe.strIngredient14}</li>
                                    <li>{recipe.strIngredient15}</li>
                                    <li>{recipe.strIngredient16}</li>
                                    <li>{recipe.strIngredient17}</li>
                                    <li>{recipe.strIngredient18}</li>
                                    <li>{recipe.strIngredient19}</li>
                                    <li>{recipe.strIngredient20}</li>
                                </ul>
                                <ul>
                                    <li>{recipe.strMeasure1}</li>
                                    <li>{recipe.strMeasure2}</li>
                                    <li>{recipe.strMeasure3}</li>
                                    <li>{recipe.strMeasure4}</li>
                                    <li>{recipe.strMeasure5}</li>
                                    <li>{recipe.strMeasure6}</li>
                                    <li>{recipe.strMeasure7}</li>
                                    <li>{recipe.strMeasure8}</li>
                                    <li>{recipe.strMeasure9}</li>
                                    <li>{recipe.strMeasure10}</li>
                                    <li>{recipe.strMeasure11}</li>
                                    <li>{recipe.strMeasure12}</li>
                                    <li>{recipe.strMeasure13}</li>
                                    <li>{recipe.strMeasure14}</li>
                                    <li>{recipe.strMeasure15}</li>
                                    <li>{recipe.strMeasure16}</li>
                                    <li>{recipe.strMeasure17}</li>
                                    <li>{recipe.strMeasure18}</li>
                                    <li>{recipe.strMeasure19}</li>
                                    <li>{recipe.strMeasure20}</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        <div className="bg-green-500">
                            2 sned
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