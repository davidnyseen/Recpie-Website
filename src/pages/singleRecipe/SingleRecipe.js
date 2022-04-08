import { Routes, Route, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './SingleRecipe.css'
import { useEffect } from "react";
import Rating from "../../components/Rating/Rating.js"

const SingleRecipe = ({recipe, goBack, fromAPI, curr_ID}) => {
    /*let params = useParams();
    const { recipes } = useSelector((state) => state.recipes);
    let recipe = recipes[params.singlerecipeid];*/

    //console.log(recipe.image);

    useEffect(() => {
        //window.scrollTo(0, 0);
    }, [])

    console.log(fromAPI);
    console.log(recipe)
    
    return (
        <div className="single-recipe">
            <img src={recipe.images ? (recipe.images.LARGE ? recipe.images.LARGE.url : recipe.images.REGULAR.url) : recipe.imgUrl}></img>
            <div class="top-part">
                <h1 class="recipeLabel">{recipe.label ? recipe.label : recipe.recipename} <button onClick={goBack}>Back</button></h1>
                <h2 class="rating">{fromAPI ? "" : <Rating curr_ID = {recipe._id}/>}</h2>
                <div class="informations">
                    <p class="recipeAuthor">Author: {recipe.source ? recipe.source : ""}</p>
                    <p class="type">Cuisine type: {recipe.cuisineType ? recipe.cuisineType : ""}</p>
                    <p class="mealType">Meal type: {recipe.mealType}</p>
                    <p class="prepTime">Preparation time: {recipe.totalTime ? recipe.totalTime : ""} min</p>
                    <p>Current rating: {recipe.ratingAverage}</p>
                </div>
            </div>
            <hr class="main-bar"></hr>

            <div class="globalInfo">
                <div class="column">
                    <p class="ingredients">Ingredients: {recipe.ingredientLines ? recipe.ingredientLines.length : ""}</p>
                </div>
                <div class="column">
                    <p class="favorite">Add to favorite</p>
                </div>
                <div class="column">
                    <p class="addComment">Add a comment</p>
                </div>

            </div>
            <hr class="main-bar"></hr>
            <div class="ingredientsDetails">
                <h1>Ingredients:</h1>
                <ol>{recipe.ingredientLines ? (recipe.ingredientLines && recipe.ingredientLines.map((step, i) =>
                (<li>{step}</li>))) : recipe.directions}</ol>
                </div>
        </div>

    );
}

export default SingleRecipe;
