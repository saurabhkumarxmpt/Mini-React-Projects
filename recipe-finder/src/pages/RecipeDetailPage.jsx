import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setRecipe(data.meals[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error in the API", error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      {loading ? (
        <p className="text-center pt-20 text-2xl">Loading...</p>
      ) : recipe ? (
        <div>
          <div className="flex gap-10 flex-col lg:gap-32 lg:flex-row py-10 px-4 lg:px-[170px] justify-center bg-slate-200">
            <div className="flex justify-center">
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="w-[350px] rounded-xl shadow-lg"
              />
            </div>
            <div className="bg-blue-300 p-6 lg:pl-10 lg:pr-20 rounded-xl lg:w-auto w-full mt-6 lg:mt-0 shadow-lg">
              <h1 className="text-3xl pb-4 lg:pb-10 text-center lg:text-left">
                {recipe.strMeal}
              </h1>
              <p className="pb-2 text-lg">
                <span className="font-semibold">Category:</span>{" "}
                {recipe.strCategory}
              </p>
              <p className="text-lg pb-2">
                <span className="font-semibold">Nationality:</span>{" "}
                {recipe.strArea}
              </p>
              <a
                href={recipe.strYoutube}
                target="_blank"
                className="text-lg pb-2 text-red-600 block lg:inline"
              >
                <span className="font-semibold text-black">Video Link:</span>{" "}
                Youtube
              </a>
            </div>
          </div>
          <div className="bg-slate-200 flex flex-col lg:flex-row gap-10 justify-between py-10 px-4 lg:px-[170px]">
            <div className="bg-emerald-500 w-full rounded-lg p-6 lg:p-10">
              <h1 className="text-lg font-semibold text-center py-4">
                {recipe.strMeal} Ingredients
              </h1>
              <div className="flex justify-between bg-white p-6 rounded-lg">
                <ul>
                  {Array.from({ length: 20 }).map((_, i) => {
                    const ingredient = recipe[`strIngredient${i + 1}`];
                    return ingredient ? <li key={i}>{ingredient}</li> : null;
                  })}
                </ul>
                <ul>
                  {Array.from({ length: 20 }).map((_, i) => {
                    const measure = recipe[`strMeasure${i + 1}`];
                    return measure ? <li key={i}>{measure}</li> : null;
                  })}
                </ul>
              </div>
            </div>
            <div className="bg-emerald-500 w-full rounded-lg p-6 lg:p-10">
              <h1 className="text-lg font-semibold text-center py-4">
                Cooking Instructions
              </h1>
              <div className="bg-white p-4 rounded-lg">
                <p>{recipe.strInstructions}</p>
              </div>
             
            </div>
          </div>
          <div className="flex justify-center bg-slate-200 py-20">
            <Link to="/" className="bg-green-600 py-3 px-10 text-lg text-white rounded-lg">Back</Link>
              </div>
        </div>
      ) : (
        <p>Recipe not found.</p>
      )}
    </div>
  );
};

export default RecipeDetail;
