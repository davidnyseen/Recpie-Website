import { Routes, Route, useParams } from "react-router-dom";
const SingleRecipe = ({ recipes }) => {
    let params = useParams();
    // try {
    //     fetch('https://www.edamam.com/ontologies/edamam.owl#recipe_b79327d05b8e5b838ad6cfd9576b30b6')
    //     .then((res) => res.json())
    //     .then(res => console.log(res))
    // }
    // catch (err) {
    //     console.log(err);
    // }
    return (
        <div className="single-recipe">
            <h1>Single recipe</h1>
            <h1>Invoice {params.singlerecipeid}</h1>
        </div>

    );
}

export default SingleRecipe;
