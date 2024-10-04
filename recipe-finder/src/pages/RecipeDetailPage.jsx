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
        <div className="container">
            
        </div>
    )
}

export default RecipeDetail