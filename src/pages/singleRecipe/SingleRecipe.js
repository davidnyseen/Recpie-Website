import { Routes, Route, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const SingleRecipe = () => {
    let params = useParams();
    const { recipes } = useSelector((state) => state.recipes);
    let recipe = recipes[params.singlerecipeid];
    return (
        <div className="single-recipe">
            <h1>Single recipe</h1>
            <img src={recipe.recipe.image} alt="" />
        </div>

    );
}

export default SingleRecipe;
